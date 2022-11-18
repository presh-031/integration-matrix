import { LeftSection, RightSection, StyledHeader } from "./styled/Header.styled";
import menu from "../assets/menu.svg";
const Header = () => {
  return (
    <StyledHeader>
      <LeftSection>StreetRates</LeftSection>
      <RightSection>
        <div></div>
        <p>Home</p>
        <p>Convert</p>
        <p>News</p>
        <p>Contact</p>
      </RightSection>
      <div>
        <img src={menu} alt="menu" />
      </div>
    </StyledHeader>
  );
};

export default Header;
