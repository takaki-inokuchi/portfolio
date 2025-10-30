export default function Home() {
  return (
    <div>
      <main className="flex-1 p-6 space-y-6">
        <section>
          <h2 className="text-xl font-bold">自己紹介</h2>
          <p className="flex justify-center">
            未経験からWeb開発を学習中。Reactを使用し開発アプリを制作しています！
          </p>
        </section>

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
