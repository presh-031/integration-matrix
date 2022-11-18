import { CompanyLogos, TrustedBy } from "./styled/Trusted.styled";
import airbnb from "../assets/airbnb.svg";
import binance from "../assets/binance.svg";
import shopify from "../assets/shopify.svg";
import cowrywise from "../assets/cowrywise.svg";

const Trusted = () => {
  return (
    <div>
      <TrustedBy>Trusted By:</TrustedBy>
      <CompanyLogos src={cowrywise} alt="cowrywise" />
      <CompanyLogos src={binance} alt="binance" />
      <CompanyLogos src={shopify} alt="shopify" />
      <CompanyLogos src={airbnb} alt="airbnb" />
    </div>
  );
};

export default Trusted;
