import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b">
      {/* Left side: Logo + Title */}
      <div className="flex items-center space-x-2">
        {/* Optional logo example */}
        <Image src="/ethereum.png" alt="Logo" width={32} height={32} />
        <h1 className="text-xl font-bold text-black">TSender</h1>
      </div>

      {/* Center: GitHub link */}
      <a
        href="https://github.com/cloud1992" // Replace with your repo link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-gray-600 hover:text-black"
      >
        <FaGithub size={24} />
        <span className="hidden sm:inline">GitHub</span>
      </a>

      {/* Right side: Connect Button */}
      <ConnectButton />
    </header>
  );
}
