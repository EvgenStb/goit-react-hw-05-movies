import styled from "styled-components";

const CastList = styled.ul`
display: flex;
padding:0;
gap: 10px;
list-style:none;
`
const CastItem = styled.li`
width: calc((100% - 50px)/5);
border: 1px solid grey;
border-radius: 15px;
`

const CastImg = styled.img`
width:100%;
border-radius: 15px;
`
const NameActor = styled.p`
font-weight: 500;
text-align: center;

`
export { CastList, CastItem, CastImg, NameActor };