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
      <h1 className="py-14 text-6xl font-bold">{item?.title}</h1>

      <Tag tags={item?.tags ?? []} />

      <p className="py-3">
        個人製作されたゲームシェアできる、コミュニティWebアプリを作成しました。
      </p>

      <div className="aspect-video w-full overflow-hidden flex justify-center">
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

      <h3 className="text-2xl font-bold pt-10">
        有名なゲームには広告があるが、個人製作アプリには広告がない
      </h3>
      <p className="pt-4">
        個人開発者が自分の作品を広く知ってもらうためのプラットフォームが不足していると感じたことが挙げられる。
        多くの優れたインディーゲームが存在する一方で、それらを発見し、共有する手段が限られている現状を改善したかった。
      </p>
    </div>
  );
};

export default PortfolioDetail;
