"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useHeartsModal } from "@/store/use-hearts-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onClick = () => {
    close()
    router.push("/loja")
  }

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/mascot_bad.svg"
              alt="mascote triste"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Você não possui mais vidas!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Tenha vidas ilimitadas com o plano premium, ou compre vidas extras para continuar aprendendo.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              className="w-full"
              size="lg"
              onClick={onClick}
              variant="primary"
            >
              Tenha vidas ilimitadas
            </Button>
            <Button
              className="w-full"
              size="lg"
              onClick={close}
              variant="primaryOutline"
            >
              Não quero no momento!
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeartsModal;
