"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// This would be connected to a database or API in a real implementation
export default function AdminPage() {
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // This would be a secure authentication in production
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      toast({
        title: "Authentication Failed",
        description: "Please check your password and try again.",
        variant: "destructive",
      })
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your password to access the admin panel</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Website Admin</h1>

      <Tabs defaultValue="testimonials">
        <TabsList className="mb-8">
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="content">Page Content</TabsTrigger>
        </TabsList>

        <TabsContent value="testimonials">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Testimonials</CardTitle>
                <CardDescription>Add, edit, or remove customer testimonials</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Testimonial management interface would go here */}
                <div className="grid gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Michael Johnson</h3>
                        <p className="text-sm text-gray-500">Alpharetta, GA</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                    <p className="mt-2 text-sm">
                      Concrete Pros transformed my cracked, uneven driveway into a beautiful, smooth surface...
                    </p>
                  </div>

                  {/* More testimonials would be listed here */}
                </div>
              </CardContent>
              <CardFooter>
                <Button>Add New Testimonial</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Manage Services</CardTitle>
              <CardDescription>Update your service offerings</CardDescription>
            </CardHeader>
            <CardContent>{/* Services management interface would go here */}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Edit Page Content</CardTitle>
              <CardDescription>Update text and messaging on your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="hero-title">Hero Title</Label>
                  <Input id="hero-title" defaultValue="Concrete Driveways, Patios & More!" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                  <Input id="hero-subtitle" defaultValue="Just Concrete Pros" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="about-text">About Us Text</Label>
                  <Textarea
                    id="about-text"
                    rows={5}
                    defaultValue="With 20 years of experience in the concrete industry, we've built a reputation for quality workmanship and exceptional customer service in North Atlanta, Georgia."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

