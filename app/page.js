import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className=" w-screen h-screen flex justify-center items-center text-[#ffd1d1] bg-[#fff5e4]">
      <div className=" w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl font-bold">MoodMap</h1>
        <p className="text-2xl mt-4 mb-4">
          A self mood tracking journal webapp. Track your mood by being honest
        </p>
        <div>
          <Link href={userId ? "/journal" : "new-user"}>
            <button className=" bg-[#ff9494] py-2 px-4 border-transparent rounded-lg text-xl text-[#ffd1d1]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
