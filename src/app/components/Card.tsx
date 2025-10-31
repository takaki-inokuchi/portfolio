import Image from "next/image";
import { WorkCardProps } from "../data/data";

const Card = (props: WorkCardProps) => {
  return (
    <div className="p-2 w-110 h-100">
      <a href={`${props.link}?title=${props.title}`}>
        <Image src={props.image} alt={props.title} width={400} height={400} className="object-cover w-100 h-80 rounded mx-auto"/>
      </a>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Card;
