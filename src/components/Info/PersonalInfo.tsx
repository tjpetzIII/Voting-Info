import ProfessionalLinks from "./ProfessionalLinks";

const PersonalInfo = () => {
  return (
    <div className="ml-8">
      <img
        src="/images/personalPicture.png"
        alt="Profile Image"
        className="w-40 h-40 pl-5"
      />
      <h2 className="text-2xl">Thomas Petz</h2>
      <ProfessionalLinks />
    </div>
  );
};

export default PersonalInfo;
