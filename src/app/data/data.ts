import { PortfolioItem } from "./type";

//ページデータ
export const portfolioData: PortfolioItem[] = [
  {
    id: "uilabstudio",
    title: "UI Lab Studio",
    image: "/UI.png",
    tags: ["Webサイト", "学習サイト", "toC"],
    explanation:
      "UI や CSS の使い方をわかりやすく説明するWebサイトを作成しました。",
    url: "https://ui-lab-bay.vercel.app/",
    outline:
      "このアプリでは、UIの整え方やデザインのポイントをわかりやすく解説しています。\n\n初心者から上級者まで、幅広いレベルのデザイナーに役立つ情報を提供しており、最新のデザイントレンドやベストプラクティスを学びながら、実践的なスキルを身につけることができます。",
    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/10~2025/11",
        technology: "TypeScript , React ,Next.js ",
      },
    ],
    subtitle1: "UIデザインを直感的に確認できる場を作るため",
    article1:
      "Web上で UI デザインの画像やサンプルを簡単に確認できるサイトはあまりありませんでした。\n\nそこで、学んだ UI 技術やデザインを分かりやすく、きれいに整理して見せられる場としてこのサイトを作成しました。自分自身の成長を記録すると同時に、他の人が参考にできる場としても活用できることを目指しています。",
    subtitle2: "挑戦の記録で自己成長を実感するため",
    article2:
      "新しい技術やアイデアに挑戦した記録を形に残すことで、自分の成長を実感できるようにしました。\n過去の取り組みを振り返ることで、次の挑戦への自信につなげ、継続的な学びと成長を促すことを目指しています。",
    feature1: "ユーザーが直感的に操作できるデザイン",
    featurecontent1:
      "色使いやレイアウトに一貫性を持たせ、全体の統一感を重視しました。",
    featureimage1: "/gifdata/UI1.gif",
    feature2: "タイトルの色を統一して読みやすさを向上",
    featurecontent2:
      "ページ内の見出しやタイトルの色を統一することで、視覚的な一貫性を持たせ、ユーザーが情報を直感的に把握できるように配慮しています。",
    featureimage2: "/gifdata/UI2.gif",
    language: "TypeScript, JavaScript",
    frontend: "React, Next.js, TailwindCSS",
    buildtool: "vercel",
    test: "Jest",
    cicd: "GitHub Actions",
    ingenuitytitle1: "見やすさを意識したトップページデザイン",
    ingenuityarticle1:
      "トップページではカード形式で記事を一覧表示し、ユーザーが直感的に情報を把握できるようにしました。\nまた、サイドバーには最近の投稿を表示することで、興味のある記事にすぐアクセスできる工夫をしています。",
    ingenuitytitle2: "microCMSを活用した記事管理とUI設計",
    ingenuityarticle2:
      "記事ページでは microCMS を使用し、データ管理とUI設計を分離しました。\nこれにより、記事の更新がしやすく、全体のデザインを統一しながら効率的にコンテンツを整えることができます。",
    ingenuitytitle3: "コードレビューしやすい表示設計",
    ingenuityimage3: "/pageUI.png",
    ingenuityarticle3:
      "コードレビュー用の画面では、コードがブラックボックス内に収められ、必要に応じてスクロールできる仕様にしました。\nこれにより、長いコードでも視認性を保ちながらレビューできる環境を提供しています。",
    nextstep:
      "現時点でサイトの構成はほぼ完成しているが、より洗練された体験を目指して改良を続けていく予定。\n\n特にナビゲーションやアニメーションなど、ユーザーが直感的に楽しめる要素を追加しながら、デザイン・操作性の両面で進化させていきたい。",
    sitename: "https://ui-lab.app",
    sitelink: "https://ui-lab-bay.vercel.app/",
  },
  {
    id: "cakemate",
    title: "CakeMate",
    image: "/CakeMate.png",
    tags: ["Webアプリ", "AIアプリ", "toC"],
    explanation: "ユーザ―が簡単にケーキ画像を生成するアプリを作成しました。",
    url: "https://cakemate-orcin.vercel.app/",
    outline:
      "このアプリでは、AIを活用して、ユーザーがケーキのデザインを簡単に作成できるように支援します。\n\nユーザーは、好みのスタイルやテーマを選択し、AIがそれに基づいて独自のケーキデザインを生成します。これにより、特別なイベントやお祝いのために、個性的で魅力的なケーキを手軽に作成できます。",
    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/09~2025/10",
        technology: "TypeScript , React ,Jest ",
      },
    ],
    subtitle1: "ケーキ作成の具材を直感的にイメージ",
    article1:
      "ケーキを作る際、どの具材をどのように組み合わせるかを頭の中でイメージするのは意外と難しいです。\n\nこのアプリでは、ユーザーが選んだ具材をすぐに視覚的に確認できるようにすることで、完成形のイメージを具体的に捉えながらケーキを作成できるようにしました。\n\nこれにより、試行錯誤の時間を減らし、より直感的で楽しいケーキ作り体験を提供することができます。",
    subtitle2: "ケーキデザインの候補を提示して迷いを解消",
    article2:
      "ケーキを作ろうとしても、「どんなデザインにするか迷う」といった状況はよくあります。\n\nそこで、AIを使ってトッピングの候補を提示する機能を導入しました。ユーザーは提示された候補を参考にしながら自分の好みに合わせてケーキをデザインできるため、迷いを減らし、よりスムーズに創作を楽しめるようにしています。",
    feature1: "複数の選択肢から自由にケーキをカスタマイズ",
    featurecontent1:
      "ケーキ作成時に、季節やテーマを選択し好きなケーキをデザインする機能を実装しました。",
    featureimage1: "/gifdata/Cake5.gif",
    feature2: "選択肢に応じたトッピング候補の提示",
    featurecontent2:
      "ユーザーが選んだ季節やテーマ、スタイルに合わせて、適したトッピング候補を表示する機能を実装しました。",
    featureimage2: "/gifdata/Cake3.gif",
    language: "TypeScript, JavaScript",
    frontend: "React, Next.js, TailwindCSS",
    buildtool: "vercel",
    test: "Jest",
    ai: "OpenAI API",
    ingenuitytitle1: "多彩な選択肢で自由にカスタマイズ",
    ingenuityarticle1:
      "ケーキ作成時に、季節（春・夏・秋・冬）、色、世界観、イベント、オリジナルケーキなど、さまざまな選択肢を組み合わせられるよう設計しました。\n\nこれにより、ユーザーは自分のイメージに合わせて直感的にケーキをデザインでき、自由度の高い体験を楽しめます。",
    ingenuityimage1: "/gifdata/Cake1.gif",


    ingenuitytitle2: "選択肢に応じたトッピング候補の提示",
    ingenuityarticle2:
      "ユーザーが選んだテーマや季節、色に応じて、AI（OpenAI）が最適なトッピング候補を自動で提示する機能を実装しました。\nこれにより、ユーザーは自分の選択肢に合ったトッピングを迷わず選ぶことができ、創作体験がよりスムーズになります。",
    nextstep:
      "現状では、ユーザーが自由にケーキをデザインし、AI（OpenAI）がトッピング候補や完成形画像を提示する機能を提供していますが、今後はさらにユーザー体験を向上させたいと考えています。\n\n具体的には、ユーザーアカウントを作成してお気に入りや作成履歴を管理できる機能、作ったケーキのランキング表示やおすすめ候補の提示、トッピングや色のバリエーション拡張などを検討しています。\n\nまた、リアルタイムプレビューやAR表示、作ったケーキをSNSで共有できる機能を追加することで、より楽しく創作体験ができるアプリに進化させていきたいと考えています。",
    sitename: "https://cakemate.app",
    sitelink: "https://cakemate-orcin.vercel.app/",
  },
  {
    id: "indiegamesite",
    title: "Indie GameSite",
    image: "/INdIEGameSite.png",
    tags: ["Webアプリ", "toC", "コミュニティ", "ゲームシェア"],
    explanation:
      "個人製作されたゲームシェアできる、コミュニティWebアプリを作成しました。",
    url: "https://indiegame-hub.web.app/",
    outline:
      " このアプリでは、個人製作されたゲームの一覧を確認できます。最新ゲームやランキングを閲覧し、ゲーム情報を共有することが可能です。\n\nマイナーなゲームも気軽に共有できる場を提供しています。",
    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/10~2025/11",
        technology:
          "TypeScript , React , suapbase , Chakra UI , GitHub Actions , Jest",
      },
    ],
    subtitle1: "有名なゲームには広告があるが、個人製作アプリには広告がない",
    article1:
      " 個人開発者が自分の作品を広く知ってもらうためのプラットフォームが不足していると感じたことが挙げられる。\n多くの優れたインディーゲームが存在する一方で、それらを発見し、共有する手段が限られている現状を改善したかった。",
    subtitle2: "開発者とプレイヤーをつなぐ場所",
    article2:
      "単なるゲーム投稿サイトではなく、開発者同士やプレイヤー同士がつながり、コメントや評価を通して交流できるコミュニティを形成したいと考えた。創作活動を支え合うプラットフォームを目指している。",
    feature1: "個人開発ゲームランキング確認機能",
    featurecontent1:
      "個人開発されたゲームを人気順/新基準にランキング表示する機能を実装しました。",
    featureimage1: "/gifdata/Indie1.gif",
    feature2: "コメント機能",
    featurecontent2:
      "ユーザー同士がゲームについて意見交換できるコメント機能を実装しました。",
    featureimage2: "/gifdata/Indie2.gif",
    language: "TypeScript, JavaScript",
    database: "Supabase",
    frontend: "React, Chakra UI",
    buildtool: "firebase tools",
    test: "Jest",
    cicd: "GitHub Actions",
    architecture: "/architecture/Indie.svg",
    ingenuitytitle1: "安定したランキング表示の実現",
    ingenuityarticle1:
      "ランキング表示のデータ取得方法を工夫しました。新規順とランキング順のデータを最初に同時取得していたため、画面切り替え時に並び順がバラバラになる問題がありました。\n\nこれを別々のAPIから取得する設計に変更し、切り替え時も正しい順序で表示されるように改善しました。",
    ingenuityimage1: "/gifdata/Indie3.gif",
    ingenuitytitle2: "高速なデータ表示で快適なUX",
    ingenuityarticle2:
      "ゲーム情報はあらかじめ必要なデータを取得してから画面に表示する方式を採用。\n\nこれにより、ページ切り替えやランキング・新規順の切り替えでもほぼ瞬時に表示され、ユーザーがストレスなく閲覧できる体験を実現しました。",
    ingenuitytitle3: "CI/CDによるデータ自動更新とデプロイ",
    ingenuityimage3: "/pageIndie1.png",
    ingenuityarticle3:
      "CI/CD を活用してゲームデータの自動取得と自動デプロイを一日に一度行う仕組みを導入しました。\n\nこれにより、サイト内のゲーム情報は 毎日最新の状態に更新され、ユーザーは最新のランキングや新作ゲームをストレスなく閲覧できるようになっています。自動化により運用負荷も軽減され、安定したサービス提供が可能になっています。",
    error3comment: "エラー対策などは下記にまとめました。",
    error3:
      "GitHub Actions で Firebase Hosting にデプロイしたときの Failed to authenticate エラーの原因と解決方法",
    errorlink3: "https://qiita.com/takaki-inokuchi/items/d80479a82014cee804a7",
    nextstep:
      "現状では、個人開発ゲームの一覧表示やランキング、コメント機能を実装しましたが、今後はさらにユーザー体験を向上させたいと考えています。\n\n具体的には、ゲームカードのアニメーション追加や、モバイル表示の改善、ユーザー登録・お気に入り機能の導入、カテゴリー別検索などを検討しています。",
    sitename: "https://indiegame-hub.app",
    sitelink: "https://indiegame-hub.web.app/",
  },
];
