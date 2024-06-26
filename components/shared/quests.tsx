"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { quests } from "@/constants";
import Image from "next/image";
import { Progress } from "../ui/progress";

type Props = {
  points: number;
};

const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Missões</h3>
        <Link href="missoes">
          <Button size="sm" variant="primaryOutline">
            Ver todos
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              key={quest.title}
              className="flex items-center w-full pb-4 gap-x-3"
            >
              <Image src="/points.svg" alt="pontos" height={40} width={40} />

              <div className="flex flex-col gap-y-2 2-full">
                <p className="text-neutral-800 text-sm font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-3" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Quests;
