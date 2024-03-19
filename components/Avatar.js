// next image 
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full hidden xl:flex">
      <Image src={'/Sami8.png'} width={737} height={678} alt="Avatar" />
    </div>
  );
};

export default Avatar;
