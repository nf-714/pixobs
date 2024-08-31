import { BorderBeam } from "@/components/magicui/border-beam";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <section className="max-w-5xl mx-auto h-screen flex flex-col justify-center items-center px-7 lg:px-0 relative">
      <div className="relative rounded-2xl p-1 overflow-hidden shadow-[23px_28px_300px_0px_rgba(230,_92,_92,_1)]">
        <BorderBeam />
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://img.youtube.com/vi/CZUKl6dL23o/maxresdefault.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
}
