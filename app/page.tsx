import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { ContactBlock } from "@/components/home/contact-block"
import { HeroMedia } from "@/components/home/hero-media"
import { ProductCard } from "@/components/home/product-card"
import { Section } from "@/components/home/section"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteHeader } from "@/components/home/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const proofPoints = [
  "Stable cut quality across mixed-batch production",
  "Engineered for uptime, training simplicity, and service access",
  "Ready for future automation, MES, and factory integration",
]

const products = [
  {
    category: "2D Fiber Laser",
    title: "LX Prime",
    description:
      "A flexible production platform for sheet metal manufacturers balancing speed, footprint, and clean edge quality.",
    specs: [
      "High-speed shuttle table architecture",
      "Operator-focused interface and fast setup",
      "Prepared for smart nozzle and gas optimization",
    ],
  },
  {
    category: "Heavy Duty Format",
    title: "LX Format",
    description:
      "Designed for larger sheets and stable continuous output where rigidity, handling, and process consistency matter.",
    specs: [
      "Extended bed configuration for larger formats",
      "Reinforced structure for long production cycles",
      "Integrated diagnostics for predictable maintenance",
    ],
  },
  {
    category: "Automation Ready",
    title: "LX Flow Cell",
    description:
      "A modular cell concept for customers planning unmanned shifts, assisted loading, or connected factory workflows.",
    specs: [
      "Load and unload expansion path",
      "Designed for upstream and downstream integration",
      "Structured data outputs for production visibility",
    ],
  },
]

const stats = [
  { label: "Machine Platform", value: "Fiber Laser" },
  { label: "Use Case", value: "Sheet Metal Production" },
  { label: "Priority", value: "Precision + Uptime" },
]

const companySignals = [
  {
    title: "Application-first engineering",
    description:
      "Machine configuration, process advice, and automation planning are framed around the customer's production target.",
  },
  {
    title: "Structured service model",
    description:
      "Clear training, maintenance intervals, and spare-parts logic are presented as part of the buying decision.",
  },
  {
    title: "Production credibility",
    description:
      "The visual language and information density are tuned to industrial buyers who need confidence, not hype.",
  },
]

export default function Page() {
  return (
    <main className="page-shell min-h-svh">
      <SiteHeader />

      <Section className="pt-8 pb-10 md:pt-14 md:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Precision laser cutting systems
              </Badge>
              <div className="space-y-4">
                <p className="eyebrow">
                  Industrial reliability, designed clearly
                </p>
                <h1 className="headline-balance font-heading text-5xl leading-none font-semibold tracking-tight text-foreground md:text-6xl xl:text-7xl">
                  Laser cutting machines that look as precise as they perform.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                  A homepage concept for a modern laser cutting brand:
                  restrained, technical, and credible. Built to communicate
                  machine capability, engineering confidence, and direct paths
                  to consultation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="#contact">
                  Request Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                <Link href="#products">
                  View Product Concepts
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="panel-surface rounded-[1.5rem] border-border/70 bg-card/82 py-0"
                >
                  <CardContent className="space-y-2 px-5 py-5">
                    <div className="font-mono text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {stat.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {stat.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-3">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-4 text-accent" />
                  <p className="text-sm leading-6 text-foreground/84">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeroMedia />
        </div>
      </Section>

      <Section id="products" className="pt-10 md:pt-16">
        <div className="space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">Product Introduction</p>
              <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                A homepage structure that can scale into a full machine catalog.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                The first screen introduces your core laser-cutting offers
                through clean product cards and practical value statements,
                leaving room for later detail pages and technical downloads.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/75 px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-accent" />
              Homepage-first structure, multi-page ready
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="company">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-surface machine-placeholder relative min-h-[420px] overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Company Location</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold">
                  Map and information block
                </h2>
              </div>
              <div className="rounded-full border border-border/70 bg-background/75 p-3">
                <MapPin className="size-5 text-accent" />
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-border/70 bg-background/66 p-4 backdrop-blur-sm md:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-border/70 bg-[linear-gradient(90deg,color-mix(in_oklch,var(--foreground)_7%,transparent)_1px,transparent_1px),linear-gradient(180deg,color-mix(in_oklch,var(--foreground)_7%,transparent)_1px,transparent_1px),linear-gradient(180deg,color-mix(in_oklch,var(--foreground)_3%,transparent),transparent_52%)] bg-[size:42px_42px,42px_42px,auto]">
                <div className="absolute top-[22%] left-[16%] h-24 w-24 rounded-full border border-accent/40 bg-accent/18 blur-2xl" />
                <div className="absolute right-[18%] bottom-[22%] h-20 w-20 rounded-full border border-foreground/10 bg-foreground/10 blur-xl" />
                <div className="absolute top-[28%] right-[20%] left-[22%] h-px bg-border/80" />
                <div className="absolute top-[26%] left-[26%] h-[36%] w-px bg-border/80" />
                <div className="absolute bottom-[24%] left-[34%] flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3 py-2 shadow-sm">
                  <span className="size-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">
                    Headquarters Placeholder
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
              This intentionally styled map area is ready to be replaced with a
              real embedded map, factory photo, or regional office visualization
              once the brand assets and location data are available.
            </p>
          </div>

          <div className="panel-surface rounded-[2rem] p-6 md:p-8">
            <div className="space-y-4">
              <p className="eyebrow">Why Buyers Trust the Brand</p>
              <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                Company context should support the machine story, not distract
                from it.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                The company section pairs location, service structure, and
                business clarity so the homepage feels credible to plant
                managers, technical teams, and procurement stakeholders.
              </p>
            </div>

            <Separator className="my-7" />

            <div className="space-y-5">
              {companySignals.map((item, index) => (
                <div key={item.title} className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                    <h3 className="font-heading text-xl font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p className="pl-8 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="rounded-[1.5rem] border-border/70 bg-muted/55 py-0">
                <CardContent className="space-y-2 px-5 py-5">
                  <div className="eyebrow">Coverage</div>
                  <div className="text-sm leading-6 text-foreground/84">
                    Machine selection, process planning, installation, and
                    operator onboarding
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-[1.5rem] border-border/70 bg-muted/55 py-0">
                <CardContent className="space-y-2 px-5 py-5">
                  <div className="eyebrow">Positioning</div>
                  <div className="text-sm leading-6 text-foreground/84">
                    Minimal industrial identity shaped for multi-page corporate
                    growth
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Contact Inquiry</p>
            <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              A clear consultation path closes the homepage with confidence.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              This section is designed as a UI-ready lead capture area with
              direct sales contact information. It is intentionally
              presentational for now, so you can connect the final workflow
              later.
            </p>
          </div>

          <ContactBlock />
        </div>
      </Section>

      <SiteFooter />
    </main>
  )
}
