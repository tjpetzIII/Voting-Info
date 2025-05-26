import ProfessionalLinks from "../components/Info/ProfessionalLinks";

const About = () => {
  return (
    <div className="font-mono flex bg-gray-cool my-10 mx-10">
      <div className="pl-20 py-4">
        <h1 className="text-5xl">About Me</h1>
        <div className="ml-8">
          <img
            src="/images/personalPicture.png"
            alt="Profile Image"
            className="w-40 h-40 pl-5"
          />
          <h2 className="text-2xl">Thomas Petz</h2>
          <ProfessionalLinks />
        </div>
      </div>
    </div>
  );
};

export default About;
