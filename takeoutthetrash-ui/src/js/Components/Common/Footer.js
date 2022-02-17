import React from "react";
import { gitHubUrl } from "../../Utilities/ResourceUtilities";

const Footer = () => {
  return (
    <div id="footer">
      <a href={gitHubUrl} id="github-link">
        github.com/jedharwood
      </a>
    </div>
  );
};

export default Footer;
