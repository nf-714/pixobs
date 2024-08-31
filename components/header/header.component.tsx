import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import HeroVideoDialogDemoTopInBottomOut from "../example/hero-video-dialog-demo-top-in-bottom-out";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import GridPattern from "../magicui/grid-pattern";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { Spotlight } from "../ui/spotlight";

export default function Header() {
  return (
    <>
      {/* Enhanced background elements
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-slate-800 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gray-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />{" "}  
      <main className="animate-heading h-[95vh]  overflow-hidden z-10 whitespace-pre-wrap tracking-tighter flex flex-col justify-center items-center">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Video Editing and Digital Marketing Services
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <h1 className="text-center font-extrabold text-4xl md:text-4xl lg:text-7xl mb-5">
          Transform Your Brand with{" "}
          <span className="text-red-500 font-bold">
            Professional Video Editing
          </span>{" "}
          and <span className="text-red-500 font-bold">Digital Marketing</span>
        </h1>
        <h3 className="font-sans font-extraligh text-zinc-400">
          At <span className="font-bold">PixObs</span>, we help B2B and B2C
          companies elevate their digital presence with high-quality video
          content and strategic marketing solutions.
        </h3>
      </main> */}
      <div className="bg-white dark:bg-zinc-900">
        <GridPattern />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gray"
        />
        <div className=" animate-heading relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="dark:hidden relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="flex flex-col mt-28">
            <AnimatedGradientText className="mb-4">
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Video Editing and Digital Marketing Services
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-6xl">
                Crafted{" "}
                <span className="bg-gradient-to-r from-rose-400 to-red-500 inline-block text-transparent bg-clip-text">
                  Videos
                </span>
                , Curated{" "}
                <span className="bg-gradient-to-r from-rose-400 to-red-500 inline-block text-transparent bg-clip-text">
                  Success
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At PixObs, we turn your brand’s vision into a visual masterpiece
                that drives growth
              </p>
            </div>
            <HeroVideoDialogDemoTopInBottomOut />
          </div>
          <div className="relative rounded-2xl p-1 overflow-hidden"></div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
        <VelocityScroll
          text="PIXOBS."
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-red-400 md:text-7xl md:leading-[5rem]"
        />
      </div>
    </>
  );
}
