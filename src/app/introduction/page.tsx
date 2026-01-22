import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {/* <Image
        src="/"
        alt="about me"
        width={1600}
        height={900}
        className="rounded mx-auto mb-3"
      /> */}
      <h1 className="text-4xl font-bold border-b border-gray-300 pb-2 pt-8">
        about me
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
        現在はフルスタックエンジニアを目指して、少しずつ知識を広げています。
        自分が思い描くアプリを形にするためには、フロントエンドからバックエンドまで幅広い技術が必要だと感じたためです。
        <br />
        <br />
        これまで、開発エンジニアを目指して数社に転職してきましたが、実務経験がないことを理由に、思うように開発業務へ関われない悔しい経験を何度もしてきました。
        その経験から、個人開発を通じて実践的なスキルを身につけ、自分の力でアプリを作れるエンジニアになることを目標としています。
      </p>

      <h2 className="text-2xl font-bold pt-8 pb-4 ">他人から見た自分</h2>

      <p className="bg-gray-100 p-4">人当たりがよく話しかけやすい</p>

      <p className="pt-4">
        これは後輩や同僚からよく言われておりました。
        <br />
        <br />
        周りの方へ積極的に話しかけるように心がけています。
        そのため、困っている人がいればすぐに気づき、声をかけることができます。
        また、自分から話しかけることで、相手も話しやすい雰囲気を作れるように意識しています。
        <br />
        <br />
        その結果、チーム内でのコミュニケーションが円滑になり、仕事を進めやすくなると感じています。
      </p>

      {/* <h1 className="text-4xl font-bold border-b border-gray-300  pt-8 pb-2">
        History
      </h1>
      <h2 className="text-2xl font-bold pt-8">テストエンジニア（2025 - ）</h2>
      <p className="pt-4">
        現在はハードウェア製品のテスト工程を担当し、品質検証・動作評価・不具合分析を行うエンジニアとして従事しています。製品が市場に出る前の最終品質を守る立場として、再現性の高い検証手法の構築や原因切り分け、改善提案など、品質保証に不可欠な実務スキルを磨いてきました。
      </p>
      <h2 className="text-2xl font-bold pt-8">運用保守業務(2023 - 2025)</h2>
      <p className="pt-4">
        24歳の時にIT業界へ転職。システム運用の業務に携わり、ログ監視・障害調査・改善提案・問い合わせ対応などシステムが安定して動くためのサポートを行ってきました。
      </p>

      <h2 className="text-2xl font-bold pt-8">アルバイト期間(2021 - 2023)</h2>
      <p className="pt-4">
        コンビニで働いた経験を通して、誰とでも気軽に話せるコミュニケーション力や、相手に合わせて接し方を変える柔軟性が身につきました。忙しい時間帯でも落ち着いて対応することを意識し、周りと協力しながら業務を進める大切さを学びました。
      </p>
      <h2 className="text-2xl font-bold pt-8">海上自衛隊(2018 - 2021)</h2>
      <p className="pt-4">
        高校卒業後は、自分を成長させる環境に身を置きたいという思いから、海上自衛隊に入隊しました。厳しい規律の中で生活することで、責任感・規律性・忍耐力を身につけ、社会人としての基礎を築くことができました。
      </p> */}
      <div className="flex justify-center pt-8">
        <Link
          href="/"
          className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          TOPへ戻る
        </Link>
      </div>
    </div>
  );
};

export default page;
