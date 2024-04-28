import Block from "./Block"

const ProjectsBlock = () => {
return (
    <>
    <Block 
    whileHover={{
        rotate: "1.5deg",
        scale:1.1,
    }} 
    className="col-span-6 p-2 md:col-span-3">
        <a href="https://www.linkedin.com/in/amadeo-bon/" target="blank"
            className="grid h-full place-content-center"
        >
            <img src="/buzz-mockup.png" alt="Angular app" className="object-cover w-full h-full rounded-xl" />
        </a>
    </Block>
    <Block 
    whileHover={{
        rotate: "-1.5deg",
        scale:1.1,
    }}
    className="col-span-6 p-2 md:col-span-3">
        <a href="https://www.linkedin.com/in/amadeo-bon/" target="blank"
            className="grid h-full place-content-center"
        >
            <img src="/cat-mockup.png" alt="Angular app" className="object-cover w-full h-full rounded-xl" />
        </a>
    </Block>
    <Block 
    whileHover={{
        rotate: "1.5deg",
        scale:1.1,
    }}
    className="col-span-6 p-2 md:col-span-3">
        <a href="https://www.linkedin.com/in/amadeo-bon/" target="blank"
            className="grid h-full place-content-center"
        >
            <img src="/codex-mockup.png" alt="Angular app" className="object-cover w-full h-full rounded-xl" />
        </a>
    </Block>
    <Block 
    whileHover={{
        rotate: "-1.5deg",
        scale:1.1,
    }}
    className="col-span-6 p-2 md:col-span-3">
            <a href="https://www.linkedin.com/in/amadeo-bon/" target="blank"
                className="grid h-full place-content-center"
            >
                <img src="/weather-mockup.png" alt="Angular app" className="object-cover w-full h-full rounded-xl" />
            </a>
        </Block></>
)
}

export default ProjectsBlock
