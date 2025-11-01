type TagProps = {
  tags: string[];
};

const Tag = ({ tags }: TagProps) => {
  return (
    <div className="flex space-x-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;

//  <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
//         Webアプリ
//       </span>
//       <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
//         toC
//       </span>
//       <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
//         コミュニティ
//       </span>
//       <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
//         ゲームシェア
//       </span>
