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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
