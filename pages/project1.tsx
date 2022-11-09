import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from '../components/layout';
import Profile from "../components/profile";
import ProjectPreview from '../components/projectpreview';
import Link from 'next/link';
import projectImage from "../public/project1.jpg";

const Project1: NextPage = () => {
  return (
    <div>
      <Image src={projectImage} />
      <div className="mt-4">
      Developed a platform for online listing of places, primarily based on a customized map that divides 7 continents and allows users to select places based on a specific area and book the location. 
      Integrated Payment gateways such as PayPal and Stripe with 4 modules to allow users to make payments while reserving rooms. 
      Optimized the experience of the customer support system by 20% using a chatbot constructed in AWS Lex.
      </div>
      <div className="mt-6">
        <Link href="/">
            <a href={"/"} className="font-bold underline hover:text-blue-600"> Back</a>
        </Link>
        </div>
    </div>
  )
}

export default Project1
