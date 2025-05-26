import { FaGithub } from "react-icons/fa";
const ContactInfo = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="font-mono text-center">
        <h1>Email: tompetz2000@gmail.com</h1>
        <div className="flex justify-center items-center gap-4 mt-4">
          <h2 className="text-lg font-semibold text-gray-800">Found a bug?</h2>
          <a
            href="https://github.com/tjpetzIII/Voting-Info/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            <FaGithub className="text-lg" />
            Report it
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
