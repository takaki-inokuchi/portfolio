import Image from "next/image";

type WorkCardProps = {
  title: string;
  image: string;
  link: string;
  skill: string[];
};

const Card = (props: WorkCardProps) => {
  return (
    <div className="p-3">
      <a href={props.link}>
        <Image src={props.image} alt={props.title} width={400} height={400} />
      </a>
      <h3>{props.title}</h3>
      <p className="text-sm text-gray-500">
        使用スキル：
        {props.skill.map((s, index) => (
          <span key={index}>{s}
          {index < props.skill.length - 1 && ","}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Card;
