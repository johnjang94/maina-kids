import Image from "next/image";
import images from "../../utils/teamImages.js";
import teamData from "./profiles.json";

interface ProfileCardProps {
  imageName: string;
  name: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageName,
  name,
  title,
}) => {
  const getImageSource = (imageName: string) => {
    switch (imageName) {
      case "Founder":
        return images.Founder;
      case "TBA":
        return images.Founder;
      case "ProjectManager":
        return images.ProjectManager;
      case "HumanResource":
        return images.HumanResource;
      case "EvaluationOfficer":
        return images.EvaluationOfficer;
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={getImageSource(imageName)}
        alt={name}
        width={150}
        className="rounded-full mb-3"
      />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <div className="items-center mt-10 gap-10 grid grid-cols-2 md:grid-cols-3 w-full md:w-4/6 text-center text-xs md:text-lg">
      {teamData.map((member, index) => (
        <ProfileCard
          key={index}
          imageName={member.imageName}
          name={member.name}
          title={member.title}
        />
      ))}
    </div>
  );
};

export default TeamPage;
