import Image from "next/image";
import { redirect } from "next/navigation";
import FeedWrapper from "@/components/shared/feed-wrapper";
import StickyWrapper from "@/components/shared/sticky-wrapper";
import UserProgress from "@/components/shared/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Items from "./items";

const LojaPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscripton] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/cursos");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscripton?.isActive}
        />
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/shop.svg" alt="loja" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Loja
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Gaste seus pontos com itens legais
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={!!userSubscripton?.isActive}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LojaPage;
