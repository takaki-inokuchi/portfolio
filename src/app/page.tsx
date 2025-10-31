import Card from "./componets/Card";
import { works } from "./data/data";

export default function Home() {
  return (
    <div>
      <main className="flex-1  space-y-">
        <p className="flex justify-center py-15">
          未経験からWeb開発を学習中。Reactを使用し開発アプリを制作しています！
        </p>
        <div className="flex justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-3">
          {works.map((work) => (
            <Card
              key={work.title}
              title={work.title}
              image={work.image}
              link={work.link}
              skill={work.skill}
            />
          ))}
        </div>

        {/* import Card from "../components/Card";

export default function Home() {
  const works = [
    {
      title: "Task Timer",
      image: "/images/task-timer.png",
      url: "/works/task-timer",
      skill: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Calorie Tracker",
      image: "/images/calorie-tracker.png",
      url: "/works/calorie-tracker",
      skill: ["React", "TypeScript", "Firebase"],
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {works.map((work) => (
        <Card
          key={work.title}
          title={work.title}
          image={work.image}
          url={work.url}
          skill={work.skill}
        />
      ))}
    </div>
  );
} */}
      </main>
    </div>
  );
}
