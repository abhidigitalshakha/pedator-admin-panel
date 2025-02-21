import React from "react";
import Card from "../../components/Card";
import image from "../../assets/images/circle-user.png";
import MentorAndLearner from "../../components/charts/MentorAndLearner";
import CoursesLearnersAndMentors from "../../components/charts/CoursesLearnersAndMentors";
import EventCalender from "../../components/calender/EventCalender";

const learnersData = {
  title: "Learner",
  count: "10",
  cardImage: image,
};
const mentorsData = {
  title: "Tutors",
  count: "10",
  cardImage: image,
};
const coursesData = {
  title: "Courses",
  count: "10",
  cardImage: image,
};
const internalUsersData = {
  title: "Admin",
  count: "10",
  cardImage: image,
};

const DashboardPage = () => {
  return (
    <div className="flex flex-col px-4 gap-8">
      {/* top cards  */}
      <div className="flex flex-col md:flex-row w-full flex-wrap gap-8    ">
        <Card data={learnersData} />
        <Card data={mentorsData} />
        <Card data={coursesData} />
        <Card data={internalUsersData} />
      </div>
      {/* cards charts */}
      <div className="flex gap-4 flex-col md:flex-row ">
        <div className="md:w-1/3 w-full h-[450px] ">
          <MentorAndLearner />
        </div>
        <div className="md:w-2/3 w-full h-[450px] ">
          <CoursesLearnersAndMentors />
        </div>
      </div>
      {/* calender */}
      <div>
        <EventCalender/>
      </div>
    </div>
  );
};

export default DashboardPage;
