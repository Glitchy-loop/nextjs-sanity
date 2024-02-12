import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row relative">
        {/* Left side of the product page */}
        <div className="w-full md:w-[50%]">
          <Skeleton className="h-full w-full" />
        </div>

        {/* Right side of the product page */}
        <div className="w-full md:w-[50%] pt-5 md:pt-20 px-4  md:px-10 flex flex-col justify-between">
          <div>
            {/* Title */}
            <Skeleton className="h-12 w-full" />
            {/* Category */}
            <Skeleton className="h-6 w-10 my-2" />
            {/* Price */}
            <Skeleton className="h-6 w-16 my-2" />
          </div>

          {/* Description */}
          <Skeleton className="h-6 w-full my-2" />
          <Skeleton className="h-6 w-3/4 my-2" />
          <Skeleton className="h-6 w-3/4 my-2" />
          <Skeleton className="h-6 w-2/4 my-2" />
          {/* Add to cart button */}
          <div>
            <Skeleton className="h-12 w-full mt-10" />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
