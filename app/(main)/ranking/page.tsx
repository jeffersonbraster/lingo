import Image from "next/image";
import { redirect } from "next/navigation";
import FeedWrapper from "@/components/shared/feed-wrapper";
import StickyWrapper from "@/components/shared/sticky-wrapper";
import UserProgress from "@/components/shared/user-progress";
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Promo from "@/components/shared/promo";
import Quests from "@/components/shared/quests";

const RankingPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const topTenUsersData = getTopTenUsers();

  const [userProgress, userSubscripton, topTenUsers] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    topTenUsersData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/cursos");
  }

  const isPro = !!userSubscripton?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/leaderboard.svg" alt="ranking" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Ranking
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Veja como está se saindo em relação aos outros alunos da comunidade.
          </p>
          <Separator className="mb-4 h-0.5 rounded-full" />
          {topTenUsers.map((user, index) => (
            <div
              key={user.userId}
              className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
            >
              <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
              <Avatar className="border bg-rose-50 h-12 w-12 ml-3 mr-6">
                <AvatarImage className="object-cover" src={user.userImageSrc} />
              </Avatar>
              <p className="font-bold text-neutral-800 flex-1">
                {user.userName}
              </p>
              <p className="text-muted-foreground">{user.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default RankingPage;
