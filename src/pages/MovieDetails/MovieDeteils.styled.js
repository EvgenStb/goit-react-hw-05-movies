import { Link } from "react-router-dom";
import styled from "styled-components";

const BackBtn = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 12px 30px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

const LinkList = styled.ul`
display:flex;
padding:0;
gap: 15px;
list-style: none;
`

export { BackBtn, LinkList };