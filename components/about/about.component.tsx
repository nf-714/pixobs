"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutComponent() {
  return (
    <section className="bg-white mt-20 dark:bg-zinc-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-red-400 ">
            Who We Are: Your Partners in Growth
          </h2>
          <p className="mb-4">
            At PixObs, we are passionate about transforming brands through
            expert video editing and strategic digital marketing. Our team is
            dedicated to creating compelling content that resonates with
            audiences and drives business growth.
          </p>
          <p>
            We serve both B2B and B2C clients, delivering tailored solutions
            that make an impact. Let us help you tell your story and achieve
            your {"brand's"} full potential.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-2 gap-4 mt-8"
        >
          <Image
            className="w-full rounded-lg"
            width="0"
            height="0"
            sizes="100vw"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            width="0"
            height="0"
            sizes="100vw"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </motion.div>
      </div>
    </section>
  );
}
