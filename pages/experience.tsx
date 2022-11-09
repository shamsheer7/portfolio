import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from '../components/layout';
import Profile from "../components/profile";
import ProjectPreview from '../components/projectpreview';
import Link from 'next/link';
import projectImage from "../public/project3.jpg";

const Experience: NextPage = () => {
  return (
    <div>
      <Image src={projectImage} />
      <div className="mt-4">
      Software Developer <p className="italic font-bold">Swap Development</p>
      <ul>
        <li>- Worked in an agile and fast-paced work environment that included daily stand-ups/SCRUM meetings, functional knowledge, sprint planning and managed 20 projects using versioning systems such Git, Bitbucket, GitHub, and GitLab. </li>
        <li>- Developed Web applications using React, Vue, Angular, Flask, Java, and Express JS to work with REST APIs using MongoDB, PostgreSQL, and MySQL as 3 databases. </li>
        <li>- Attained Experience with the Software development Lifecycle, CI/CD pipelines, Jira, Asana, DevOps tooling, AWS services, and integrated payment gateways for 5 major applications using Stripe, PayPal, Razor pay, and other banks. </li>
      </ul>
      </div>
      <div className="mt-6">
        <Link href="/">
            <a href={"/"} className="font-bold underline hover:text-blue-600"> Back</a>
        </Link>
        </div>
    </div>
  )
}

export default Experience
