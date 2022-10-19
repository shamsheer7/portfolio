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
        <li>- Developed a number of web applications to work with data management systems and integrated third party APIs.</li>
        <li>- Explored ways to automate project workflows and visualize GitHub project collaboration in a business setting.</li>
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
