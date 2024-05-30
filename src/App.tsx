import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 m-4"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="aspect-square bg-slate-400 border rounded-lg"
      />
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="aspect-square bg-slate-400 border rounded-lg"
      />
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="aspect-square bg-slate-400 border rounded-lg"
      />
      <motion.div className="aspect-square bg-slate-400 border rounded-lg" />
      <motion.div className="aspect-square bg-slate-400 border rounded-lg" />
      <motion.div className="aspect-square bg-slate-400 border rounded-lg" />
    </motion.div>
  );
}

export default App;
