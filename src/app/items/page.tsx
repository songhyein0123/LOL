import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

interface Item {
  id: string;
  name: string;
  image: {
    full: string;
  };
}

export default async function ItemsPage() {
  const items: Item[] = await fetchItemList();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg p-4 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
