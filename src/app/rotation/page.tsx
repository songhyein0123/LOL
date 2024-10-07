"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Champion {
  id: string;
  name: string;
}

interface ChampionData {
  id: string;
  name: string;
}

export default function ChampionRotationPage() {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChampionRotation = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/rotation");
        if (!response.ok)
          throw new Error("로테이션 정보를 가져오는 데 실패했습니다.");
        const data = await response.json();

        const championsResponse = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/ko_KR/champion.json"
        );
        if (!championsResponse.ok)
          throw new Error("챔피언 데이터를 가져오는 데 실패했습니다.");
        const championsData = await championsResponse.json();

        const championsList = Object.values(
          championsData.data
        ) as ChampionData[];
        const rotationChampions = championsList.filter((champion) =>
          data.freeChampionIds.includes(champion.id)
        );

        setChampions(rotationChampions);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchChampionRotation();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        로딩 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        현재 로테이션 챔피언
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {champions.map((champion) => (
          <div
            key={champion.id}
            className="border border-gray-300 rounded-lg overflow-hidden text-center cursor-pointer shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/champions/${champion.id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                alt={champion.name}
                width={200}
                height={200}
                priority
                className="w-full h-auto mb-2"
              />
              <h2 className="m-0 p-2 text-lg font-semibold">{champion.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
