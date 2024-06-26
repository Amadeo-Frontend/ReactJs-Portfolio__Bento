import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
} & MotionProps;

const Block = ({ className, onMouseEnter, onMouseLeave, ...rest }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 50,
        mass: 3,
      }}
      className={twMerge(
        "col-span-4 p-6 border rounded-lg border-cyan-900 bg-blueray",
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    />
  );
};

export default Block;
