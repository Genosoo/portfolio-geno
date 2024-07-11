import { Button } from 'antd'
import image from '../../assets/home/image.png'
import { LuDownload } from "react-icons/lu";

export default function Header() {
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
            <a href="" download>
              <Button type="primary" className='homeHeaderBtn' icon={<LuDownload />}>Resume</Button>
            </a>
        </div>

        <div className="homeHeaderBoxRight">
             <img className='animate__animated jackInTheBox' src={image} alt="profile image" />
        </div>
    </div>
  )
}
