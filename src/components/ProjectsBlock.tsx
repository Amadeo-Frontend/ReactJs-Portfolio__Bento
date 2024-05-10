import { useState } from "react";
import Block from "./Block";

const ProjectsBlock = () => {
  const [hoveredBlock, setHoveredBlock] = useState<null | string>(null);

  return (
    <>
      <Block
        onMouseEnter={() => setHoveredBlock("Angular Quiz")}
        onMouseLeave={() => setHoveredBlock(null)}
        whileHover={{
          rotate: "1.5deg",
          scale: 1.1,
        }}
        className="col-span-6 p-2 md:col-span-3"
      >
        <a
          href="https://github.com/Amadeo-Frontend/Angular-Quiz"
          target="blank"
          className="relative grid h-full place-content-center hover:border-cyan-300"
        >
          <img
            src="/buzz-mockup.png"
            alt="Angular app"
            className="object-cover w-full h-full rounded-xl"
          />
          {hoveredBlock === "Angular Quiz" && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg bg-zinc-800">
              <div className="p-3 text-sm text-white">
                <h2 className="mb-1 font-sora">Angular Quiz</h2>
                <p className="font-thin">Quiz interativo sobre DragonBall.</p>
              </div>
            </div>
          )}
        </a>
      </Block>

      <Block
        onMouseEnter={() => setHoveredBlock("Cat Adoption App")}
        onMouseLeave={() => setHoveredBlock(null)}
        whileHover={{
          rotate: "-1.5deg",
          scale: 1.1,
        }}
        className="col-span-6 p-2 md:col-span-3"
      >
        <a
          href="https://github.com/Amadeo-Frontend/React-Native__Cat-adoption-app"
          target="blank"
          className="relative grid h-full place-content-center"
        >
          <img
            src="/cat-mockup.png"
            alt="Cat Adoption App"
            className="object-cover w-full h-full rounded-xl"
          />
          {hoveredBlock === "Cat Adoption App" && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg bg-zinc-800">
              <div className="p-3 text-sm text-white">
                <h2 className="mb-1 font-sora">Cat Adoption</h2>
                <p className="font-thin">App mobile de adoção de gatos.</p>
              </div>
            </div>
          )}
        </a>
      </Block>

      <Block
        onMouseEnter={() => setHoveredBlock("Chat Codex")}
        onMouseLeave={() => setHoveredBlock(null)}
        whileHover={{
          rotate: "1.5deg",
          scale: 1.1,
        }}
        className="col-span-6 p-2 md:col-span-3"
      >
        <a
          href="https://github.com/Amadeo-Frontend/Chat-codex"
          target="blank"
          className="relative grid h-full place-content-center"
        >
          <img
            src="/codex-mockup.png"
            alt="Chat Codex"
            className="object-cover w-full h-full rounded-xl"
          />
          {hoveredBlock === "Chat Codex" && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg bg-zinc-800">
              <div className="p-3 text-sm text-white">
                <h2 className="mb-1 font-sora">Chat Codex</h2>
                <p className="font-thin">Um chatbot usando a API da OpenAI.</p>
              </div>
            </div>
          )}
        </a>
      </Block>

      <Block
        onMouseEnter={() => setHoveredBlock("Weather App")}
        onMouseLeave={() => setHoveredBlock(null)}
        whileHover={{
          rotate: "-1.5deg",
          scale: 1.1,
        }}
        className="col-span-6 p-2 md:col-span-3"
      >
        <a
          href="https://github.com/Amadeo-Frontend/Weather-app"
          target="blank"
          className="relative grid h-full place-content-center"
        >
          <img
            src="/weather-mockup.png"
            alt="Weather App"
            className="object-cover w-full h-full rounded-xl"
          />
          {hoveredBlock === "Weather App" && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg bg-zinc-800">
              <div className="p-3 text-sm text-white">
                <h2 className="mb-1 font-sora">Weather App</h2>
                <p className="font-thin">
                  Aplicativo usando a API de previsão do tempo.
                </p>
              </div>
            </div>
          )}
        </a>
      </Block>
    </>
  );
};

export default ProjectsBlock;
