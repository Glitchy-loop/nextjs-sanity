import { client } from "@/lib/sanity"
import MaxWidthWrapper from "./layout/MaxWidthWrapper"
import Image from "next/image"
import { ProductReelProps } from "@/types"
import Link from "next/link"
import { Button } from "./ui/button"

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
          _id,
            price,
            name,
            "slug": slug.current,
            'categoryName': category->name,
          'imageUrl': images[0].asset->url
        }`

  const data = await client.fetch(query, {
    revalidate: 3600, // look for updates to revalidate cache every hour
  })
  return data
}

export default async function ProductReel() {
  const data: ProductReelProps = await getData()

  return (
    <MaxWidthWrapper className="mt-16">
      <div className="flex w-full justify-between">
        <div>
          <h2 className="text-2xl text-semibold">Product Reel</h2>
          <p className="text-sm pb-4">Check out our latest products!</p>
        </div>
        <Link href={`/shop`}>
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
