import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-current="page" className="brand w-nav-brand w--current">
      <Image
        width={178}
        height={55}
        src="/assets/images/logo.svg"
        alt="main_logo"
        className="global-logo"
        style={{ height: "auto" }}
        priority
      />
    </Link>
  );
};

export default Logo;
