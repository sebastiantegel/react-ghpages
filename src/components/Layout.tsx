import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer, Header, Main, Wrapper } from "./styled/Wrappers";

export const Layout = () => {
  return (
    <Wrapper column>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Main>
        <Outlet></Outlet>
      </Main>
      <Footer>FOOTER</Footer>
    </Wrapper>
  );
};
