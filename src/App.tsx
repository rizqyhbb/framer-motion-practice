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
