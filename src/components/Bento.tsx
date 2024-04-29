import { motion } from 'framer-motion';
import AboutBlock from './AboutBlock';
import EmailBlock from './EmailBlock';
import HeaderBlock from './HeaderBlock';
import LocationBlock from './LocationBlock';
import SocialBlock from './SocialBlock';
import Logo from './Logo';
import Footer from './Footer';
import ProjectsBlock from './ProjectsBlock';
import ProjectsTextBlock from './ProjectsTextBlock';

const Bento = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-zinc-900 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.2,
        }}
        className="grid max-w-4xl grid-cols-12 gap-4 p-4 mx-auto grid-flow-dense"
      >
        <HeaderBlock />
        <SocialBlock />
        <AboutBlock />
        <ProjectsTextBlock />
        <ProjectsBlock />
        <LocationBlock />
        <EmailBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Bento;
