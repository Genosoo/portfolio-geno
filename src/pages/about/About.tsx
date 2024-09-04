import profile1 from '../../assets/about/image1.png';
import profile2 from '../../assets/about/image2.png';
import ScrollAnimation from 'react-animate-on-scroll';

export default function About() {


  return (
    <div className="homeAboutContainer" id='about'>
      <div className="homeAboutImg">
        <ScrollAnimation animateIn='backInLeft' delay={500}>
          <img className='image1' src={profile1} alt="profile" />
        </ScrollAnimation>
        <ScrollAnimation animateIn='backInLeft' delay={300}>
          <img className='image2' src={profile2} alt="profile" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation className="homeAboutText" animateIn='backInRight' delay={300}>
        <h1>About</h1>
        <p>
            I am a dedicated front-end developer with 2 years of experience crafting user-friendly interfaces. 
            My passion lies in transforming ideas into visually stunning and highly functional web applications. 
            With a solid foundation in modern web technologies, I ensure that every project I undertake is built to the highest standards.
            <br />
            <br />
            Leveraging the power of React, I specialize in delivering high-performance applications that not only look great but also provide an exceptional user experience. My expertise allows me to create seamless, responsive, and interactive interfaces that engage users and keep them coming back for more.
        </p>
        {/* <p>
          Hello! I’m Geno, a frontend developer with a keen eye for design and a love for code. 
          My journey into web development started when I was in college and working with 2 years 
          of experience in a company. Since then, I’ve been on a mission to merge aesthetics 
          with technology. I believe that a great website is not just about pretty visuals but 
          also about seamless user experiences.
        </p> */}
        {/* <Button className='homeAboutBtn' onClick={showModal}>Read More</Button> */}
      </ScrollAnimation>

      {/* <Modal
        title="About Me"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <p>
          Hello! I’m Geno, a frontend developer with a keen eye for design and a love for code. 
          My journey into web development started when I was in college and working with 2 years 
          of experience in a company. Since then, I’ve been on a mission to merge aesthetics 
          with technology. I believe that a great website is not just about pretty visuals but 
          also about seamless user experiences.
        </p>
        <p>
          My Skills:
          <ul>
            <li>HTML & CSS: Crafting clean and efficient code to create beautiful layouts.</li>
            <li>JavaScript: Bringing interactivity and dynamic elements to life.</li>
            <li>Responsive Design: Ensuring websites look great on all devices.</li>
            <li>Frameworks: Expertise in React .</li>
            <li>Design Tools: Proficient in Adobe XD, Figma, Sketch, or any design tools you use.</li>
            <li>Version Control: Experience with Git and collaborative development.</li>
          </ul>
        </p>
        <p>
          What I Offer:
          <ul>
            <li>Custom Website Development: Tailored websites that reflect your brand and engage your audience.</li>
            <li>Responsive Design: Ensuring your site looks and functions perfectly on any device.</li>
            <li>UI/UX Design: Creating intuitive and aesthetically pleasing user interfaces.</li>
            <li>Website Maintenance: Keeping your site up-to-date and running smoothly.</li>
            <li>Performance Optimization: Enhancing site speed and performance for a better user experience.</li>
          </ul>
        </p>
      </Modal> */}
    </div>
  );
}
