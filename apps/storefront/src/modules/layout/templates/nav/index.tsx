import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import Search from "@modules/layout/components/search"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="h-16 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
        <nav className="content-container flex h-full w-full items-center justify-between">

          {/* LEFT */}
          <div className="flex h-full flex-1 basis-0 items-center">
            <SideMenu
              regions={regions}
              locales={locales}
              currentLocale={currentLocale}
            />

            <div className="ml-8 hidden items-center small:flex">
              <LocalizedClientLink
                href="/store"
                className="text-xs font-medium uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-black"
              >
                Shop
              </LocalizedClientLink>
            </div>
          </div>

          {/* CENTER — LOWKEY */}
          <div className="flex h-full items-center justify-center">
            <LocalizedClientLink
              href="/"
              className="text-xl font-semibold tracking-[-0.06em] text-black transition-opacity hover:opacity-60"
              data-testid="nav-store-link"
            >
              LOWKEY
            </LocalizedClientLink>
          </div>

          {/* RIGHT */}
          <div className="flex h-full flex-1 basis-0 items-center justify-end gap-5">

            {/* Search */}
            <Search />

            {/* Account */}
            <LocalizedClientLink
              className="hidden text-xs font-medium uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-black small:block"
              href="/account"
              data-testid="nav-account-link"
            >
              Account
            </LocalizedClientLink>

            {/* Cart */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-xs font-medium uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-black"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>

          </div>
        </nav>
      </header>
    </div>
  )
}