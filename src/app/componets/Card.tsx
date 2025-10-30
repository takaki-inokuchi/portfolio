import Image from "next/image";

type WorkCardProps = {
  title: string;
  image: string;
  link: string;
  skill: string[];
};

const Card = (props: WorkCardProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <a href={props.link}>
        <Image src={props.image} alt={props.title} />
      </a>
      <div>
        {props.skill.map((s, index) => (
          <span key={index}>{s}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
