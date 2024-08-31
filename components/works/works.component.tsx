"use client";

import { motion } from "framer-motion";
import ProjectCard from "../project-card/project-card.component";

let static_img = "https://img.youtube.com/vi/CZUKl6dL23o/maxresdefault.jpg";

const items = {
  title: "Ahnaf youtube",
  description: "Nigga er expose video",
};
export default function WorksComponent() {
  return (
    <section className="py-12 dark:bg-zinc-900 text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="max-w-xl mx-auto text-center xl:max-w-2xl"
        >
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Our Work Speaks
          </h2>
          <p className="mb-4 text-gray-500">
            Take a look at our recent projects that demonstrate the impact of
            our video editing and marketing strategies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left"
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </motion.div>
      </div>
    </section>
  );
}
