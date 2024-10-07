import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">환영합니다! </h1>
      <p className="mt-4">
        이 앱은 리그 오브 레전드 챔피언, 아이템, 로테이션 정보를 제공합니다.
      </p>
      <nav className="mt-8">
        <ul className="space-y-4">
          <li>
            <Link href="/champions" className="text-blue-500 hover:underline">
              챔피언 목록 보기
            </Link>
          </li>
          <li>
            <Link href="/items" className="text-blue-500 hover:underline">
              아이템 목록 보기
            </Link>
          </li>
          <li>
            <Link href="/rotation" className="text-blue-500 hover:underline">
              로테이션 정보 보기
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
