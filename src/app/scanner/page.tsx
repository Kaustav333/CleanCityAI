'use client'

import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Camera, RefreshCw } from 'lucide-react'
import { useState } from 'react'

export default function AIScannerPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [result, setResult] = useState<any>(null)

  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
      setResult(null)
    }
  }

  const handleScan = async () => {
    if (!file) return
    setIsScanning(true)
    
    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('/api/scan', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) throw new Error('Failed to analyze image')
      
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error(error)
      alert('Error analyzing image. Please try again.')
    } finally {
      setIsScanning(false)
    }
  }

  return (
    <DashboardLayout role="citizen">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Waste Scanner</h1>
          <p className="text-gray-500">Not sure how to dispose of an item? Let our AI help you.</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Scan Item</CardTitle>
            <CardDescription>Upload a clear photo of the waste item.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!result ? (
              <div className="space-y-4">
                <label className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer bg-gray-50/50 block relative overflow-hidden">
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                  {preview ? (
                    <img src={preview} alt="Preview" className="mx-auto h-48 object-contain" />
                  ) : (
                    <>
                      <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <div className="text-sm text-gray-600 mb-2">
                        <span className="text-green-600 font-semibold hover:underline">Click to upload</span> or drag and drop
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </>
                  )}
                </label>
                
                <Button 
                  onClick={handleScan} 
                  disabled={isScanning || !file}
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  {isScanning ? (
                    <><RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
                  ) : (
                    'Scan Waste'
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-6 bg-green-50 rounded-lg border border-green-100 text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{result.category}</h3>
                  <p className="text-sm text-green-600 mb-4">Confidence: {result.confidence}</p>
                  <p className="font-medium text-gray-800">{result.instruction}</p>
                  <p className="text-sm text-gray-500 mt-2">Nearest Drop-off: {result.nearestBin}</p>
                </div>
                <Button 
                  onClick={() => setResult(null)} 
                  variant="outline" 
                  className="w-full"
                >
                  Scan Another Item
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
