"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { portfolioData } from "../data/data";
import Link from "next/link";
import Image from "next/image";

const Footercard = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();

  const otherProjects = portfolioData.filter((item) => item.id !== currentId);
  return (
    <div>
      <p className="flex pl-4 py-3 text-2xl font-bold border-b-1 border-b-gray-300">
        case Studies
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        {otherProjects.map((item) => (
          <li key={item.id} className="p-4">
            <Link href={`/portfolio/${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={450}
                height={450}
                className="rounded mx-auto mb-3 hover:shadow-lg transition"
              />
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footercard;
