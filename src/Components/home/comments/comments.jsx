import { useState } from "react";
import styled from "styled-components";
import UseShowMore from "../../../hooks/useShowMore";
import { neutral, primary } from "../../../styles/global";
import darkTheme from "../../../styles/themes/dark-theme";
import Comment from "./comment";

export default function Comments({ comments }) {
  const [limit, setLimit] = useState(3);

  return (
    <$Wrapper id="comments">
      <$CommentWrapper>{generateComments(comments, limit)}</$CommentWrapper>
      {limit < comments.length && (
        <UseShowMore
          onClick={() => setLimit(Math.min(limit + 3, comments.length))}
          justifyContent="flex-start"
          title="مشاهده بیشتر"
        />
      )}
    </$Wrapper>
  );
}

// ===== Helper =====
function generateComments(comments, limit) {
  let output = [];

  for (let i = 0; i < limit; i++) {
    output.push(<Comment key={comments[i]._id} comment={comments[i]} />);
  }

  return output;
}

// ===== Styles =====
const $Wrapper = styled.section`
  padding: 3.6rem 3rem;
  background: ${primary[300_25]};

  border: 0.05rem solid ${neutral[400_30]};

  box-shadow: ${darkTheme.shadow.primaryShadow};
  border-radius: 1.5rem;
`;

const $CommentWrapper = styled.section`
  .comment:last-child .comment-divider {
    display: none;
  }
`;
