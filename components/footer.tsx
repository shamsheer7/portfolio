import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const gitIcon = <FontAwesomeIcon icon={faGithub} className="text-white-500" />;
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} className="text-white-600" />;

  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-400">
      {/* <div>Designed and built by Shamsheer</div> */}
      <div className="flex justify-center gap-4">
        <Link href="https://github.com/shamsheer7">
            <a className="text-3xl text-slate-300 bg-transparent-500 ">{gitIcon}</a>
        </Link>
        <Link href="https://www.linkedin.com/in/shamsheer-singh/">
            <a className="text-3xl text-slate-300 bg-transparent-500">{linkedInIcon}</a>
        </Link>
       </div>
    </div>
  );
};

export default Footer;