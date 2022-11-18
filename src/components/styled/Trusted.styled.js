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
`;

export const LogosContainer = styled.div`
  outline: 1px solid red;
  display: grid;
  gap: 2.14rem 2.5rem;
  grid-template-columns: repeat(2, 1fr);
`;
export const CompanyLogos = styled.img`
  width: 9.1rem;
  height: 1.795rem;
  outline: 1px solid red;
`;
