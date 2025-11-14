import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Image
        src="/"
        alt="about me"
        width={1600}
        height={900}
        className="rounded mx-auto mb-3"
      />
      <h1 className="text-4xl font-bold border-b border-gray-300 pb-2">
        about Me
      </h1>
      <p className="text-xl font-bold pt-6">井ノ口孝輝</p>
      <p className="pt-2 pt-6">takaki inokuchi</p>
      <p className="whitespace-pre-line pt-4">
        奈良県出身で、現在は東京に住んでいます。物事を粘り強く取り組むタイプで、理解するまで諦めません。
        仕事以外の時間は、友達と旅行をしたりゲームを楽しんでいます。最近はアプリ制作に夢中で、Web開発について日々学んでいます。
      </p>

      <h2 className="text-2xl font-bold pt-8 pb-2">
        挑戦を楽しむエンジニア志望
      </h2>
      <p className="pt-4">
        もともと海上自衛隊で勤務していましたが、IT開発エンジニアの仕事に強く興味を持つようになりました。仲間とアイデアを出し合いながらプロジェクトを進める過程に、大きなやりがいと達成感をあると感じています。
      </p>

      <h2 className="text-2xl font-bold pt-8 pb-2">
        今組織の中でやっていること／目指していること
      </h2>
      <p className="pt-4">
        今はテスト業務を通して、システムの動作確認や不具合報告を行っています。
        ただ作業をこなすのではなく、チームのメンバーと情報を共有しながら、みんなでより良い成果を出せるように取り組むことを意識しています。
        <br />
        <br />
        加えて、業務を進める中で効率的なテスト手法や問題解決の方法を学び、周りのメンバーと知見を共有することで、チーム全体の成長にも貢献したいと考えています。
        <br />
        <br />
        日々の業務を通して、単なる作業者ではなく、チームの成果に積極的に関わる存在になることを目指しています。
      </p>
      <h2 className="text-2xl font-bold pt-8 pb-2">
        開発エンジニア個人として目指していること
      </h2>
      <p className="pt-4">
        最終的には、自身が思い描くサービスを世に広めることが目標です。
        そのために、今は幅広く新しいスキルを習得することに挑戦し、広く深く学ぶようにしています。
        <br />
        <br />
        現在はまだ知らないことも多く、フルスタックエンジニアを目指して知識を伸ばしているところです。
        理由は、開発経験がなければ自分の思い描くアプリを作ることが難しいと考えたからです。
        <br />
        <br />
        具体的には、これまで開発エンジニアを目指して数社に転職しましたが、業務経験がないと働かせてもらえないという悔しい思いを何度もしてきました。
        その経験から、個人開発を通じて開発技術を深め、理想のエンジニアになることを目指しています。
      </p>
    </div>
  );
};

export default page;
