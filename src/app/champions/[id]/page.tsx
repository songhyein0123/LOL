import Image from "next/image";
import { fetchChampionDetail } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/Champion";
import { Metadata } from "next";

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  return {
    title: `${champion.name} - 챔피언 상세 정보`,
    description: `${champion.name}의 자세한 정보와 설명입니다.`,
  };
}

export default async function ChampionDetailPage({ params }: Params) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{champion.name}</h1>
      <h2 className="text-xl mb-4">{champion.title}</h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt={champion.name}
        width={500}
        height={500}
        priority
        className="w-full h-auto mb-4"
      />
      <p>{champion.blurb}</p>
    </div>
  );
}
