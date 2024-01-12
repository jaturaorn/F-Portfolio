import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: "2021-Present",
      title: "Broadcast Production Unit , Director Assistant",
      detail:
        "at New Nimmitmai Church, served as a live broadcast system controller and camera operator, resulting in a 50% increase in data from users via social media Controlled image and camera systems at the church, resulting in a 40% increase in data from users via social media and in-person visitors",
    },
    {
      year: "2023",
      title: "Frontend-Developer",
      detail: "at Energy Conversion and Management Co.Ltd",
    },
    {
      year: "March 2023",
      title: "Amity Hackathon March 2023",
      detail:
        "Participated in the Amity Hackathon, a generative AI hackathon with a focus on social impact. Developed an app idea that enables blind people to create art using GPT and midjourneyAI technology, promoting creativity and social engagement",
    },
    {
      year: "February-May 2023",
      title: "Junior Software Developer Program cohort 4",
      detail:
        "Training in online Bootcamp Junior Software Developer Program cohort 4 at Generation Thailand",
    },
  ];

  return (
    <div id="work" className="max-x-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Experience/Trianing
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default Work;
