import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="py-2 flex items-center">
      <Link href="/">
        <div className="w-[67px] sm:w-24 lg:w-[67px]">
          <Image
            src="/Images/logo.png"
            alt="Christian Freedom Church logo"
            width={67}
            height={43}
            className="w-full h-auto"
            layout="intrinsic"
          />
        </div>
      </Link>

      <div className="sm:flex lg:hidden flex flex-col sm:text-[12px] leading-none">
        <p className="font-sans text-[12px] whitespace-nowrap">
          Christian Freedom
        </p>
        <p className="font-sans text-[12px] ">Church</p>
      </div>
    </div>
  );
};

export default Logo;
