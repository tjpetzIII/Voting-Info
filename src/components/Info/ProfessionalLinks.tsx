import React from "react";

const ProfessionalLinks = () => {
  return (
    <nav className="flex items-center gap-2 text-xl mt-2">
      {[
        { label: "GitHub", href: "https://github.com/tjpetzIII" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/tpetz1/" },
      ].map((link, idx, arr) => (
        <React.Fragment key={link.href}>
          <a
            href={link.href}
            className="hover:text-blue-main hover:underline transition-colors duration-200"
          >
            {link.label}
          </a>
          {idx < arr.length - 1 && <span className="text-gray-400">|</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};
export default ProfessionalLinks;
