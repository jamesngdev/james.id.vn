import Image from "next/image";
import Button from "@/components/atoms/Button";
import { motion, useAnimationControls } from "framer-motion";
import TypescriptIcon from "@/components/atoms/TypescriptIcon";
import ReactIcon from "@/components/atoms/ReactIcon";
import NodeIcon from "@/components/atoms/NodeIcon";
import NextIcon from "@/components/atoms/NextIcon";
import VimIcon from "@/components/atoms/VimIcon";
import AwsIcon from "@/components/atoms/AwsIcon";

export default function Overview() {
  const controls = useAnimationControls();

  const animation = {
    initial: { opacity: 0, x: "-5%" },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full min-h-[30vh] grid grid-cols-12 items-center mt-[150px]">
      <div className="introduce col-span-8 text-white">
        <motion.h3
          {...animation}
          transition={{
            delay: 0.1,
          }}
          className="flex items-center gap-2 text-3xl"
        >
          <span className="font-light">Hi! </span>
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
              rotate: 30,
              transformOrigin: "right center",
            }}
            animate={controls}
            transition={{
              type: "spring",
              delay: 0.35,
              bounce: 0.7,
              duration: 0.7,
            }}
          >
            <Image
              src="/images/love-you-gesture.webp"
              width={48}
              height={48}
              alt="love you gesture"
              className="inline-block"
            />
          </motion.div>
        </motion.h3>
        <motion.h3
          className="text-[3rem] font-[1000] mb-2"
          {...animation}
          transition={{
            delay: 0.2,
          }}
        >
          I'm <span className="text-accent">James </span> Nguyen,
        </motion.h3>
        <motion.p
          {...animation}
          transition={{
            delay: 0.2,
          }}
          className="font-light w-[60%] text-lg text-gray-300"
        >
          a{" "}
          <span className="font-semibold text-white">full-stack developer</span>{" "}
          who loves intuitive, clean and modern UI design.
        </motion.p>

        <motion.div
          className="flex flex-row gap-6 mt-6"
          {...animation}
          transition={{
            delay: 0.5,
          }}
        >
          <Button color="primary" className="py-3 px-4 rounded-lg">
            Get in touch
          </Button>

          <motion.div
            className="flex items-center gap-2"
            {...animation}
            transition={{
              delay: 0.7,
            }}
          >
            <button className="btn btn-secondary">Download CV</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-5"
          {...animation}
          transition={{
            delay: 0.9,
          }}
        >
          <p className="font-light text-gray-400 block">
            current favorite tech stack/tools:
          </p>

          <div className="flex items-center gap-2 mt-2 text-gray-400">
            <TypescriptIcon className="h-6 w-6 hover:text-[#3178C6]" />
            <ReactIcon className="h-6 w-6 hover:text-[#61DAFB]" />
            <NodeIcon className="hover:text-[#5aad45]" />
            <NextIcon className="h-6 w-6 hover:text-[#fff]" />
            <span className="text-gray-400 font-light">|</span>
            <VimIcon className="h-6 w-6 hover:text-[#019733]" />
            <AwsIcon className="h-6 w-6 hover:text-[#ff9c15]" />
          </div>
        </motion.div>
      </div>
      <div className="col-span-4 flex justify-end">
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            bounce: 0.7,
            duration: 1,
          }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/101863422"
            width={300}
            height={300}
            alt="hero"
            className="rounded-3xl"
            priority
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
