import { fetchChampionList } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

export default async function ChampionsPage() {
  const champions: Champion[] = await fetchChampionList();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          챔피언 목록
        </h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
          {champions.map((champion) => (
            <div
              key={champion.id}
              className="border border-gray-300 rounded-lg overflow-hidden text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
            >
              <Link href={`/champions/${champion.id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                  alt={champion.name}
                  width={220}
                  height={220}
                  priority
                  className="w-full h-auto transition-opacity duration-300 ease-in-out hover:opacity-90"
                />
                <h2 className="m-0 p-2 text-lg font-semibold text-gray-800 hover:text-blue-600">
                  {champion.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
