import Block from "./Block";

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img src="/img.jpg" alt="Avatar" className="mb-4 rounded-full size-14" />
      <h1 className="mb-12 text-2xl font-medium leading-tight tracking-tighter font-sora">
        Olá, eu sou Amadeo Bon. {""}
        <span className="text-zinc-400">
          Trago vida à web com designs únicos e funcionais. Vamos construir um
          site incrível juntos!
        </span>
      </h1>
    </Block>
  );
};

export default HeaderBlock;
