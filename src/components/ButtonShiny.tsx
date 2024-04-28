import { motion } from "framer-motion";

const ShinyButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      type="submit"
      className="relative px-6 py-2 rounded-md radial-gradient"
    >
      <span className="relative block w-full h-full font-light tracking-wide whitespace-nowrap text-neutral-100 linear-mask">
        Inscreva-se
      </span>
      <span className="absolute inset-0 block p-px rounded-md linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;