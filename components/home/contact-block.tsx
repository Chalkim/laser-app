import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const contacts = [
  {
    icon: Phone,
    label: "Call Sales",
    value: "+00 (000) 1234 5678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@laserworks.example",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Future Industrial Park, Building A, City Placeholder",
  },
]

export function ContactBlock() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <Card className="panel-surface rounded-[2rem] border-border/70 bg-card/88 py-0">
        <CardHeader className="gap-3 border-b border-border/70 px-6 py-6 md:px-8">
          <p className="eyebrow">Request Consultation</p>
          <CardTitle className="headline-balance font-heading text-3xl">
            Tell us your material, thickness, and output goals.
          </CardTitle>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            This first version is a structured UI block for future integration.
            A sales engineer can later connect it to CRM, email, or form APIs.
          </p>
        </CardHeader>
        <CardContent className="px-6 py-6 md:px-8 md:py-8">
          <form className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium">Name</span>
              <Input placeholder="Your name" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium">Company</span>
              <Input placeholder="Company name" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium">Email</span>
              <Input type="email" placeholder="name@company.com" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium">Phone</span>
              <Input placeholder="+00 0000 000000" />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium">Project Details</span>
              <Textarea
                className="min-h-36"
                placeholder="Material type, thickness range, sheet size, production volume, automation needs..."
              />
            </label>
            <div className="flex flex-col gap-3 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-muted-foreground">
                Typical response target: within 1 business day.
              </p>
              <Button size="lg" className="rounded-full px-5">
                Send Inquiry
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="panel-surface rounded-[2rem] border-border/70 bg-primary py-0 text-primary-foreground">
        <CardHeader className="gap-3 px-6 py-6 md:px-8">
          <p className="font-mono text-[0.7rem] tracking-[0.24em] text-primary-foreground/70 uppercase">
            Direct Contact
          </p>
          <CardTitle className="headline-balance font-heading text-3xl">
            Built for long-cycle industrial buying decisions.
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-6 pb-8 md:px-8">
          <p className="text-sm leading-6 text-primary-foreground/76">
            Use these placeholders as the final content slots for your sales
            line, technical support email, and company address.
          </p>

          <div className="space-y-4">
            {contacts.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-full border border-white/15 bg-white/8 p-2.5">
                    <item.icon className="size-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs tracking-[0.2em] text-primary-foreground/62 uppercase">
                      {item.label}
                    </div>
                    <div className="text-sm leading-6 text-primary-foreground/92">
                      {item.value}
                    </div>
                  </div>
                </div>
                {index < contacts.length - 1 ? (
                  <Separator className="mt-4 bg-white/10" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-white/12 bg-white/6 p-5">
            <div className="font-mono text-[0.68rem] tracking-[0.22em] text-primary-foreground/60 uppercase">
              Support Window
            </div>
            <div className="mt-3 text-sm leading-6 text-primary-foreground/86">
              Monday - Friday, 08:30 - 18:00
              <br />
              Application advice, machine selection, and automation planning
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
