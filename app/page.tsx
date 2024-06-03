import ShareLink from '@/components/share-link';
import SocialLinks from '@/components/social-links';
import Image from 'next/image';


export default function Home() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="rounded-lg shadow-lg p-8 w-full max-w-md relative border">
            <div className="absolute top-4 right-4">
              <ShareLink />
            </div>
            <div className="flex flex-col items-center mb-6">
              <Image
                src="https://github.com/shadcn.png"
                width={80}
                height={80}
                alt="Profile Picture"
                className="rounded-full mb-4"
              />
              <h1 className="text-2xl font-bold mb-2">John Doe</h1>
              <p className="text-gray-500 dark:text-gray-400">@johndoe</p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
