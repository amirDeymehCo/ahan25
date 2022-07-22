import styled from "styled-components";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {
  fontsTheme,
  neutral,
  primary,
  typeScale,
} from "../../../styles/global";

export default function Comment({ comment }) {
  return (
    <$Comment className="comment">
      <$Detail>
        <div>
          <$Avatar src={comment.avatar} width={51} height={51} />
          <$Username>{comment.name}</$Username>
        </div>
        <div>
          <$Date>{comment.date}</$Date>
          <$Rating
            name="read-only"
            value={comment.rate}
            precision={0.5}
            readOnly
            max={5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
      </$Detail>
      <$Message>{comment.message}</$Message>
      <$hr className="comment-divider" />
    </$Comment>
  );
}

// ====== Styles ======
const $Comment = styled.article``;

const $Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const $Message = styled.p`
  font-family: ${fontsTheme.primaryLight};
  font-weight: 300;
  font-size: ${typeScale.header3};
  line-height: 1.6em;
  margin-top: 1rem;
  margin-bottom: 4rem;
  padding-inline-start: 6.6rem;
  padding-inline-end: 2rem;

  color: ${neutral[100]};
`;

const $Avatar = styled.img`
  width: 5.1rem;
  height: 5.7rem;
  margin-inline-end: 1.5rem;

  object-fit: cover;
  object-position: center;

  border-radius: 100%;
`;

const $Username = styled.h3`
  font-family: ${fontsTheme.primaryBold};
  font-weight: 700;
  font-size: ${typeScale.header3};

  color: ${neutral[100]};
`;

const $Date = styled.time`
  margin-inline-end: 1.5rem;
  font-family: ${fontsTheme.secondaryTitle};
  font-weight: 600;
  font-size: ${typeScale.paragraph};

  color: ${neutral[100]};
`;

const $Rating = styled(Rating)`
  &&& {
    font-size: 2.5rem;
    direction: ltr;
  }
`;

const $hr = styled.div`
  height: 0.05rem;
  background-color: rgba(93, 111, 148, 0.85);
  margin-bottom: 5rem;
`;
