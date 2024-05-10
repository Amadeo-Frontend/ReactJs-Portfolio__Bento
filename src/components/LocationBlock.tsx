import { FiMapPin } from "react-icons/fi";
import Block from "./Block";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const LocationBlock = () => {
  return (
    <Block className="flex flex-col items-center col-span-12 gap-4 md:col-span-3">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <FiMapPin className="text-3xl cursor-grab" />
      </motion.div>
      <Reveal>
        <p className="text-lg text-center text-zinc-400">Curitiba,Pr-Brasil</p>
      </Reveal>
    </Block>
  );
};

export default LocationBlock;
