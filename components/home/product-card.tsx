import Image from "next/image"
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
  image: string
}

export function ProductCard({
  category,
  title,
  description,
  image,
}: ProductCardProps) {
  return (
    <Card className="panel-surface h-full overflow-hidden rounded-[2rem] py-0">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
      </div>
      <CardHeader className="gap-4 px-6 py-6">
        <div className="flex items-center justify-between gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-border/70 px-3 py-1"
          >
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
      <CardContent className="px-6 pt-0 pb-6">
        <p className="text-sm leading-6 text-muted-foreground">
          Presentation-led homepage card with image-first storytelling and
          concise supporting copy.
        </p>
      </CardContent>
    </Card>
  )
}
