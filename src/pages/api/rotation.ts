import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return res
      .status(500)
      .json({ message: "RIOT_API_KEY가 설정되지 않았습니다." });
  }

  try {
    const response = await fetch(
      `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("API 호출이 실패했습니다.");
    }

    const data = await response.json();
    res.status(200).json({ freeChampionIds: data.freeChampionIds });
  } catch (error) {
    console.error("Error fetching champion rotations:", error);
    return res
      .status(500)
      .json({ message: "로테이션 데이터를 가져오는 데 실패했습니다." });
  }
}
