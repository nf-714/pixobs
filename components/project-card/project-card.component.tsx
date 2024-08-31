import { Card } from "@/components/ui/card";
import Image from "next/image";

let static_img = "https://img.youtube.com/vi/CZUKl6dL23o/maxresdefault.jpg";

const items = {
  title: "Ahnaf youtube",
  description: "Nigga er expose video",
};

export default function ProjectCard() {
  return (
    <Card className="w-[300px] md:w-[400px]lg:w-[600px] bg-gray-100 border-gray-100 hover:bg-gray-200 dark:bg-zinc-900 dark:border-zinc-900 dark:hover:bg-zinc-800 shadow-none">
      <Image
        src={static_img}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto cursor-pointer"
        alt="reads_image"
      />
    </Card>
  );
}
