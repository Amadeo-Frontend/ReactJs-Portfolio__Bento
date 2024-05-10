import { FiArrowRight, FiCodepen } from "react-icons/fi";
import Block from "./Block";
import Reveal from "./Reveal";

const ProjectsTextBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <Reveal>
        <div>
          <FiCodepen className="mb-4 rounded-full size-14" />
          <h1 className="mb-12 text-2xl font-medium leading-tight tracking-tighter group font-sora">
            {" "}
            Cada projeto é uma jornada única, desde aplicações web até apps
            móveis, onde busco constantemente a excelência na criação de
            interfaces envolventes e funcionais
            <br /> {""}
            <span className="flex items-center gap-1 mt-2 text-zinc-400">
              Confira <FiArrowRight className="rotate-90 md:rotate-0" />
            </span>
          </h1>
        </div>
      </Reveal>
    </Block>
  );
};

export default ProjectsTextBlock;
