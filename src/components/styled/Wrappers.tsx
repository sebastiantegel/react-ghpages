import styled from "styled-components";

interface IWrapperProps {
  column?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props: IWrapperProps) =>
    props.column ? "column" : "row"};
  justify-content: center;
  align-items: center;
`;

export const Header = styled(Wrapper)`
  height: 75px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: end;
`;

export const Main = styled(Wrapper)`
  flex-grow: 1;
`;

export const Footer = styled(Wrapper)`
  height: 150px;
  background-color: black;
`;
