// links

import Link from "next/link";

// icons

import {
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/skudsi490/'} className="hover:text-accent transition-all duration-300">
    <RiGithubFill />
    </Link>

    <Link href={'https://www.linkedin.com/in/sami-kudsi-0b1010164/'} className="hover:text-accent transition-all duration-300">
    <RiLinkedinBoxFill />
    </Link>

  </div>
  );
};

export default Socials;
