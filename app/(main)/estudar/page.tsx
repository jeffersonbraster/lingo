import FeedWrapper from "@/components/shared/feed-wrapper";
import StickyWrapper from "@/components/shared/sticky-wrapper";
import React from "react";
import Header from "./header";
import UserProgress from "@/components/shared/user-progress";

const LearnPage = () => {
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
