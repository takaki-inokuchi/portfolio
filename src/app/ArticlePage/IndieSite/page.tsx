import Skill from "@/app/components/skill";

export const skillData = {
  language: "javascript , TypeScript",
  role: "Frontend Development , UI Design , UX Design",
  client: "個人開発",
  period: "2025/09~2025/10",
  technology:
    "TypeScript , React , supabase , Chakra UI , GitHub Actions , Jest",
};

const IndieSite = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="py-14 text-6xl font-bold">IndieSite</h1>
      <div className="flex space-x-2">
        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
          Webアプリ
        </span>
        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
          toC
        </span>
        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
          コミュニティ
        </span>
        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
          ゲームシェア
        </span>
      </div>
      <p className="py-3">
        個人製作されたゲームシェアできる、コミュニティWebアプリを作成しました。
      </p>
      <p className="py-30">画像</p>
      <div>
        <Skill {...skillData} />
      </div>

      <h2 className="text-4xl font-bold pt-10 pb-4">Outline</h2>

      <p>
        このアプリでは、個人製作されたゲームの一覧を確認できます。
        最新ゲームやランキングを閲覧し、ゲーム情報を共有することが可能です。
        マイナーなゲームも気軽に共有できる場を提供しています。
      </p>
    </div>
  );
};

export default IndieSite;
