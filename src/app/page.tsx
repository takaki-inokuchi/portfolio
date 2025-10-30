export default function Home() {
  return (
    <div>
      <main className="flex-1 p-6 space-y-6">
        <section>
          <h2 className="text-xl font-bold">自己紹介</h2>
          <p>
            未経験からWeb開発を学習中。Next.jsとTailwindCSSでポートフォリオ作成中。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">学習・成長記録</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>2025-10-30: TailwindCSSの基本クラスを学習</li>
            <li>2025-10-29: Next.jsで動的ルーティングを実装</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold">アウトプット・プロジェクト</h2>
          <ul className="space-y-2">
            <li>練習用Todoアプリ（React + Tailwind）</li>
            <li>小さなブログサイト（Next.js + Markdown）</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
