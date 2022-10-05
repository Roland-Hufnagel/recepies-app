import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <li>Impressum</li>
      <li>AGB</li>
    </StyledFooter>
  );
}

const StyledFooter = styled.ul`

  height: 4rem;
  font-size: 0.9rem;
  background-color: blue;
  color: white;
`;
