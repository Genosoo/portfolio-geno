import { useState } from 'react';
import { Modal, Button } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';


type Project = {
  id: number;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Fleet Monitoring System',
    description: "The Fleet Monitoring System is a comprehensive web application designed to enhance the management and tracking of a fleet of vehicles for logistics and transportation companies. This system provides real-time insights, tracking, and management features that optimize fleet operations, improve efficiency, and ensure safety."
  },
  {
    id: 2,
    title: 'Registration Management System',
    description: "The Registration Management System is a robust web application designed to streamline and automate the registration process for events, courses, conferences, and other organized activities. This system provides efficient management of participant information, payment processing, and communication, ensuring a seamless experience for both organizers and participants."
  },
  {
    id: 3,
    title: 'Online Voting System',
    description: "An intuitive and secure online voting platform designed to streamline the voting process. I was responsible for the front-end development using React.js and Zustand, creating a user-friendly interface that ensures ease of use and accessibility for all users. The system includes features such as real-time vote counting, secure authentication, and detailed voting analytics."
  },
  {
    id: 4,
    title: 'Incident Reporting Monitoring System',
    description: "A robust platform for reporting and monitoring incidents in real-time. I played a key role in developing the front-end using React.js and Zustand, focusing on creating an intuitive and efficient user interface. The system allows users to report incidents, track the status of their reports, and generate detailed analytics."
  },
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
       <div className="projectHeader">
       <h1>Project</h1>
       <p >In this project, I was responsible for creating and implementing the user interface (UI) based on the requirements and specifications from my previous work. My role encompassed several key areas, including UI design, API integration, and ensuring a seamless user experience.</p>
       </div>
        <div className="homeProjectBox1">
          {projects.map((project) => (
           <div className="projectBox" key={project.id} >
              <span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </span>
              <Button onClick={() => showModal(project)}>
                Read More
              </Button>
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
          <p>{selectedProject.description}</p>
          </div>
        </Modal>
      )}
    </div>
    </ScrollAnimation>

  );
}
