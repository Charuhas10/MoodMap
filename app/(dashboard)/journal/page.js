import EntryCard from "@/components/EntryCard";
import Question from "@/components/Question";
import NewEntryCard from "@/components/NewEntryCard";
import Link from "next/link";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { analyse } from "@/utils/ai";

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();
  return (
    <div className=" p-10 bg-[#E3FDFD] h-full">
      <h2 className=" text-6xl mb-8">MOOD ENTRIES</h2>
      <div className=" my-8">
        <Question />
      </div>
      <div className=" grid gap-4 grid-cols-3">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;

// key={entry.id} 