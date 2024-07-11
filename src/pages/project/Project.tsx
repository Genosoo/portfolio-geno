import { useState } from 'react';
import { Modal } from 'antd';
import image1 from '../../assets/project/image.png';
import image2 from '../../assets/project/image2.png';
import image3 from '../../assets/project/image3.png';
import ScrollAnimation from 'react-animate-on-scroll';


type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Admin Dashboard',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: image1
  },
  {
    id: 2,
    title: 'Project 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: image2
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Project 3 description',
    image: image3
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Project 4 description',
    image: image1
  }
];

export default function Project() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const showModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollAnimation animateIn='slideInUp' delay={300}>
    <div className="homeProjectContainer" id='project'>
      <h1>Project</h1>
        <div className="homeProjectBox1">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="homeProjectBoxImg"
              onClick={() => showModal(project)}
              style={{ cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>  

      {selectedProject && (
        <Modal
          title={selectedProject.title}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="projectModalBox">
          <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%' }} />
          <p>{selectedProject.description}</p>
          </div>
        </Modal>
      )}
    </div>
    </ScrollAnimation>

  );
}
