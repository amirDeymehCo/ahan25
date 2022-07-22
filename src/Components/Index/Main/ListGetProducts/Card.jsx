import { CardList } from "./ListGetProductsStyles";
import Image from 'next/image'

const Card = ({ text, imageUrl, level }) => {

  const url = `https://metalbackend.ryt-service.ir/${imageUrl}`

  console.log(url)

  return (
    <CardList>
      <Image width={80} height={80} loader={({src})=>src} src={url} />
      <p>
        <span>{level} .</span>
        {text}
      </p>
    </CardList>
  );
};

export default Card;
