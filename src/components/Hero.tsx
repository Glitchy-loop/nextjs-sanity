import Image from "next/image"
import MaxWidthWrapper from "./layout/MaxWidthWrapper"
import { client, urlFor } from "@/lib/sanity"
import Link from "next/link"
import { Button } from "./ui/button"

async function getData() {
  const query = `*[_type == 'heroImage'][0]`
  const data = await client.fetch(query)
  return data
}

const Hero = async () => {
  const data = await getData()
  return (
    <MaxWidthWrapper>
      <div className="flex gap-6 justify-between">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl">Top fashion choices from Zyle</h1>
          <p className="mt-8">Find the best fashion choices from Zyle</p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden shadow-lg rounded-xl md:left-16 md:top-16 lg:ml-0 ">
            <Image
              src={urlFor(data.image1).url()}
              alt="Hero Image"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden shadow-lg rounded-xl">
            <Image
              src={urlFor(data.image2).url()}
              alt="Hero Image 2"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center jusfiy-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden border">
          <Link
            href="/category/Men"
            className="flex w-1/3 items-center justify-center transition duration-100"
          >
            <Button variant="ghost" className="p-0 m-0 w-full h-full">
              Men
            </Button>
          </Link>
          <Link
            href="/category/Women"
            className="flex w-1/3 items-center justify-center transition duration-100"
          >
            <Button variant="ghost" className="p-0 m-0 w-full h-full">
              Women
            </Button>
          </Link>
          <Link
            href="/category/Teens"
            className="flex w-1/3 items-center justify-center transition duration-100"
          >
            <Button variant="ghost" className="p-0 m-0 w-full h-full">
              Teens
            </Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Hero
