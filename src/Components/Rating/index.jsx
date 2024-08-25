import { Container } from "./style";
import { IoStar, IoStarOutline  } from "react-icons/io5";

export function Rating({ rating, ...rest }) {
  let content;

  switch (rating) {
    case 1:
      content = (
        <>
          <li><IoStar/></li>
          <li><IoStarOutline/></li>
          <li><IoStarOutline/></li>
          <li><IoStarOutline/></li>
          <li><IoStarOutline/></li>
        </>
      );
      break;
    case 2:
      content = (
        <>
          <li><IoStar/></li>
          <li><IoStar/></li>
          <li><IoStarOutline/></li>
          <li><IoStarOutline/></li>
          <li><IoStarOutline/></li>
        </>
      );
      break;
    case 3:
      content = (
        <>
          <li><IoStar/></li>
          <li><IoStar/></li>
          <li><IoStar/></li>
          <li><IoStarOutline/></li>
          <li><IoStarOutline/></li>
        </>
      );
      break;
    case 4: 
    content = (
      <>
        <li><IoStar/></li>
        <li><IoStar/></li>
        <li><IoStar/></li>
        <li><IoStar/></li>
        <li><IoStarOutline/></li>
      </>
    );
      break;
    case 5:
      content = (
        <>
          <li><IoStar/></li>
          <li><IoStar/></li>
          <li><IoStar/></li>
          <li><IoStar/></li>
          <li><IoStar/></li>
        </>
      );
      break;
  }

  return (
    <Container {...rest}>
      {content}
    </Container>
  );
}