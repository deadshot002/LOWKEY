import { Button, Heading } from "@modules/common/components/ui"

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        {/* Small brand label */}
        <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.5em] text-white/40">
          LOWKEY
        </p>

        {/* Main heading */}
        <Heading
          level="h1"
          className="max-w-6xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] text-white small:text-8xl medium:text-9xl"
        >
          Less noise.
          <br />
          <span className="text-white/45">More you.</span>
        </Heading>

        {/* Description */}
        <p className="mt-8 max-w-md text-sm leading-6 text-white/55 small:text-base">
          Discover products made for everyday life.
          <br />
          Keep it simple. Keep it LOWKEY.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <a href="/store">
            <Button
              className="!h-12 !rounded-full !border-0 !bg-white !px-8 !text-sm !font-medium !text-black transition-transform duration-200 hover:scale-105"
            >
              SHOP NOW
            </Button>
          </a>

          <a
            href="/store"
            className="flex h-12 items-center rounded-full border border-white/20 px-7 text-sm text-white/70 transition-colors hover:border-white/50 hover:text-white"
          >
            EXPLORE
          </a>
        </div>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-6 text-[10px] uppercase tracking-[0.3em] text-white/25">
        <span>LOWKEY</span>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  )
}

export default Hero