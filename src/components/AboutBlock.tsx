import Block from "./Block"

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug font-sora">
        <p>
            My passion is building cool stuff. {""}
            <span className="text-zinc-400">I build primarity with React, Tailwind CSS, and Framer Motion. I love this stack so much that i even built a website about it.
            I've made over projects in React Native and I'm currently working on a React Native app.
            </span>
        </p>
    </Block>
  )
}

export default AboutBlock
