import styled from "styled-components";

interface IImageWrapperProps {
  width: string;
}

export const ImageWrapper = styled.div<IImageWrapperProps>`
  width: ${(props: IImageWrapperProps) => props.width || "100px"};
`;

export const Image = styled.img`
  width: 100%;
`;
