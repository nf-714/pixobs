"use client";

import { motion } from "framer-motion";
import { Text, User, Video, Youtube } from "lucide-react";

export function ServicesComponent() {
  return (
    <div className="bg-white dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] dark:from-red-900 dark:via-zinc-800 dark:to-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className=" text-base  text-red-400 font-semibold leading-7 ">
            What We Offer
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300 sm:text-4xl">
            Empower Your Brand with Our Expertise
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">
            From video editing to strategic marketing, PixObs provides all the
            tools and services you need to take your brand to the next level.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-50 dark:text-zinc-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded bg-red-400 ">
                  <Video />
                </div>
                <span className="text-red-400">Transform Your Content</span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Bring your vision to life with our professional video editing
                services. We turn raw footage into engaging, high-quality
                content that resonates with your audience.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-50 dark:text-zinc-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg  bg-red-400">
                  <Youtube />
                </div>
                <span className="text-red-400"> Maximize Your Reach</span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our data-driven digital marketing strategies are designed to
                increase your brand visibility, drive traffic, and convert leads
                into loyal customers.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-50 dark:text-zinc-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg  bg-red-400">
                  <Text />
                </div>
                <span className="text-red-400">Craft Your Narrative</span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                From concept to creation, we produce compelling content that
                tells your brand’s story and engages your audience across
                multiple platforms.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-50 dark:text-zinc-800">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg  bg-red-400">
                  <User />
                </div>
                <span className="text-red-400">Define Your Identity</span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Establish a strong, cohesive brand identity with our expert
                design services. We help you create a visual language that
                reflects your {"brand&apos;s"} values and resonates with your
                target audience.
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
