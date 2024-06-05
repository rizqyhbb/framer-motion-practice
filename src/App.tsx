import { motion, useScroll } from "framer-motion";

const gridContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgb(252, 211, 77, 0)",
  },
  show: {
    opacity: 1,
    pathLength: 1,
    fill: "rgb(252, 211, 77, 1)",
  },
};

const gridChildVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };
function App() {
  const { scrollYProgress: scrollCompletion } = useScroll();
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 p-4"
      variants={gridContainerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg gap-4"
      >
        {/* fade up and down */}
        <motion.div
          className="w-20 h-20 bg-slate-300 rounded-md"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
        />
        <motion.div
          className="w-20 h-20 bg-slate-300 rounded-full"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "anticipate",
            delay: 0.25,
          }}
        />
      </motion.div>
      {/* shape shifting */}
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      >
        <motion.div
          className="h-44 w-44 bg-slate-300 rounded-lg"
          animate={{
            scale: [1, 2, 2, 1],
            rotate: [0, 90, 90, 0],
            borderRadius: ["10%", "10%", "50%", "10%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            // repeat: Infinity, for infinity animation
            repeat: 2,
            repeatDelay: 0.5,
          }}
        />
      </motion.div>
      {/* button */}
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      >
        <motion.button
          className="bg-emerald-600 py-4 px-9 rounded-lg text-lg text-gray-100 font-semibold tracking-wide"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ bounceDamping: 1000, bounceStiffness: 600 }}
        >
          subscribe
        </motion.button>
      </motion.div>
      {/* drag */}
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      >
        <motion.div
          className="w-1/4 h-1/4 bg-orange-600 rounded-3xl cursor-grab"
          drag
          dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
          dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
        />
      </motion.div>
      {/* scroll progression */}
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      >
        <motion.div className="w-40 h-1/2 bg-gray-50/20 rounded-xl">
          <motion.div
            className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
            style={{ scaleY: scrollCompletion }}
          />
        </motion.div>
      </motion.div>

      {/* SVG animation */}
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-1/2 stroke-amber-500 stroke-[0.5]"
        >
          <motion.path
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            variants={svgVariants}
            initial="hidden"
            animate="show"
            transition={{
              default: {
                duration: 2,
                ease: "easeInOut",
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
              fill: {
                duration: 2,
                ease: "easeInOut",
                delay: 2,
                repeat: Infinity,
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export default App;
