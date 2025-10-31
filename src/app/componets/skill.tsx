import { skillprops } from "../data/data";

const skill = (props: skillprops) => {
  return (
    <div className="grid grid-cols-2 gap-x-50 gap-y-5 max-w-full mx-auto pt-4">
      <div>
        <p className="font-bold text-gray-700">使用言語</p>
        <p className="text-gray-600">{props.language}</p>
      </div>

      <div>
        <p className="font-bold text-gray-700">役割</p>
        <p className="text-gray-600">{props.role}</p>
      </div>

      <div>
        <p className="font-bold text-gray-700">クライアント</p>
        <p className="text-gray-600">{props.client}</p>
      </div>

      <div>
        <p className="font-bold text-gray-700">期間</p>
        <p className="text-gray-600">{props.period}</p>
      </div>

      <div>
        <p className="font-bold text-gray-700">使用技術</p>
        <p className="text-gray-600">{props.technology}</p>
      </div>
    </div>
  );
};

export default skill;
