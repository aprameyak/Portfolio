'use client';

import Image from 'next/image';

const ProfileCard = () => {
  return (
    <aside className="w-full md:w-[360px] flex-shrink-0 md:self-center">
      <div className="bg-surface/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 shadow-xl shadow-primary/5">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/40">
            <Image
              src="https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/profilepic.jpg"
              alt="Aprameya Kannan"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>

          <h2 className="mt-4 text-2xl font-bold text-primary-light leading-tight">
            Aprameya Kannan
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://github.com/aprameyak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-background/40 border border-primary/10 hover:border-primary/25 hover:bg-background/60 transition-colors text-text-muted hover:text-white"
            >
              <Image src="/github.svg" alt="GitHub" width={22} height={22} />
            </a>

            <a
              href="https://linkedin.com/in/aprameyak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-background/40 border border-primary/10 hover:border-primary/25 hover:bg-background/60 transition-colors text-text-muted hover:text-white"
            >
              <Image src="/linkedin.svg" alt="LinkedIn" width={22} height={22} />
            </a>

            <a
              href="mailto:aprameyakannan@gmail.com"
              aria-label="Email"
              className="p-3 rounded-xl bg-background/40 border border-primary/10 hover:border-primary/25 hover:bg-background/60 transition-colors text-text-muted hover:text-white"
            >
              <Image src="/mail.svg" alt="Email" width={22} height={22} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;

