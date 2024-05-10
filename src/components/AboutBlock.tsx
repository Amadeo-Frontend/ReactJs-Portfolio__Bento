import Block from "./Block";
import Reveal from "./Reveal";

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-lg leading-7 tracking-wide text-left font-sora md:text-lg">
      <Reveal>
        <p className="tracking-tight">
          Como desenvolvedor de frontend, tenho um profundo entusiasmo por criar
          experiências digitais envolventes e funcionais utilizando tecnologias
          como ReactJS, Angular e React Native. {""}{" "}
        </p>
      </Reveal>
      <Reveal>
        <p className="tracking-tight">
          Sou capaz de construir interfaces responsivas e dinâmicas para web e
          dispositivos móveis. Estou sempre buscando aprender e me atualizar nas
          últimas tendências e melhores práticas do desenvolvimento frontend
          para proporcionar soluções de ponta aos meus clientes e usuários.
        </p>
      </Reveal>
    </Block>
  );
};

export default AboutBlock;
