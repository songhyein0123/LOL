export async function getChampionRotation(): Promise<string[]> {
  const apiKey = process.env.RIOT_API_KEY;
  const response = await fetch(
    `https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("로테이션 데이터를 가져오는 데 실패했습니다.");
  }

  const data = await response.json();
  return data.freeChampionIds;
}
