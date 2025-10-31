import Card from "./components/Card";
import { works } from "./data/data";

export default function Home() {
  return (
    <div>
      <main className="flex-1">
        <p className="flex justify-center py-15">
          未経験からWeb開発を学習中。Reactを使用し開発アプリを制作しています！
        </p>
        <div className=" grid grid-cols-1 p-2 sm:grid-cols-2 place-items-center">
          {works.map((work) => (
            <Card
              key={work.title}
              title={work.title}
              image={work.image}
              link={work.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}