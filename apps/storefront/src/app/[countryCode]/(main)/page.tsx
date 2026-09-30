import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "LOWKEY — Shop Everything",
  description:
    "LOWKEY — Discover products worth keeping.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <main>
      {/* LOWKEY Hero */}
      <Hero />

      {/* Featured Collections */}
      <section className="bg-white py-16">
        <div className="content-container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                LOWKEY
              </p>

              <h2 className="text-3xl font-medium tracking-tight text-gray-900">
                Featured collections
              </h2>
            </div>
          </div>

          <ul className="flex flex-col gap-12">
            <FeaturedProducts
              collections={collections}
              region={region}
            />
          </ul>
        </div>
      </section>
    </main>
  )
}