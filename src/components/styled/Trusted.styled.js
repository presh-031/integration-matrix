import styled from "styled-components";

export const StyledTrusted = styled.section`
  background-color: #f1f5f9;
  padding: 2rem;
  padding-right: 5.5rem;
  margin-top: 4.8rem;
  outline: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1200px) {
    margin: 0;
    margin-top: 8rem;
    padding: 4rem 12rem;
    padding-right: 15.3rem;
  }
`;

export const TrustedBy = styled.p`
  color: #334155;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.8rem;
  display: grid;
  place-items: center;
  border-right: 0.31px solid #475569;
  padding-right: 0.8rem;
  height: 2.2rem;
  @media (min-width: 1200px) {
    font-size: 2.2rem;
    line-height: 2.8rem;
    height: 7rem;
    padding-right: 1.4rem;
    border-right-width: 1px;
  }
`;

export const LogosContainer = styled.div`
  outline: 1px solid red;
  display: grid;
  gap: 2.14rem 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10rem;
  }
`;
export const CompanyLogos = styled.img`
  width: 9.1rem;
  height: 1.795rem;
  outline: 1px solid red;
  @media (min-width: 1200px) {
    width: 12.2rem;
    height: 3rem;
  }
`;
