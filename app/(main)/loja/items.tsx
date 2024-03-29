"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

const POINTS_TO_REFIL = 10;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransiction] = useTransition();

  const onRefilHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFIL) return;

    startTransiction(() => {
      refillHearts().catch(() =>
        toast.error("Erro ao recarregar vidas, tente novamente mais tarde.")
      );
    });
  };

  const onUpgrade = () => {
    startTransiction(() => {
      createStripeUrl()
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }
        })
        .catch(() =>
          toast.error("Erro ao comprar vidas, tente novamente mais tarde.")
        );
    });
  };

  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/heart.svg" alt="vidas" height={60} width={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Recarregar vidas
          </p>
        </div>
        <Button
          onClick={onRefilHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFIL}
        >
          {hearts === 5 ? (
            "completo"
          ) : (
            <div className="flex items-center">
              <Image src="points.svg" alt="points" height={20} width={20} />
              <p>{POINTS_TO_REFIL}</p>
            </div>
          )}
        </Button>
      </div>

      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/unlimited.svg"
          alt="vidas ilimitado"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Vidas ilimitadas
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSubscription ? "configurações" : "comprar"}
        </Button>
      </div>
    </ul>
  );
};

export default Items;
