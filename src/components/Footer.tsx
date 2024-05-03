import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="flex items-center justify-center leading-loose tracking-wide text-center text-zinc-400">
        Feito com {" "}
        <span className="mx-1">
          <FiHeart className="text-red-600 " />
        </span>{" "}
        por{" "}
        <a
          href="https://github.com/Amadeo-Frontend/ReactJs-Portfolio__Bento"
          className="mx-1 text-red-300 hover:underline hover:text-red-400"
        >
          AmadeoBon
        </a>
      </p>
    </footer>
  );
};
export default Footer;
