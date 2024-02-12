import AddToCartButton from "@/components/AddToCartButton"
import ProductImageGallery from "@/components/ProductImageGallery"
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { client } from "@/lib/sanity"
import { ProductPageProps } from "@/types"

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
      name,
      images,
      price,
      description,
      "slug":slug.current,
      "categoryName": category->name,
      price_id
  }`
  const data = await client.fetch(query)

  return data
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const data: ProductPageProps = await getData(params.slug)

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row relative">
        {/* Left side of the product page */}
        <div className="w-full md:w-[50%]">
          <ProductImageGallery images={data.images} />
        </div>

        {/* Right side of the product page */}
        <div className="w-full md:w-[50%] pt-5 md:pt-20 px-4  md:px-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold">{data.name}</h1>
            <Badge className="my-4" variant="secondary">
              {data.categoryName}
            </Badge>
            <p className="text-2xl text-primary">${data.price}</p>
          </div>

          <div className="mt-10 mb-4 ">{data.description}</div>
          <AddToCartButton
            name={data.name}
            image={data.images[0]}
            price={data.price}
            description={data.description}
            currency="EUR"
            price_id={data.price_id}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
