import Skill from "@/app/components/skill";
import Tag from "@/app/components/tag";
import { portfolioData } from "@/app/data/data";
import Image from "next/image";
import { PortfolioDetailProps } from "@/app/data/type";

const PortfolioDetail = async ({ params }: PortfolioDetailProps) => {
  const resolvedParams = await params;
  const item = portfolioData.find((data) => data.id === resolvedParams.id);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="py-14 text-6xl font-bold break-words max-w-full">
        {item?.title}
      </h1>

      <Tag tags={item?.tags ?? []} />

      <p className="py-3">
        個人製作されたゲームシェアできる、コミュニティWebアプリを作成しました。
      </p>

      <div className="w-full flex justify-center">
        {item?.image && (
          <Image
            src={item.image}
            alt={item.title}
            width={1600}
            height={900}
            className="rounded mx-auto mb-3"
          />
        )}
      </div>

      <div>
        <Skill {...item!.skillData[0]!} />
      </div>

      <h2 className="text-4xl font-bold pt-10 pb-4 border-b border-gray-300">
        Outline
      </h2>

      <p className="pt-4">{item?.outline}</p>

      <h2 className="text-4xl font-bold pt-10 pb-4 border-b border-gray-300">
        Objectives
      </h2>

      <p className="pt-4">
        このアプリを開発するにあたって、いくつかの理由があった。
      </p>

      <h3 className="text-2xl font-bold pt-10">{item?.subtitle1}</h3>
      <p className="pt-4">{item?.article1}</p>
    </div>
  );
};

export default PortfolioDetail;
