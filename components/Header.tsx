import Image from "next/image";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // URL Image
  const profileLogo = `https://rb.gy/g1pwyx`;
  const logo = `https://rb.gy/ulxxee`;
  return (
    <header className={`${isScrolled && "bg-[#141414] bg-opacity-100"} bg-opacity-0 transition-all duration-100`}>
      {/* left section */}
      <div className=" flex items-center space-x-2 md:space-x-10">
        <div className=" h-8 w-12 md:h-12 md:w-20 flex items-center">
          <Image
            loader={() => logo}
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </div>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      {/* right section */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <div className="h-4 w-5 md:h-8 md:w-8 flex items-center">
            <Image
              loader={() => profileLogo}
              src={profileLogo}
              alt="Profile"
              width={50}
              height={50}
              className="cursor-pointer object-contain rounded-sm"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
