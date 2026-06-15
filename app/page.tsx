import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

import { ContactBlock } from "@/components/home/contact-block"
import { Section } from "@/components/home/section"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteHeader } from "@/components/home/site-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    value: "flagship",
    label: "Flagship Machine",
    title: "A hero product should feel like a centerpiece, not a card.",
    description:
      "Use a single large image and a concise narrative to introduce the leading machine platform. This feels more premium than breaking the first product story into multiple little boxes.",
    image: heroImage,
  },
  {
    value: "family",
    label: "Product Family",
    title: "Tabs let the homepage show range without stacking card after card.",
    description:
      "A tabbed product area gives you room to present multiple machine directions while keeping the section disciplined and visually calm.",
    image: productImage,
  },
]

const companySignals = [
  {
    title: "Visual trust before technical depth",
    description:
      "The homepage should first make visitors feel the brand is precise, composed, and premium. Detailed specifications can move deeper into the site.",
  },
  {
    title: "Less framing, more breathing room",
    description:
      "Reducing card count lets typography, spacing, and image composition shape the experience instead of repetitive containers.",
  },
  {
    title: "Placeholder media with real atmosphere",
    description:
      "Internet-sourced imagery is enough to establish scale and tone now, while leaving clean slots for future original photography.",
  },
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
                  This version pulls the page away from stacked cards and toward
                  a more editorial industrial style. The first impression comes
                  from image scale, controlled typography, and quiet
                  composition.
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

            <div className="max-w-xl border-t border-border/80 pt-5">
              <p className="eyebrow">Direction</p>
              <p className="mt-3 text-sm leading-7 text-foreground/82">
                The image is no longer treated like a card. It behaves like a
                real visual centerpiece, while the surrounding content is kept
                open and breathable.
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
              Use tabs to show product range without boxing everything in.
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              `Tabs` are a better fit here than multiple cards. They keep the
              layout structured, but let one large visual stay in focus at a
              time.
            </p>
          </div>

          <Tabs defaultValue="flagship" className="gap-6">
            <TabsList
              variant="line"
              className="w-full justify-start gap-6 overflow-x-auto p-0 text-base"
            >
              {products.map((product) => (
                <TabsTrigger
                  key={product.value}
                  value={product.value}
                  className="rounded-none px-0 py-2 text-sm"
                >
                  {product.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.value} value={product.value}>
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                  <figure className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 56vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/45 to-transparent" />
                  </figure>

                  <div className="space-y-5">
                    <p className="eyebrow">{product.label}</p>
                    <h3 className="headline-balance font-heading text-3xl font-semibold md:text-4xl">
                      {product.title}
                    </h3>
                    <p className="max-w-xl text-base leading-7 text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="border-t border-border/80 pt-5 text-sm leading-7 text-foreground/82">
                      This approach feels more like a premium brand presentation
                      and less like a grid of repeating marketing boxes.
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Section>

      <Section id="company">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <figure className="relative aspect-[5/4] min-h-[420px] overflow-hidden rounded-[2.2rem]">
            <Image
              src={companyImage}
              alt="Industrial interior placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 54vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/58 via-primary/8 to-transparent" />
          </figure>

          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="eyebrow">Company Information</p>
              <h2 className="headline-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                Company context should feel composed, not boxed in.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                One supporting image, one clean location block, and an
                `Accordion` for additional brand context keep this section
                lighter and more architectural.
              </p>
            </div>

            <div className="border-y border-border/80 py-6">
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

            <Accordion
              type="single"
              collapsible
              className="border-t border-border/80"
            >
              {companySignals.map((item) => (
                <AccordionItem key={item.title} value={item.title}>
                  <AccordionTrigger className="py-4 text-base font-medium no-underline hover:no-underline">
                    <span className="font-heading text-xl">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pr-6 text-sm leading-7 text-muted-foreground">
                    <p>{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
