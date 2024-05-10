import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="flex items-center justify-center leading-loose tracking-wide text-center text-zinc-400">
        Feito com{" "}
        <motion.span
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.7}
          className="mx-1"
        >
          <FiHeart className="text-cyan-400 cursor-grab hover:fill-red-500" />
        </motion.span>{" "}
        por{" "}
        <a
          href="https://github.com/Amadeo-Frontend/ReactJs-Portfolio__Bento"
          className="mx-1 text-cyan-500 hover:underline hover:text-cyan-400"
        >
          AmadeoBon
        </a>
      </p>
    </footer>
  );
};
export default Footer;
