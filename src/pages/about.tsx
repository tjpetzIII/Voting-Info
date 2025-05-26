import PersonalInfo from "../components/Info/PersonalInfo";

const About = () => {
  return (
    <div className="font-mono flex bg-gray-cool my-10 mx-10">
      <div className="pl-20 py-4">
        <h1 className="text-5xl">About Me</h1>
        <PersonalInfo />
      </div>
    </div>
  );
};

export default About;
