import Image from "next/image";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  const profileLogo = `https://rb.gy/g1pwyx`;
  const logo = `https://rb.gy/ulxxee`;
  return (
    <header>
      {/* left section */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          loader={() => logo}
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

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
          <Image
            loader={() => profileLogo}
            src={profileLogo}
            alt="Profile"
            width={50}
            height={50}
            className="cursor-pointer object-contain rounded-md"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
