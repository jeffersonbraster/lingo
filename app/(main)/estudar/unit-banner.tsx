import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

const UnitBanner = ({ title, description }: Props) => {
  return (
    <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <Link href="/tarefa">
        <Button
          className="hidden xl:flex border-2 border-b-4 active:border-b-2"
          size="lg"
          variant="secondary"
        >
          <NotebookText className="mr-2" />
          Continuar
        </Button>
      </Link>
    </div>
  );
};

export default UnitBanner;
