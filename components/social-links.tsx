"use client"

import { FC } from 'react';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  YoutubeLogo,
  SnapchatLogo,
  XLogo,
} from '@phosphor-icons/react';
import Link from 'next/link';

const SocialLinks: FC = () => {
  return (
    <div className="grid gap-4">
      <Link
        href="#"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <FacebookLogo className="w-5 h-5 mr-2" />
        Facebook
      </Link>
      <Link
        href="#"
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <InstagramLogo className="w-5 h-5 mr-2" />
        Instagram
      </Link>
      <Link
        href="#"
        className="bg-neutral-950 hover:bg-zinc-950 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <XLogo className="w-5 h-5 mr-2" />
        X
      </Link>
      <Link
        href="#"
        className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <LinkedinLogo className="w-5 h-5 mr-2" />
        LinkedIn
      </Link>
      <Link
        href="#"
        className="bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 hover:from-blue-500 hover:via-pink-600 hover:to-red-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <TiktokLogo className="w-5 h-5 mr-2" />
        TikTok
      </Link>
      <Link
        href="#"
        className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <YoutubeLogo className="w-5 h-5 mr-2" />
        YouTube
      </Link>
      <Link
        href="#"
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <SnapchatLogo className="w-5 h-5 mr-2" />
        Snapchat
      </Link>
    </div>
  );
};

export default SocialLinks;
