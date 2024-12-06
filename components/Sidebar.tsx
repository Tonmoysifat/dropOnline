"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/contants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  fullName: string;
  email: string;
  avatar: string;
}
const Sidebar = ({ fullName, email, avatar }: Props) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <div className="hidden h-auto items-center gap-x-3 lg:flex">
          <Image
            // src="/assets/icons/mobileLogo.svg"
            src="/assets/images/whrLogo.png"
            alt="logo"
            width={53}
            height={52}
            className="h-auto"
          />
          <h1 className="text-[24px] font-medium text-[#5b62f4]">DropOnline</h1>
        </div>
        <Image
          // src="/assets/icons/logo-brand.svg"
          src="/assets/images/whrLogo.png"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active",
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active",
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      />
      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
