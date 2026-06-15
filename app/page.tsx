import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

import { ContactBlock } from "@/components/home/contact-block"
import { Section } from "@/components/home/section"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteHeader } from "@/components/home/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const heroImage =
  "https://images.unsplash.com/photo-1738162837451-2041c1418f54?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800"

const productImageA =
  "https://images.unsplash.com/photo-1738162837438-92ff852619a1?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"

const productImageB =
  "https://images.unsplash.com/photo-1564936160333-8b7a7ba8722c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"

const productImageC =
  "https://images.unsplash.com/photo-1720036236694-d0a231c52563?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"

const factoryImage =
  "https://images.unsplash.com/photo-1720036236694-d0a231c52563?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"

const products = [
  {
    label: "Flagship Series",
    title: "LX Prime",
    description:
      "High-end fiber laser cutting system for premium sheet metal production.",
    image: heroImage,
  },
  {
    label: "Production Line",
    title: "LX Dynamic",
    description:
      "Balanced cutting performance for continuous manufacturing workflows.",
    image: productImageA,
  },
  {
    label: "Large Format",
    title: "LX Format",
    description:
      "Built for larger sheets, stronger presence, and industrial stability.",
    image: productImageB,
  },
  {
    label: "Automation Cell",
    title: "LX Flow",
    description:
      "Integrated loading and unloading concept for scalable factory layouts.",
    image: productImageC,
  },
  {
    label: "Precision Studio",
    title: "LX FineCut",
    description:
      "Cleaner detailing for refined cutting applications and thinner materials.",
    image: productImageA,
  },
  {
    label: "Compact Footprint",
    title: "LX Compact",
    description:
      "A smaller system concept for tighter production spaces and agile operations.",
    image: productImageB,
  },
]

const companyDetails = [
  { label: "Company", value: "LaserWorks Manufacturing Co., Ltd." },
  {
    label: "Address",
    value: "Future Industrial Park, Building A, Shanghai, China",
  },
  { label: "Phone", value: "+86 21 4000 1234" },
  { label: "Email", value: "sales@laserworks.example" },
  { label: "Hours", value: "Mon - Fri, 08:30 - 18:00" },
]

export default function Page() {
  return (
    <main className="page-shell min-h-svh">
      <SiteHeader />

      <Section className="pt-6 pb-8 md:pt-10 md:pb-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-stretch">
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
                  The first impression comes from image scale, controlled
                  typography, and quiet composition instead of a crowded
                  technical layout.
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
                <Link href="#products">View Products</Link>
              </Button>
            </div>

            <div className="max-w-xl border-t border-border/80 pt-5">
              <p className="eyebrow">Direction</p>
              <p className="mt-3 text-sm leading-7 text-foreground/82">
                The image behaves like a real visual centerpiece, while the
                surrounding content stays open and breathable.
              </p>
            </div>
          </div>

          <figure className="relative aspect-[4/5] min-h-[500px] overflow-hidden rounded-[2.4rem] md:min-h-[700px]">
            <Image
              src={heroImage}
              alt="Laser cutting machine placeholder"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/78 via-primary/12 to-transparent" />

            <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="max-w-md text-white">
                <div className="font-mono text-[0.68rem] tracking-[0.22em] text-white/62 uppercase">
                  Internet placeholder image
                </div>
                <p className="mt-3 text-sm leading-6 text-white/84">
                  This image is here to set mood and scale now, and can be
                  replaced later with your own machine photography.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="products" className="pt-8 md:pt-14">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Product Introduction</p>
            <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Present the product range like a clean industrial catalog.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Since you have many products, this section now works more like a
              storefront grid: repeated blocks, quick scanning, and room to
              grow.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-[1.8rem] border border-border/80 bg-card/92 transition-transform duration-300 hover:-translate-y-1"
              >
                <figure className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/62 via-primary/8 to-transparent" />
                </figure>
                <div className="space-y-3 p-5">
                  <p className="eyebrow">{product.label}</p>
                  <h3 className="font-heading text-2xl font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="company">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex h-full flex-col rounded-[1.8rem] border border-border/80 bg-card/70 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full border border-border/70 bg-secondary/80 p-3">
                <MapPin className="size-5 text-accent" />
              </div>
              <div className="space-y-1">
                <p className="eyebrow">Company Information</p>
                <h2 className="font-heading text-2xl font-semibold">
                  LaserWorks Manufacturing
                </h2>
              </div>
            </div>

            <div className="space-y-3 pt-6">
              {companyDetails.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-b border-border/70 pb-3 last:border-b-0 last:pb-0 md:grid-cols-[104px_1fr]"
                >
                  <div className="font-mono text-[0.72rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {item.label}
                  </div>
                  <div className="text-sm leading-6 text-foreground/86">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-border/80 bg-secondary/30">
            <iframe
              title="LaserWorks location map"
              src="https://www.google.com/maps?q=Shanghai%20China&z=12&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <figure className="relative min-h-[320px] overflow-hidden rounded-[2.2rem]">
            <Image
              src={factoryImage}
              alt="Factory placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 to-transparent" />
          </figure>

          <div className="max-w-xl space-y-4 px-2">
            <p className="eyebrow">Brand Presence</p>
            <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Let the supporting sections feel quiet and expensive.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              This wide image break gives the homepage breathing room and keeps
              the industrial tone without falling back into specification-heavy
              presentation.
            </p>
            <div className="border-t border-border/80 pt-5 text-sm leading-7 text-foreground/82">
              Full-width imagery and open text blocks usually feel more like a
              brand site than another boxed content stack.
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
