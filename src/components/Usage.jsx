import { LeftSection, RightSection, StyledUsage } from "./styled/Usage.styled";

import codes from "../assets/codes.svg";
const Usage = () => {
  return (
    <StyledUsage>
      <LeftSection>
        <p>The most extensive and direct API for global exchange rate data.</p>
        <p>
          Street Rates currency exchange API documentation is simple and intuitive to use, written clear and fast to
          implement.
        </p>
        <ul>
          <li>
            <div></div>
            <p>Fast and easy set up</p>
          </li>
          <li>
            <div></div>
            <p>Street Rates Data Swagger</p>
          </li>
          <li>
            <div></div>
            <p>Robust Github Repository</p>
          </li>
        </ul>
        <a href="#">View Documentation</a>
      </LeftSection>
      <RightSection>
        <img src={codes} alt="codes" />
      </RightSection>
    </StyledUsage>
  );
};

export default Usage;
