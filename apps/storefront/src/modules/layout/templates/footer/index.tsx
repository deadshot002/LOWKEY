import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@modules/common/components/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })

  const productCategories = await listCategories()

  return (
    <footer className="w-full border-t border-black/10 bg-white">
      <div className="content-container flex w-full flex-col">

        {/* Main Footer */}
        <div className="flex flex-col items-start justify-between gap-y-12 py-20 xsmall:flex-row xsmall:py-28">

          {/* Brand */}
          <div className="max-w-xs">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-semibold tracking-[-0.06em] text-black"
            >
              LOWKEY
            </LocalizedClientLink>

            <p className="mt-5 text-sm leading-6 text-black/50">
              Simple products.
              <br />
              Everyday essentials.
              <br />
              Keep it LOWKEY.
            </p>
          </div>

          {/* Links */}
          <div className="grid w-full grid-cols-2 gap-10 text-sm sm:grid-cols-3 xsmall:w-auto">

            {/* Shop */}
            <div className="flex flex-col gap-y-4">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-black">
                Shop
              </span>

              <ul className="flex flex-col gap-y-3 text-black/50">
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="transition-colors hover:text-black"
                  >
                    All Products
                  </LocalizedClientLink>
                </li>

                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="transition-colors hover:text-black"
                  >
                    New Arrivals
                  </LocalizedClientLink>
                </li>

                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="transition-colors hover:text-black"
                  >
                    My Account
                  </LocalizedClientLink>
                </li>

                <li>
                  <LocalizedClientLink
                    href="/cart"
                    className="transition-colors hover:text-black"
                  >
                    Cart
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            {/* Categories */}
            {productCategories && productCategories.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-black">
                  Categories
                </span>

                <ul
                  className="flex flex-col gap-y-3 text-black/50"
                  data-testid="footer-categories"
                >
                  {productCategories.slice(0, 6).map((category) => {
                    if (category.parent_category) {
                      return null
                    }

                    return (
                      <li key={category.id}>
                        <LocalizedClientLink
                          href={`/categories/${category.handle}`}
                          className="transition-colors hover:text-black"
                          data-testid="category-link"
                        >
                          {category.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Collections */}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-black">
                  Collections
                </span>

                <ul
                  className={clx(
                    "flex flex-col gap-y-3 text-black/50"
                  )}
                >
                  {collections.slice(0, 6).map((collection) => (
                    <li key={collection.id}>
                      <LocalizedClientLink
                        href={`/collections/${collection.handle}`}
                        className="transition-colors hover:text-black"
                      >
                        {collection.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex w-full flex-col gap-4 border-t border-black/10 py-8 text-xs text-black/40 xsmall:flex-row xsmall:items-center xsmall:justify-between">

          <Text className="text-xs">
            © {new Date().getFullYear()} LOWKEY. All rights reserved.
          </Text>

          <div className="flex gap-6">
            <LocalizedClientLink
              href="/"
              className="transition-colors hover:text-black"
            >
              Privacy
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/"
              className="transition-colors hover:text-black"
            >
              Terms
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/account"
              className="transition-colors hover:text-black"
            >
              Account
            </LocalizedClientLink>
          </div>
        </div>

      </div>
    </footer>
  )
}