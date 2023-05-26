import { ImageWrapper, Image } from "./styled/Image";
import { Wrapper } from "./styled/Wrappers";
import golf from "./../assets/golf.webp";

export const Golf = () => {
  return (
    <Wrapper column>
      <ImageWrapper width="300px">
        <pre>Image url imported in ts-file</pre>
        <Image src={golf} alt="Golf" />
      </ImageWrapper>
      <ImageWrapper width="300px">
        <pre>Image added to public folder</pre>
        <Image src="driver.jpg" alt="Driver" />
      </ImageWrapper>
    </Wrapper>
  );
};
