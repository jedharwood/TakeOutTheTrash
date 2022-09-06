import React from "react";
import { gitHubUrl } from "../../Utilities/ResourceUtilities";

const Footer = () => {
  return (
    <div className="footer">
      <a href={gitHubUrl} className="github-link">
        github.com/jedharwood
      </a>
    </div>
  );
};

export default Footer;
