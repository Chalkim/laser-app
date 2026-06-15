import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ProductCardProps = {
  category: string
  title: string
  description: string
  specs: string[]
}

export function ProductCard({
  category,
  title,
  description,
  specs,
}: ProductCardProps) {
  return (
    <Card className="panel-surface h-full rounded-[1.75rem] border-border/70 bg-card/85 py-0">
      <CardHeader className="gap-4 border-b border-border/70 px-6 py-6">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            {category}
          </Badge>
          <ArrowUpRight className="size-4 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <CardTitle className="font-heading text-2xl">{title}</CardTitle>
          <CardDescription className="max-w-sm text-sm leading-6">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 px-6 py-6">
        {specs.map((spec) => (
          <div
            key={spec}
            className="flex items-center gap-3 border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
          >
            <span className="size-2 rounded-full bg-accent" />
            <span className="text-sm text-foreground/88">{spec}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
