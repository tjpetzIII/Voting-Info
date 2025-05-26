import ProfessionalLinks from "./ProfessionalLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDemocrat } from "@fortawesome/free-solid-svg-icons";

const PersonalInfo = () => {
  return (
    <div className="ml-8">
      <img
        src="/images/personalPicture.png"
        alt="Profile Image"
        className="w-40 h-40 pl-5"
      />
      <div className="flex items-center">
        <h2 className="text-xl">Thomas Petz</h2>
        <FontAwesomeIcon
          icon={faDemocrat}
          className="text-blue-500 text-xl pl-2"
        />
      </div>
      <ProfessionalLinks />
    </div>
  );
};

export default PersonalInfo;
