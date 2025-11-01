import Link from "next/link";
import { portfolioData } from "./data/data";
import Image from "next/image";

export default function PortfolioList() {
  return (
    <div>
      <main className="flex-1">
        <p className="flex justify-center py-15">
          未経験からWeb開発を学習中。Reactを使用し開発アプリを制作しています！
        </p>
        <li className=" grid grid-cols-1 sm:grid-cols-2 place-items-center ">
          {portfolioData.map((item) => (
            <div key={item.id} className="p-4">
              <Link href={`/portfolio/${item.id}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className=" rounded mx-auto rounded-lg mb-3 hover:shadow-lg transition "
                />
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </Link>
            </div>
          ))}
        </li>
      </main>
    </div>
  );
}
