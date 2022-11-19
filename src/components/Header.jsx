import { LeftSection, MenuContainer, RightSection, StyledHeader } from "./styled/Header.styled";
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
      <MenuContainer>
        <img src={menu} alt="menu" />
      </MenuContainer>
    </StyledHeader>
  );
};

export default Header;
