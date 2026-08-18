import { NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              inlineData: {
                data: buffer.toString('base64'),
                mimeType: file.type,
              }
            },
            {
              text: `Analyze this image and identify the type of waste. 
              Respond ONLY with a JSON object in the following format:
              {
                "category": "Plastic Waste | Paper | Glass | Metal | Organic | E-Waste | Mixed Waste",
                "confidence": "A percentage string like '95%'",
                "instruction": "A short instruction on how to dispose of it.",
                "nearestBin": "A suggested distance like '1.2 km away' based on the category"
              }`
            }
          ]
        }
      ]
    })
    
    const text = response.text
    if (!text) {
      throw new Error('No response from AI')
    }
    
    // Clean up potential markdown formatting from the JSON response
    const jsonStr = text.replace(/```json\n?|\n?```/g, '').trim()
    const result = JSON.parse(jsonStr)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error scanning image:', error)
    return NextResponse.json({ error: 'Failed to analyze image' }, { status: 500 })
  }
}
