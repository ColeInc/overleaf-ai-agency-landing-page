"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/magicui/border-beam"
import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import { inter } from "@/lib/fonts"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-[11px] h-[11px] rounded-full overflow-hidden">
              <div className="absolute inset-0 animate-gradient-flow bg-gradient-to-br from-[#BFE2E4] via-[#9fd5d8] to-[#7ec8cc] opacity-90" />
              <div className="absolute inset-0 animate-gradient-pulse bg-gradient-to-tr from-[#d4f0f1] via-[#BFE2E4] to-[#a8dde0] mix-blend-screen" />
            </div>
            <span className={`text-xl font-bold text-primary ${inter.className}`}>overleaf.ai</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="/#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary !text-[#e0e0e0]"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary !text-[#e0e0e0]"
          >
            Case Studies
          </Link>
          <Link
            href="/#book-call"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary !text-[#e0e0e0]"
          >
            Contact
          </Link>
          {/* <div className="relative">
            <Button asChild variant="outline" className="relative overflow-hidden">
              <Link href="#donate">Donate</Link>
            </Button>
            <BorderBeam size={100} duration={8} colorFrom="#3b82f6" colorTo="#8b5cf6" />
          </div> */}

          <Card className="relative">
            <Button asChild className="relative overflow-hidden w-[160px]" variant={"outline"}>
              <Link href="/#book-call">Book a Call</Link>
            </Button>
            <BorderBeam size={100} duration={8} colorFrom="#BFE2E4" colorTo="#9fd5d8" />
          </Card>

          {/* <Card className="relative w-[350px] overflow-hidden">
        <Button asChild className="relative overflow-hidden">
              <Link href="/#book-call">Book a Call</Link>
            </Button> */}
      {/* <CardHeader> */}
        {/* <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Register</Button>
        <Button>Login</Button>
      </CardFooter> */}
      {/* <BorderBeam duration={8} size={150} />
    </Card> */}
        </nav>

        {/* Mobile Menu Button */}
        <button className="flex items-center md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 border-b border-white/5 bg-black/95 backdrop-blur-md md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
          <Link
            href="/#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/#book-call"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="relative w-full rounded-lg">
            <Button asChild variant="outline" className="relative rounded-lg w-full overflow-hidden" onClick={() => setIsMenuOpen(false)}>
              <Link href="#donate">Donate</Link>
            </Button>
            <BorderBeam size={100} duration={8} colorFrom="#3b82f6" colorTo="#8b5cf6" />
          </div>
          <div className="relative w-full">
            <Button asChild className="relative w-full overflow-hidden" onClick={() => setIsMenuOpen(false)}>
              <Link href="/#book-call">Book a Call</Link>
            </Button>
            <BorderBeam size={100} duration={8} colorFrom="#3b82f6" colorTo="#8b5cf6" />
          </div>
        </nav>
      </div>
    </header>
  )
}
