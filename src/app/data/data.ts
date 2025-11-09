import { PortfolioItem } from "./type";

//ページデータ
export const portfolioData: PortfolioItem[] = [

  {
    id: "uilabstudio",
    title: "UI Lab Studio",
    image: "/UILabStudio.png",
    tags: ["Webサイト", "学習サイト", "コミュニティ", "toC"],
    url: "https://ui-lab-bay.vercel.app/",
    outline: "このアプリでは、UIの整え方などを詳しく解説しています。初心者から上級者まで、幅広いレベルのデザイナーに役立つ情報を提供しています。最新のデザイントレンドやベストプラクティスを学び、実践的なスキルを身につけることができます。",
    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/09~2025/10",
        technology:
          "TypeScript , React ,Jest ",
      }
    ],
    subtitle1: "有名なゲームには広告があるが、個人製作アプリには広告がない",
    article1: " 個人開発者が自分の作品を広く知ってもらうためのプラットフォームが不足していると感じたことが挙げられる。多くの優れたインディーゲームが存在する一方で、それらを発見し、共有する手段が限られている現状を改善したかった。",
    subtitle2: "記事",
    article2: "内容",
  },
  {
    id: "cakemate",
    title: "CakeMate",
    image: "/IndieSite.png",
    tags: ["Webアプリ", "AIアプリ", "toC"],
    url: "https://cakemate-orcin.vercel.app/",
    outline: "このアプリでは、AIを活用して、ユーザーがケーキのデザインを簡単に作成できるように支援します。ユーザーは、好みのスタイルやテーマを選択し、AIがそれに基づいて独自のケーキデザインを生成します。これにより、特別なイベントやお祝いのために、個性的で魅力的なケーキを手軽に作成できます。",
    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/09~2025/10",
        technology:
          "TypeScript , React ,Jest ",
      }
    ],
    subtitle1: "有名なゲームには広告があるが、個人製作アプリには広告がない",
    article1: " 個人開発者が自分の作品を広く知ってもらうためのプラットフォームが不足していると感じたことが挙げられる。多くの優れたインディーゲームが存在する一方で、それらを発見し、共有する手段が限られている現状を改善したかった。",
    subtitle2: "記事",
    article2: "内容",
  },
  {
    id: "indiegamesite",
    title: "Indie\nGameSite",
    image: "/IndieSite1.png",
    tags: ["Webアプリ", "toC", "コミュニティ", "ゲームシェア"],
    url: "https://indiegame-hub.web.app/",
    outline: " このアプリでは、個人製作されたゲームの一覧を確認できます。最新ゲームやランキングを閲覧し、ゲーム情報を共有することが可能です。マイナーなゲームも気軽に共有できる場を提供しています。",
    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/10~2025/11",
        technology:
          "TypeScript , React , supabase , Chakra UI , GitHub Actions , Jest",
      }
    ],
    subtitle1: "有名なゲームには広告があるが、個人製作アプリには広告がない",
    article1: " 個人開発者が自分の作品を広く知ってもらうためのプラットフォームが不足していると感じたことが挙げられる。多くの優れたインディーゲームが存在する一方で、それらを発見し、共有する手段が限られている現状を改善したかった。",
    subtitle2: "開発者とプレイヤーをつなぐ場所",
    article2: "単なるゲーム投稿サイトではなく、開発者同士やプレイヤー同士がつながり、コメントや評価を通して交流できるコミュニティを形成したいと考えた。創作活動を支え合うプラットフォームを目指している。",
    feature1: "個人開発ゲームランキング確認機能",
    featurecontent1: "個人開発されたゲームを人気順/新基準にランキング表示する機能を実装しました。",
    featureimage1: "/feature1.png",
    feature2: "コメント機能",
    featurecontent2: "ユーザー同士がゲームについて意見交換できるコメント機能を実装しました。",
    featureimage2: "/feature2.png",
    language: "TypeScript, JavaScript",
    database: "Supabase",
    frontend: "React, Next.js, Chakra UI",
    buildtool: "firebase tools",
    test: "Jest",
    cicd: "GitHub Actions",
  },
];