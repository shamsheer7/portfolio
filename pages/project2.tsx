import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from '../components/layout';
import Profile from "../components/profile";
import ProjectPreview from '../components/projectpreview';
import Link from 'next/link';
import projectImage from "../public/project2.jpg";

const Project2: NextPage = () => {
  return (
    <div>
      <Image src={projectImage} />
      <div className="mt-4">
         <ul>
        <li>- Implemented a Java application in a team of 5 members for service seekers and service providers by following Model View Controller (MVC) architectural pattern with MySQL as a database.</li>
        <li>- Followed CI/CD pipeline with GitLab and Agile methodology with Jira and Test-Driven Development (TDD) to deploy the application across three platforms, including Heroku. </li>
        <li>- Accomplished 10+ weekly and monthly deadlines for the planning and implementation of various modules. </li>
        </ul>
      </div>
      <div className="mt-6">
        <Link href="/">
            <a href={"/"} className="font-bold underline hover:text-indigo-600"> Back</a>
        </Link>
        </div>
    </div>
  )
}

export default Project2
