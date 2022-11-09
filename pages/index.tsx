import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/projectpreview";

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: "Work Experience",
    desc: "Software Developer | Industry Experience in Developer",
    linkUrl: "/experience",
    image: "/project3.jpg",
  });
  
  projectMetadataArray.push({
    title: "Project 1",
    desc: "Mapn | Python, Flask, VueJS, MongoDB, AWS",
    linkUrl: "/project1",
    image: "/project1.jpg",
  });
  
  projectMetadataArray.push({
    title: "Project 2",
    desc: "EStoreFront | Java, Spring Boot, Maven, MySQL",
    linkUrl: "/project2",
    image: "/project2.jpg",
  });

  // projectMetadataArray.push({
  //   title: "Project 3",
  //   desc: "Tracks time and usage",
  //   linkUrl: "/project3",
  //   image: "/project3.jpg",
  // });

  const projectPreviewElements = [];

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
