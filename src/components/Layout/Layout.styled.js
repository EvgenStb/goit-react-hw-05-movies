import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 97%;
    margin: 0 auto;
`
const Header = styled.header`
max-width:100%;
margin-top:5px;
border:1px solid grey;
border-radius: 5px;
box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.75);
`;

const Navigation = styled.nav`

`

const NavList = styled.ul`
    display: flex;
    list-style: none;

`
const NavItem = styled.li`
    margin-left: 5px;

`
const NavbarLink = styled(NavLink)`
font-size: 18px;
font-weight: 600;
font-style: normal;
text-decoration:none;
`


export { Container, Header, Navigation, NavList, NavItem, NavbarLink };