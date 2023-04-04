import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction: row;
gap: 30px;
margin-top: 30px;
`

const Poster = styled.img`
width: 250px;
border-radius: 10px;

`
const SubTitle = styled.p`
font-size: 20px;
font-weight: 600;

` 
const Text = styled.span`
margin-left: 15px;
font-size: 16px;
font-weight: 400;
`




export { Container, SubTitle, Text, Poster };