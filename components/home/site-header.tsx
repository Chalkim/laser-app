"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="container-industrial flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold">
            LW
          </span>
          <div className="min-w-0">
            <div className="font-heading text-base font-semibold tracking-[0.08em] uppercase">
              LaserWorks
            </div>
            <div className="text-xs text-muted-foreground">
              Precision Laser Systems
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/76 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full px-5">
            <Link href="#contact">Request a Quote</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full md:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-border/70 bg-background/96">
            <SheetHeader className="px-6 pt-6">
              <SheetTitle className="font-heading text-xl">
                LaserWorks
              </SheetTitle>
              <SheetDescription>
                Industrial laser cutting systems with a minimal, precise
                interface.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-1 flex-col px-6 pt-3 pb-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex rounded-2xl border border-border/70 px-4 py-3 text-base font-medium"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full rounded-full">
                    <Link href="#contact">Request a Quote</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
