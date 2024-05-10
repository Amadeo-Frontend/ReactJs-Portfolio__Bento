import { useState, useEffect } from "react";
import Block from "./Block";
import Reveal from "./Reveal";

const HeaderBlock = () => {
  const [currentImage, setCurrentImage] = useState("/avatar.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === "/avatar.png" ? "/eu.jpg" : "/avatar.png"
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <Reveal>
        <div>
          <img
            src={currentImage}
            alt="Avatar"
            className="object-cover mb-4 transition-all duration-500 ease-in-out border rounded-full border-cyan-400 size-14"
          />
          <h1 className="mb-12 text-2xl font-medium leading-tight tracking-tighter font-sora">
            Olá, eu sou Amadeo Bon. {""}
            <span className="text-third">
              Trago vida à web com designs únicos e funcionais. Vamos construir
              um site incrível juntos!
            </span>
          </h1>
        </div>
      </Reveal>
    </Block>
  );
};

export default HeaderBlock;
