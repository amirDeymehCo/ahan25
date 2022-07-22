import { Inistagram, Mobile, Whatsapp } from "../../../Icons/Icons";
import Image from 'next/image'
import img1 from "./1.jpg";
import Link from 'next/link';

const CardSliderPerson = ({ name, phone, _id,section,image}) => {

  return (
    <Link href={`/authorities/[id]`} as={`/authorities/${_id}`}>
      <a>
      <div className="card">
        <div className="cover">
          <p>{name}</p>
          <div>
            <a href="#">
              {" "}
              <Whatsapp />
            </a>
            <a href="#">
              {" "}
              <Inistagram />
            </a>
          </div>
        </div>
        <div>
          <Image src={image === "" ?img1 : "/"+image } width={300} height={300} layout="fill"/>
        </div>
        <div className="footer-card">
          <p className="name">{section}</p>
          <p className="number">
            <span>{phone}</span>
            <Mobile />
          </p>
        </div>
      </div>
      </a>
    </Link>
  );
};

export default CardSliderPerson;
