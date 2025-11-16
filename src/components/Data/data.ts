// data.ts

import slider5 from "../../assets/Images/slider1.jpg";
import slider2 from "../../assets/Images/slider2.jpg";
import slider3 from "../../assets/Images/we-are-always-up-for-a-party-2023-11-27-04-56-12-utc.jpg";
import slider4 from "../../assets/Images/slider4.jpg";
import slider1 from "../../assets/Images/slider5.jpg";
// import slider7 from "../../assets/Images/slider7.jpg";
import slider7 from "../../assets/Images/vput12.jpg";

import logo1 from '../../assets/Images/logo1.png';

export interface Story {
  profileImg: string;
  profileName: string;
  title: string[];
  linkLabel: string;
  linkSrc: string;
  storyImg: string;
}

export const stories: Story[] = [
  {
    profileImg: logo1,
    profileName: "EventSphere",
    title: [
      "Celebrating campus",
      "music, dance and arts",
      "for every student",
    ],
    linkLabel: "Read More", // 8 chars
    linkSrc: "/events/cultural",
    storyImg: slider1,
  },
  {
    profileImg: logo1,
    profileName: "EventSphere",
    title: [
      "Hands-on sessions in",
      "tech and creativity",
      "learn with experts",
    ],
    linkLabel: "Discover", // 8 chars
    linkSrc: "/events/workshops",
    storyImg: slider2,
  },
  {
    profileImg: logo1,
    profileName: "EventSphere",
    title: [
      "Talks and knowledge",
      "career and guidance",
      "for bright futures",
    ],
    linkLabel: "Check It", // 8 chars
    linkSrc: "/events/seminars",
    storyImg: slider3,
  },
  {
    profileImg: logo1,
    profileName: "EventSphere",
    title: [
      "Energetic matches",
      "track and field fun",
      "team championships",
    ],
    linkLabel: "See More", // 8 chars
    linkSrc: "/events/sports",
    storyImg: slider7,
  },
  {
    profileImg: logo1,
    profileName: "EventSphere",
    title: [
      "Coding marathons",
      "solve real problems",
      "create solutions",
    ],
    linkLabel: "Explore ", // 8 chars
    linkSrc: "/events/hackathon",
    storyImg: slider5,
  },
  {
    profileImg: logo1,
    profileName: "EventSphere",
    title: [
      "Creative showcase",
      "paintings and design",
      "by student talent",
    ],
    linkLabel: "Visit It", // 8 chars
    linkSrc: "/events/art",
    storyImg: slider4,
  },
];
