import styled from "styled-components";

interface IUlProps {
  flex?: boolean;
}

export const Ul = styled.ul<IUlProps>`
  list-style: none;
  padding: 0;
  margin: ${(props: IUlProps) => (props.flex ? "10px" : "0px")};
  display: ${(props: IUlProps) => (props.flex ? "flex" : "block")};
  gap: ${(props: IUlProps) => (props.flex ? "20px" : "0px")};
`;
