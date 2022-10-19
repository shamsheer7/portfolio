import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewInterface {
    title: string;
    desc: string;
    linkUrl: string;
    image: string;
}
const ProjectPreview = (props : ProjectPreviewInterface) => {
    const title: string = "Data Analysis App";
    const desc: string = "Processes data in Python";
    const linkUrl: string = "/data_analysis";
    return (
        <div className="flex gap-4">
            <div className="relative w-24 h-16">
                <Image src={props.image} layout="fill" />
            </div>
            <div className="my-auto">
                <Link href={props.linkUrl}>
                    <a href={"/"} className="font-bold underline hover:text-blue-600"> {props.title}</a>
                </Link>
            <div> {props.desc}</div>
            </div>
        </div>
    )
}

export default ProjectPreview;