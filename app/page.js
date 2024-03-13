import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className=" w-screen h-screen flex justify-center items-center text-[#71C9CE] bg-[#222831]">
      <div className=" w-full max-w-[600px] mx-auto">
        <h1 className="text-8xl font-bold">MoodMap</h1>
        <p className="text-2xl my-6 text-[#71C9CE]/60">
          A self mood tracking journal webapp. Track your mood by being honest
        </p>
        <div>
          <Link href={userId ? "/journal" : "new-user"}>
            <button className=" bg-[#71C9CE] py-2 px-4 border-transparent rounded-lg text-xl text-[#E3FDFD] hover:bg-[#A6E3E9]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
