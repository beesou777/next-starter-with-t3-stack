import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonCardProps {
  className?: string
}

const SkeletonCard = ({ className }: SkeletonCardProps) => {
  return (
    <Card className={`w-full overflow-hidden border-0 shadow-none ${className}`}>
      <div className="relative aspect-[16/7]">
        <Skeleton className="h-full w-full bg-gray-100" />
      </div>
      <CardContent className="px-0 py-4">
        <Skeleton className="h-6 w-3/4 mb-2 bg-gray-100" />
        <Skeleton className="h-4 w-1/2 bg-gray-100" />
      </CardContent>
    </Card>
  )
}

export default SkeletonCard
