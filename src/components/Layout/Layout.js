import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import {
  Container,
  Header,
  Navigation,
  NavList,
  NavItem,
  NavbarLink,
} from './Layout.styled';


const Layout = () => {
return (
  <Container>
    <Header>
      <Navigation>
        <NavList>
          <NavItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to="/movies">Movies</NavbarLink>
          </NavItem>
        </NavList>
      </Navigation>
    </Header>
    <main>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </main>
  </Container>
);
}
export default Layout