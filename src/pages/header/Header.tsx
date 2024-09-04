import { Button } from 'antd'
import image from '../../assets/home/image1.png'
import { LuDownload } from "react-icons/lu";
import resume from '../../assets/resume/Resume.pdf'

export default function Header() {
  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className="homeHeaderContainer" id='home'>
        <div className="homeHeaderBoxLeft animate__animated fadeInUp">
             <h1>Front-End Developer</h1>
             <p>I’m <b>Geno Ureta</b>, a passionate and dedicated to crafting visually 
                stunning and highly functional websites. 
                With a blend of artistic vision and technical expertise, 
                I bring ideas to life in the digital world. 
                Explore my work, learn about my journey,
                and let’s create something amazing together.
            </p>
              <Button type="primary" className='homeHeaderBtn' onClick={onButtonClick} icon={<LuDownload />}>Resume</Button>
        </div>

        <div className="homeHeaderBoxRight">
             <img className='animate__animated jackInTheBox' src={image} alt="profile image" />
        </div>
    </div>
  )
}
