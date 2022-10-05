import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </StyledHeader>
  );
}

const StyledHeader = styled.ul`
   height: 4rem;
  font-size: 0.9rem;
  background-color: blue;
  color: white;
`;
