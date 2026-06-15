import Link from "next/link"

const footerLinks = [
  { href: "#products", label: "Products" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/70">
      <div className="container-industrial flex flex-col gap-10 py-10 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="font-heading text-xl font-semibold tracking-[0.08em] uppercase">
            LaserWorks
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            Placeholder corporate identity for a laser cutting machine brand
            focused on throughput, precision, and production trust.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
          <div className="space-y-3">
            <div className="eyebrow">Navigation</div>
            <div className="space-y-2 text-sm">
              {footerLinks.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="eyebrow">Contact</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>sales@laserworks.example</p>
              <p>+00 (000) 1234 5678</p>
              <p>Future Industrial Park, Building A</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fine-rule" />
      <div className="container-industrial flex flex-col gap-2 py-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 LaserWorks. All placeholder business data is ready to replace.
        </p>
        <p>Designed for a modern industrial laser cutting homepage.</p>
      </div>
    </footer>
  )
}
