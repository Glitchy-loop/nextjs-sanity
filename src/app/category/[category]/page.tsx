import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { client } from "@/lib/sanity"
import { ProductReelProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

async function getData(category: string) {
  const query = `*[_type == 'product' && category->name == '${category}'] {
   _id,
   "imageUrl": images[0].asset->url,
    name,
    "slug":slug.current,
    "categoryName": category->name,
    price,

}`
  const data = await client.fetch(query)

  return data
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const data: ProductReelProps = await getData(params.category)

  return (
    <MaxWidthWrapper className="mt-16">
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-2xl text-semibold">Product Reel</h2>
          <p className="text-sm pb-4">Check out our latest products!</p>
        </div>
        <Link href={`/category/${params.category}`}>
          <Button variant="link">View all</Button>
        </Link>
      </div>
      <div className="flex items-center gap-4 w-full">
        {data.map((product) => (
          <Link href={`/product/${product.slug}`} key={product._id}>
            <div key={product._id} className="flex flex-col gap-1">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
                width={200}
                height={200}
              />
              <h3 className="text-lg">{product.name}</h3>
              <p className="text-sm">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}
