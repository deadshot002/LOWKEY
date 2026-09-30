"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"

const SideMenuItems = {
  Home: "/",
  Shop: "/store",
  Account: "/account",
  Cart: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({
  regions,
  locales,
  currentLocale,
}: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex h-full items-center">
        <Popover className="flex h-full">
          {({ open, close }) => (
            <>
              {/* MENU BUTTON */}
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative flex h-full items-center text-xs font-medium uppercase tracking-[0.15em] text-black/60 transition-colors duration-200 hover:text-black focus:outline-none"
                >
                  Menu
                </Popover.Button>
              </div>

              {/* BACKDROP */}
              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-black/20 backdrop-blur-sm"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              {/* MENU PANEL */}
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-x-4"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-4"
              >
                <PopoverPanel className="fixed left-0 top-0 z-[51] flex h-screen w-full flex-col bg-white text-black shadow-2xl sm:w-[420px]">

                  {/* HEADER */}
                  <div className="flex items-center justify-between border-b border-black/10 px-6 py-6">
                    <LocalizedClientLink
                      href="/"
                      onClick={close}
                      className="text-xl font-semibold tracking-[-0.06em] text-black"
                    >
                      LOWKEY
                    </LocalizedClientLink>

                    <button
                      data-testid="close-menu-button"
                      onClick={close}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black/5"
                    >
                      <XMark />
                    </button>
                  </div>

                  {/* NAVIGATION */}
                  <div className="flex flex-1 flex-col justify-between px-6 py-12">

                    <ul className="flex flex-col gap-7">
                      {Object.entries(SideMenuItems).map(
                        ([name, href]) => (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              onClick={close}
                              className="text-4xl font-medium tracking-[-0.04em] text-black transition-colors hover:text-black/40"
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      )}
                    </ul>

                    {/* SETTINGS */}
                    <div className="flex flex-col gap-7">

                      {/* Language */}
                      {!!locales?.length && (
                        <div
                          className="flex items-center justify-between border-t border-black/10 pt-6"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <div className="text-xs font-medium uppercase tracking-[0.12em]">
                            <LanguageSelect
                              toggleState={languageToggleState}
                              locales={locales}
                              currentLocale={currentLocale}
                            />
                          </div>

                          <ArrowRightMini
                            className={clx(
                              "text-black transition-transform duration-150",
                              languageToggleState.state
                                ? "-rotate-90"
                                : ""
                            )}
                          />
                        </div>
                      )}

                      {/* Shipping */}
                      <div
                        className="flex items-center justify-between"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        <div className="flex items-center gap-3">
  {regions && (
    <CountrySelect
      toggleState={countryToggleState}
      regions={regions}
    />
  )}
</div>

                        <ArrowRightMini
                          className={clx(
                            "text-black transition-transform duration-150",
                            countryToggleState.state
                              ? "-rotate-90"
                              : ""
                          )}
                        />
                      </div>

                      {/* Copyright */}
                      <Text className="pt-4 text-xs text-black/30">
                        © {new Date().getFullYear()} LOWKEY. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu