import ScrollAnimation from "react-animate-on-scroll";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="contactContainer" id="contact">
      <ScrollAnimation  animateIn='slideInUp'>
         <h1>Get in touch</h1>
      </ScrollAnimation>

      <ScrollAnimation className="flex items-center justify-center"  animateIn='slideInUp' delay={200}>
      <p className="text1">
        I’d love to hear from you! Whether you have a project in mind, need a website overhaul,
        or just want to say hello, feel free to reach out.
      </p>
      </ScrollAnimation>

      <ScrollAnimation  animateIn='wobble' delay={500}>
      <a href="mailto:genolauzureta@gmail.com">
        <button className="contactBtn">
          <AiOutlineMail/>Email Me</button>
      </a>
      <p className="text2"><FaPhone /> +63 947 377 8502</p>
      </ScrollAnimation>

      <span>
      <a href="https://www.linkedin.com/in/geno-ureta-1b839a21a/" target="_blank">LinkedIn</a>
      <a href="https://web.facebook.com/genojo.ureta/" target="_blank">Facebook</a>
      <a href="https://github.com/Genosoo" target="_blank">Github</a>
      </span>
    </div>
  )
}
