import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si"
import Block from "./Block"

const SocialBlock = () => {
return (
    <>
    <Block 
    whileHover={{
        rotate: "-2.5deg",
        scale:1.1,
    }}
    className="col-span-6 bg-blue-500 md:col-span-3">
        <a href="https://www.linkedin.com/in/amadeo-bon/" target="blank"
            className="grid h-full text-3xl text-white place-content-center"
        >
            <SiLinkedin />
        </a>
    </Block>
    <Block
    whileHover={{
        rotate: "2.5deg",
        scale:1.1,
    }}
    className="col-span-6 bg-red-500 md:col-span-3">
        <a href="https://www.instagram.com/amadeo_bon/" target="blank"
            className="grid h-full text-3xl text-white place-content-center"
        >
            <SiInstagram />
        </a>
    </Block>
    <Block 
    whileHover={{
        rotate: "2.5deg",
        scale:1.1,
    }}
    className="col-span-6 bg-zinc-900 md:col-span-3">
        <a href="https://github.com/Amadeo-Frontend" target="blank"
            className="grid h-full text-3xl text-white place-content-center"
        >
            <SiGithub />
        </a>
    </Block>
    <Block 
    whileHover={{
        rotate: "-2.5deg",
        scale:1.1,
    }}
    className="col-span-6 bg-green-600 md:col-span-3">
        <a href="https://wa.link/g5g6zv" target="blank"
            className="grid h-full text-3xl text-white place-content-center"
            >
            <SiWhatsapp />
        </a>
    </Block>
    </>
)
}

export default SocialBlock


