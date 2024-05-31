import { motion } from "framer-motion";

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

const gridChildVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };
function App() {
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
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      />
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      />
      <motion.div
        variants={gridChildVariants}
        className="aspect-square bg-slate-800 border-none flex justify-center items-center rounded-lg"
      />
    </motion.div>
  );
}

export default App;
