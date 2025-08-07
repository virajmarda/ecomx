"use client";

import Link from "next/link";
import { ArrowLeft, Ruler, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SizeGuidePage() {
  const clothingSizes = {
    men: {
      shirts: [
        { size: "XS", chest: "34-36", waist: "28-30", neck: "14-14.5" },
        { size: "S", chest: "36-38", waist: "30-32", neck: "15-15.5" },
        { size: "M", chest: "38-40", waist: "32-34", neck: "16-16.5" },
        { size: "L", chest: "40-42", waist: "34-36", neck: "17-17.5" },
        { size: "XL", chest: "42-44", waist: "36-38", neck: "18-18.5" },
        { size: "XXL", chest: "44-46", waist: "38-40", neck: "19-19.5" }
      ],
      pants: [
        { size: "28", waist: "28", hip: "36", inseam: "30-34" },
        { size: "30", waist: "30", hip: "38", inseam: "30-34" },
        { size: "32", waist: "32", hip: "40", inseam: "30-34" },
        { size: "34", waist: "34", hip: "42", inseam: "30-34" },
        { size: "36", waist: "36", hip: "44", inseam: "30-34" },
        { size: "38", waist: "38", hip: "46", inseam: "30-34" }
      ]
    },
    women: {
      tops: [
        { size: "XS", bust: "32-34", waist: "24-26", hip: "34-36" },
        { size: "S", bust: "34-36", waist: "26-28", hip: "36-38" },
        { size: "M", bust: "36-38", waist: "28-30", hip: "38-40" },
        { size: "L", bust: "38-40", waist: "30-32", hip: "40-42" },
        { size: "XL", bust: "40-42", waist: "32-34", hip: "42-44" },
        { size: "XXL", bust: "42-44", waist: "34-36", hip: "44-46" }
      ],
      dresses: [
        { size: "XS", bust: "32", waist: "24", hip: "34" },
        { size: "S", bust: "34", waist: "26", hip: "36" },
        { size: "M", bust: "36", waist: "28", hip: "38" },
        { size: "L", bust: "38", waist: "30", hip: "40" },
        { size: "XL", bust: "40", waist: "32", hip: "42" },
        { size: "XXL", bust: "42", waist: "34", hip: "44" }
      ]
    }
  };

  const shoeSizes = [
    { us: "6", uk: "5.5", eu: "39", cm: "24.5" },
    { us: "6.5", uk: "6", eu: "39.5", cm: "25" },
    { us: "7", uk: "6.5", eu: "40", cm: "25.5" },
    { us: "7.5", uk: "7", eu: "40.5", cm: "26" },
    { us: "8", uk: "7.5", eu: "41", cm: "26.5" },
    { us: "8.5", uk: "8", eu: "42", cm: "27" },
    { us: "9", uk: "8.5", eu: "42.5", cm: "27.5" },
    { us: "9.5", uk: "9", eu: "43", cm: "28" },
    { us: "10", uk: "9.5", eu: "44", cm: "28.5" },
    { us: "10.5", uk: "10", eu: "44.5", cm: "29" },
    { us: "11", uk: "10.5", eu: "45", cm: "29.5" },
    { us: "12", uk: "11.5", eu: "46", cm: "30.5" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/help" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Help Center
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Ruler className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Size Guide</h1>
              <p className="text-muted-foreground">Find your perfect fit with our comprehensive size charts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* How to Measure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              How to Measure Yourself
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">For Clothing:</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Chest/Bust:</strong> Measure around the fullest part of your chest</li>
                  <li><strong>Waist:</strong> Measure around your natural waistline</li>
                  <li><strong>Hip:</strong> Measure around the fullest part of your hips</li>
                  <li><strong>Inseam:</strong> Measure from crotch to ankle</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">For Shoes:</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Length:</strong> Measure from heel to longest toe</li>
                  <li><strong>Width:</strong> Measure across the widest part of your foot</li>
                  <li><strong>Best Time:</strong> Measure feet in the evening when they're largest</li>
                  <li><strong>Both Feet:</strong> Measure both feet and use the larger measurement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Size Charts */}
        <Tabs defaultValue="clothing" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="clothing">Clothing</TabsTrigger>
            <TabsTrigger value="shoes">Shoes</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
          </TabsList>

          <TabsContent value="clothing" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Men's Clothing */}
              <Card>
                <CardHeader>
                  <CardTitle>Men's Clothing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Shirts & T-Shirts (inches)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Size</th>
                              <th className="text-left p-2">Chest</th>
                              <th className="text-left p-2">Waist</th>
                              <th className="text-left p-2">Neck</th>
                            </tr>
                          </thead>
                          <tbody>
                            {clothingSizes.men.shirts.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{size.size}</td>
                                <td className="p-2">{size.chest}</td>
                                <td className="p-2">{size.waist}</td>
                                <td className="p-2">{size.neck}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Pants & Jeans (inches)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Size</th>
                              <th className="text-left p-2">Waist</th>
                              <th className="text-left p-2">Hip</th>
                              <th className="text-left p-2">Inseam</th>
                            </tr>
                          </thead>
                          <tbody>
                            {clothingSizes.men.pants.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{size.size}</td>
                                <td className="p-2">{size.waist}</td>
                                <td className="p-2">{size.hip}</td>
                                <td className="p-2">{size.inseam}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Women's Clothing */}
              <Card>
                <CardHeader>
                  <CardTitle>Women's Clothing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Tops & Blouses (inches)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Size</th>
                              <th className="text-left p-2">Bust</th>
                              <th className="text-left p-2">Waist</th>
                              <th className="text-left p-2">Hip</th>
                            </tr>
                          </thead>
                          <tbody>
                            {clothingSizes.women.tops.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{size.size}</td>
                                <td className="p-2">{size.bust}</td>
                                <td className="p-2">{size.waist}</td>
                                <td className="p-2">{size.hip}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Dresses (inches)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Size</th>
                              <th className="text-left p-2">Bust</th>
                              <th className="text-left p-2">Waist</th>
                              <th className="text-left p-2">Hip</th>
                            </tr>
                          </thead>
                          <tbody>
                            {clothingSizes.women.dresses.map((size, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{size.size}</td>
                                <td className="p-2">{size.bust}</td>
                                <td className="p-2">{size.waist}</td>
                                <td className="p-2">{size.hip}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shoe Size Conversion Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">US</th>
                        <th className="text-left p-3">UK</th>
                        <th className="text-left p-3">EU</th>
                        <th className="text-left p-3">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shoeSizes.map((size, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{size.us}</td>
                          <td className="p-3">{size.uk}</td>
                          <td className="p-3">{size.eu}</td>
                          <td className="p-3">{size.cm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessories" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ring Sizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">US Size</th>
                          <th className="text-left p-2">Diameter (mm)</th>
                          <th className="text-left p-2">Circumference (mm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="p-2">5</td><td className="p-2">15.7</td><td className="p-2">49.3</td></tr>
                        <tr className="border-b"><td className="p-2">6</td><td className="p-2">16.5</td><td className="p-2">51.9</td></tr>
                        <tr className="border-b"><td className="p-2">7</td><td className="p-2">17.3</td><td className="p-2">54.4</td></tr>
                        <tr className="border-b"><td className="p-2">8</td><td className="p-2">18.1</td><td className="p-2">57.0</td></tr>
                        <tr className="border-b"><td className="p-2">9</td><td className="p-2">19.0</td><td className="p-2">59.5</td></tr>
                        <tr className="border-b"><td className="p-2">10</td><td className="p-2">19.8</td><td className="p-2">62.1</td></tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Watch Band Sizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Wrist Circumference</h3>
                      <ul className="text-sm space-y-1">
                        <li><strong>Small:</strong> 5.5" - 6.5" (140-165mm)</li>
                        <li><strong>Medium:</strong> 6.5" - 7.5" (165-190mm)</li>
                        <li><strong>Large:</strong> 7.5" - 8.5" (190-215mm)</li>
                        <li><strong>Extra Large:</strong> 8.5" - 9.5" (215-240mm)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">How to Measure</h3>
                      <p className="text-sm text-muted-foreground">
                        Wrap a measuring tape around your wrist where you normally wear a watch. 
                        The tape should be snug but not tight.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Fit Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Fit Tips & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">General Guidelines</h3>
                <ul className="space-y-2 text-sm">
                  <li>• When between sizes, size up for a looser fit, size down for a tighter fit</li>
                  <li>• Consider the fabric - stretchy materials may fit differently</li>
                  <li>• Check product reviews for fit feedback from other customers</li>
                  <li>• Different brands may have slight variations in sizing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Still Not Sure?</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Contact our customer service for personalized sizing help</li>
                  <li>• Take advantage of our free returns and exchanges</li>
                  <li>• Read product-specific sizing notes in item descriptions</li>
                  <li>• Check if the item runs small, large, or true to size</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}