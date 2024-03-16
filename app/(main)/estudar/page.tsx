import { redirect } from "next/navigation";
import { getUserProgress } from "@/db/queries";
import FeedWrapper from "@/components/shared/feed-wrapper";
import StickyWrapper from "@/components/shared/sticky-wrapper";
import Header from "./header";
import UserProgress from "@/components/shared/user-progress";

const LearnPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/cursos");
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Espanha" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Espanha", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
