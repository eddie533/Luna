"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GetStartedPage() {
  const [userType, setUserType] = useState("volunteer")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 text-center md:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl xl:text-8xl pb-2 leading-tight">
            Get Started with Luna Initiative
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Join us in our mission to empower young people through education. Whether you're a potential volunteer or
            partner, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label>I am a:</Label>
                <RadioGroup defaultValue="volunteer" onValueChange={setUserType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="volunteer" id="volunteer" />
                    <Label htmlFor="volunteer">Potential Volunteer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="school" id="school" />
                    <Label htmlFor="school">School Representative</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="charity" id="charity" />
                    <Label htmlFor="charity">Charity Representative</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              {userType === "volunteer" && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="07123 456789" required />
                </div>
              )}
              {userType !== "volunteer" && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="07123 456789" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us how you'd like to get involved..." required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center md:p-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Support Our Mission</h2>
          <p className="mb-8 text-muted-foreground">
            Your donation can make a significant impact in empowering young people through education.
          </p>
          <Link href="/donate">
            <Button size="lg" className="rounded-full">
              Donate Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

