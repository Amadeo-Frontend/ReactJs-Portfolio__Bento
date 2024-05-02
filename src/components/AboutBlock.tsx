import Block from "./Block";

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-lg leading-7 tracking-wide text-left font-sora md:text-lg">
      <p>
        Como desenvolvedor de frontend, tenho um profundo entusiasmo por criar
        experiências digitais envolventes e funcionais utilizando tecnologias
        como ReactJS, Angular e React Native. {""}
        <span className="text-zinc-400">
          Sou capaz de construir interfaces responsivas e dinâmicas para web e
          dispositivos móveis. Minha abordagem centrada no usuário e minha
          habilidade em traduzir requisitos de design em código eficiente
          garantem que cada projeto seja entregue com alta qualidade e
          usabilidade. Estou sempre buscando aprender e me atualizar nas últimas
          tendências e melhores práticas do desenvolvimento frontend para
          proporcionar soluções de ponta aos meus clientes e usuários.
        </span>
      </p>
    </Block>
  );
};

export default AboutBlock;
