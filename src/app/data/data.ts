import { PortfolioItem } from "./type";

//ページデータ
export const portfolioData: PortfolioItem[] = [
  {
    id: "indiegamesite",
    title: "IndieGameSite",
    image: "/IndieGameSite.png",
    tags: ["Webアプリ", "toC", "コミュニティ", "ゲームシェア"],
    url: "https://example.com/cat-site",

    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/09~2025/10",
        technology:
          "TypeScript , React , supabase , Chakra UI , GitHub Actions , Jest",
      }
    ]
  },
  {
    id: "ui lab studio",
    title: "UI Lab Studio",
    image: "/IndieGameSite.png",
    tags: ["Webアプリ", "toC", "コミュニティ", "ゲームシェア"],
    url: "https://example.com/ecommerce",
    skillData: [
      {
        language: "javascript , TypeScript",
        role: "Frontend Development , UI Design , UX Design",
        client: "個人開発",
        period: "2025/09~2025/10",
        technology:
          "TypeScript , React , supabase , Chakra UI , GitHub Actions , Jest",
      }
    ]
  },
];