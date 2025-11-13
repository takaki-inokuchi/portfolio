import Skill from "@/app/components/skill";
import Tag from "@/app/components/tag";
import { portfolioData } from "@/app/data/data";
import Image from "next/image";
import { PortfolioDetailProps } from "@/app/data/type";
import Footercard from "@/app/components/footercard";

const PortfolioDetail = async ({ params }: PortfolioDetailProps) => {
  const resolvedParams = await params;
  const item = portfolioData.find((data) => data.id === resolvedParams.id);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="py-14 text-6xl font-bold break-words max-w-full">
        {item?.title}
      </h1>

      <Tag tags={item?.tags ?? []} />

      <p className="py-3">{item?.explanation}</p>

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

      <p className="pt-4 whitespace-pre-line">{item?.outline}</p>

      <h2 className="text-4xl font-bold pt-10 pb-4 border-b border-gray-300">
        Objectives
      </h2>

      <p className="pt-4">
        このアプリを開発するにあたって、いくつかの理由があった。
      </p>

      <h3 className="text-2xl font-bold pt-10">{item?.subtitle1}</h3>
      <p className="pt-4 whitespace-pre-line">{item?.article1}</p>

      <h3 className="text-2xl font-bold pt-10">{item?.subtitle2}</h3>
      <p className="pt-4 whitespace-pre-line">{item?.article2}</p>

      <h2 className="text-4xl font-bold pt-10 pb-4 border-b border-gray-300">
        Key Features
      </h2>
      <h3 className="text-2xl font-bold pt-10">{item?.feature1}</h3>
      <p className="pt-4">{item?.featurecontent1}</p>
      <div className="w-full flex justify-center pt-4">
        {item?.featureimage1 && (
          <Image
            src={item.featureimage1}
            alt={item.title}
            width={1600}
            height={900}
            className="rounded mx-auto mb-3"
          />
        )}
      </div>

      <h3 className="text-2xl font-bold pt-10">{item?.feature2}</h3>
      <p className="pt-4">{item?.featurecontent2}</p>
      <div className="w-full flex justify-center pt-4">
        {item?.featureimage2 && (
          <Image
            src={item.featureimage2}
            alt={item.title}
            width={1600}
            height={900}
            className="rounded mx-auto mb-3"
          />
        )}
      </div>
      <h2 className="text-3xl font-bold pt-10 pb-4 border-b border-gray-300">
        技術スタック
      </h2>

      <div className="grid grid-cols-2 gap-1 pt-4 pb-10">
        <div className="font-bold">カテゴリ</div>
        <div className="font-bold">使用機能</div>

        <div>言語</div>
        <div>{item?.language}</div>

        {item?.database && (
          <>
            <div>DB設計</div>
            <div>{item?.database}</div>
          </>
        )}

        <div>フロントエンド</div>
        <div>{item?.frontend}</div>

        <div>ビルドツール</div>
        <div>{item?.buildtool}</div>

        <div>テスト</div>
        <div>{item?.test}</div>

        {item?.cicd && (
          <>
            <div>CICD</div>
            <div>{item?.cicd}</div>
          </>
        )}

        {item?.ai && (
          <>
            <div>AI</div>
            <div>{item?.ai}</div>
          </>
        )}
      </div>

      <h2 className="text-3xl font-bold pt-10 pb-4 border-b border-gray-300">
        アーキテクチャ図
      </h2>

      <div className="w-full flex justify-center pt-4">
        {item?.architecture && (
          <Image
            src={item.architecture}
            alt={item.title}
            width={1600}
            height={900}
            className="rounded mx-auto mb-3"
          />
        )}
      </div>
      {/* 工夫 */}

      <h2 className="text-3xl font-bold pt-10 pb-4 border-b border-gray-300">
        {item?.ingenuitytitle1}
      </h2>
      <p className="pt-4 whitespace-pre-line">{item?.ingenuityarticle1}</p>
      <div className="w-full flex justify-center pt-4">
        {item?.ingenuityimage1 && (
          <Image
            src={item.ingenuityimage1}
            alt={item.title}
            width={1600}
            height={900}
            className="rounded mx-auto mb-3"
          />
        )}
      </div>

      <h2 className="text-3xl font-bold pt-10 pb-4 border-b border-gray-300">
        {item?.ingenuitytitle2}
      </h2>
      <p className="pt-4 whitespace-pre-line">{item?.ingenuityarticle2}</p>
      <div className="w-full flex justify-center pt-4">
        {item?.ingenuityimage2 && (
          <Image
            src={item.ingenuityimage2}
            alt={item.title}
            width={1600}
            height={900}
            className="rounded mx-auto mb-3"
          />
        )}
      </div>
      {item?.ingenuitytitle3 && (
        <>
          <h2 className="text-3xl font-bold pt-10 pb-4 border-b border-gray-300">
            {item?.ingenuitytitle3}
          </h2>
          <p className="pt-4 whitespace-pre-line">{item?.ingenuityarticle3}</p>
          <div className="w-full flex justify-center pt-4">
            {item?.ingenuityimage3 && (
              <Image
                src={item.ingenuityimage3}
                alt={item.title}
                width={1600}
                height={900}
                className="rounded mx-auto mb-3"
              />
            )}
          </div>
        </>
      )}
      <h2 className="text-3xl font-bold pt-10 pb-4 border-b border-gray-300">
        Next Step
      </h2>
      <p className="pt-4 whitespace-pre-line">{item?.nextstep}</p>

      <p className="pt-5">
        <a
          href={item?.sitelink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black underline"
        >
          {item?.sitename}
        </a>
      </p>

      <p className="flex justify-center text-2xl font-bold py-20">
        他の案件も見る
      </p>

      <Footercard />
    </div>
  );
};

export default PortfolioDetail;
