import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

import { ContactBlock } from "@/components/home/contact-block"
import { ProductCard } from "@/components/home/product-card"
import { Section } from "@/components/home/section"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteHeader } from "@/components/home/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const heroImage =
  "https://images.unsplash.com/photo-1738162837451-2041c1418f54?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800"

const productImage =
  "https://images.unsplash.com/photo-1738162837438-92ff852619a1?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"

const companyImage =
  "https://images.unsplash.com/photo-1564936160333-8b7a7ba8722c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"

const factoryImage =
  "https://images.unsplash.com/photo-1720036236694-d0a231c52563?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"

const products = [
  {
    category: "Hero Product",
    title: "Flagship Machine Presentation",
    description:
      "Let one strong image and a measured headline introduce your core laser cutting offer before buyers dive into technical detail.",
    image: heroImage,
  },
  {
    category: "Supporting Section",
    title: "Product Family Overview",
    description:
      "Use a second image-led card to introduce additional machine lines or applications without overloading the homepage with specifications.",
    image: productImage,
  },
]

const companySignals = [
  {
    title: "Stronger visual confidence",
    description:
      "The homepage now leans on photography, spacing, and typography to build trust before the visitor reads details.",
  },
  {
    title: "Lighter information density",
    description:
      "Key sections are still present, but the page feels more curated and premium with less dashboard-like noise.",
  },
  {
    title: "Ready for real assets later",
    description:
      "The current image placeholders can be replaced with your own machine, factory, and showroom photography later without redesign.",
  },
]

export default function Page() {
  return (
    <main className="page-shell min-h-svh">
      <SiteHeader />

      <Section className="pt-6 pb-8 md:pt-10 md:pb-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 py-2">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="rounded-full border-border/80 bg-background/70 px-3 py-1"
              >
                Premium laser cutting homepage concept
              </Badge>

              <div className="space-y-4">
                <p className="eyebrow">Visual-first industrial design</p>
                <h1 className="headline-balance font-heading text-5xl leading-none font-semibold tracking-tight text-foreground md:text-6xl xl:text-7xl">
                  Make the banner feel high-end before it feels technical.
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                  This version shifts the homepage toward atmosphere,
                  proportion, and trust. It keeps the industrial identity, but
                  lets image quality and layout discipline do most of the work.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="#contact">
                  Contact Sales
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border/80 bg-background/70 px-6"
              >
                <Link href="#products">View Sections</Link>
              </Button>
            </div>

            <Card className="panel-surface max-w-xl rounded-[1.75rem] py-0">
              <CardContent className="space-y-3 px-6 py-6">
                <p className="eyebrow">Direction</p>
                <p className="text-sm leading-7 text-foreground/82">
                  Fewer numeric panels, fewer system-like overlays, and more
                  visual calm. The page should feel like a premium machinery
                  brand, not a control interface.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="panel-surface overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/5] min-h-[480px] md:min-h-[680px]">
              <Image
                src={heroImage}
                alt="Laser cutting machine placeholder"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/78 via-primary/12 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="max-w-md rounded-[1.5rem] border border-white/15 bg-black/28 p-5 text-white backdrop-blur-sm">
                  <div className="font-mono text-[0.68rem] tracking-[0.22em] text-white/62 uppercase">
                    Internet placeholder image
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/84">
                    This image is here to establish mood and scale now, and can
                    be replaced later with your own machine photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="products" className="pt-8 md:pt-14">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Product Introduction</p>
            <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Product sections can stay elegant before they become technical.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              The homepage can introduce product families through large cards
              and industrial imagery, then hand off detailed performance data to
              future product pages.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="company">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel-surface overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[5/4] min-h-[420px]">
              <Image
                src={companyImage}
                alt="Industrial interior placeholder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/58 via-primary/8 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="panel-surface rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow">Company Information</p>
              <h2 className="headline-balance mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                Keep the company section composed and architectural.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                One strong supporting image, a concise brand statement, and a
                clean location card are enough to make this part of the page
                feel mature.
              </p>
            </div>

            <div className="panel-surface rounded-[2rem] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-border/70 bg-secondary/80 p-3">
                  <MapPin className="size-5 text-accent" />
                </div>
                <div className="space-y-3">
                  <p className="eyebrow">Map + Info</p>
                  <h3 className="font-heading text-2xl font-semibold">
                    Address-ready information block
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Future Industrial Park, Building A
                    <br />
                    Shanghai, China
                    <br />
                    Mon - Fri, 08:30 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {companySignals.map((item) => (
                <Card
                  key={item.title}
                  className="panel-surface rounded-[1.5rem] py-0"
                >
                  <CardContent className="space-y-2 px-5 py-5">
                    <h3 className="font-heading text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="panel-surface overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[320px]">
              <Image
                src={factoryImage}
                alt="Factory placeholder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/55 to-transparent" />
            </div>
            <div className="flex items-center p-6 md:p-10">
              <div className="max-w-xl space-y-4">
                <p className="eyebrow">Brand Presence</p>
                <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                  Let the supporting sections feel quiet and expensive.
                </h2>
                <p className="text-base leading-7 text-muted-foreground">
                  This wide image break gives the homepage breathing room and
                  keeps the industrial tone without falling back into
                  specification-heavy presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Contact Inquiry</p>
            <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Finish with one clear invitation to start the conversation.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              The last block stays easy to scan and premium in tone, with real
              contact paths and a lightweight form structure.
            </p>
          </div>

          <ContactBlock />
        </div>
      </Section>

      <SiteFooter />
    </main>
  )
}
