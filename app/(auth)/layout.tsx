import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex items-center gap-x-5">
            <Image
              src="/assets/icons/Logo.svg"
              alt="logo"
              width={82.63}
              height={81.07}
              className="h-auto"
            />
            <h1 className="text-[37.42px] font-medium text-white">
              DropOnline
            </h1>
          </div>
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Illustration"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <div className="flex items-center gap-x-5">
            <Image
              // src="/assets/icons/mobileLogo.svg"
              src="/assets/images/whrLogo.png"
              alt="logo"
              width={82.63}
              height={81.07}
              className="h-auto"
            />
            <h1 className="text-[37.42px] font-medium text-[#5b62f4]">
              DropOnline
            </h1>
          </div>
        </div>
        {children}
      </section>
    </div>
  );
};
export default Layout;
