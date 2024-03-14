import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/history", label: "History" },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className=" bg-[#CBF1F5] relative w-screen h-screen">
      <aside className=" absolute top-0 left-0 bottom-0 h-full w-[200px] border-r border-color">
        <div className="text-2xl flex justify-center items-center my-4">MOODMAP</div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className=" py-6 px-2 text-xl">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className=" ml-[200px] h-full">
        <header className=" h-[60px] border-b border-black/10">
          <div className=" h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className=" h-[calc(100vh-60px)] ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
