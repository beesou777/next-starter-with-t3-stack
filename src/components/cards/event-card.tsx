import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

interface EventsCardsType {
  title: string
  price: string
  date: string
  image: string
  className?: string
  id?: number
  loading?: boolean
}

const EventsCards = (props: EventsCardsType) => {
  const isValidId = typeof props.id === "number" && props.id > 0

  const cardContent = (
    <Card className={clsx("w-full overflow-hidden border-0 shadow-none", props.className)}>
      <div className="relative aspect-square">
        {props.loading ? (
          <Skeleton className="h-full w-full bg-gray-300" />
        ) : (
          <Image
            src={props.image}
            alt={props.title}
            fill
            priority
            className="aspect-square object-cover"
          />
        )}
      </div>
      <CardContent className="px-0 py-4">
        {props.loading ? (
          <>
            <Skeleton className="h-6 w-3/4 mb-2 bg-gray-300" />
            <Skeleton className="h-4 w-1/2 bg-gray-300" />
          </>
        ) : (
          <>
            <h3 className="mb-2 text-md font-semibold leading-none tracking-tight line-clamp-2">{props.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{props.price}</span>
              <span>•</span>
              <time dateTime="2025-10-12">{props.date}</time>
            </div>
          </>
        )}   
      </CardContent>
    </Card>
  )

  return isValidId && !props.loading ? (
    <Link href={`/events/${props.id}`} passHref className={props.className}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
}

export default EventsCards

