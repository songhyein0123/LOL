import { Champion } from "@/types/Champion";

export async function fetchChampionList(): Promise<Champion[]> {
  const versionResponse = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions = await versionResponse.json();
  const latestVersion = versions[0];

  const championsResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
  );

  if (!championsResponse.ok) {
    throw new Error("챔피언 목록을 가져오는 데 실패했습니다.");
  }

  const championsData = await championsResponse.json();
  return Object.values(championsData.data);
}

import { ChampionDetail } from "@/types/Champion";

export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
  const versionResponse = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions = await versionResponse.json();
  const latestVersion = versions[0];

  const championResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`
  );

  if (!championResponse.ok) {
    throw new Error("챔피언 상세 정보를 가져오는 데 실패했습니다.");
  }

  const championData = await championResponse.json();
  return championData.data[id]; // 챔피언 상세 정보 반환
}

interface Item {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export async function fetchItemList(): Promise<Item[]> {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/item.json"
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`아이템 목록을 가져오는 데 실패했습니다: ${errorText}`);
  }

  const data = await response.json();
  return Object.values(data.data) as Item[];
}
