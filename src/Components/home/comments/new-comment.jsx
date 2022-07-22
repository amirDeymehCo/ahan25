import styled from "styled-components";
import {
  fontsTheme,
  neutral,
  primary,
  typeScale,
} from "../../../styles/global";
import darkTheme from "../../../styles/themes/dark-theme";
import StarIcon from "@mui/icons-material/Star";
import { Rating, TextField } from "@mui/material";
import Button from "../../common/button";
import { useState } from "react";

export default function NewComment({ onSubmit }) {
  return (
    <$Form onSubmit={onSubmit}>
      <$RateRow>
        <$Label>امتیازدهی</$Label>
        <$Rating
          name="read-only"
          defaultValue={3.5}
          precision={0.5}
          max={5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </$RateRow>
      <$TextField
        variant="filled"
        fullWidth
        placeholder="اسم"
      />
      <$TextField
        variant="filled"
        fullWidth
        placeholder="ایمیل"
        dir="ltr"
        type="email"
      />
      <$Textarea
        variant="filled"
        fullWidth
        placeholder="نظر شما"
        multiline
      />
      <$Button>ثبت نظر</$Button>
    </$Form>
  );
}

// ===== Styles =====
const $Form = styled.form`
  padding: 4rem 4.3rem;
  border: 0.05rem solid ${neutral[400_30]};

  filter: drop-shadow(${darkTheme.shadow.boxShadow});
  border-radius: 1.5rem;
`;

const $RateRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.7rem;
`;

const $Label = styled.span`
  font-family: ${fontsTheme.primary};
  font-size: ${typeScale.header3};
  font-weight: 400;
  color: ${neutral[200]};

  &::after {
    content: ":";
    margin-inline: 1rem 2rem;
  }
`;

const $Rating = styled(Rating)`
  &&& {
    font-size: 2.5rem;
    direction: ltr;
  }
`;

const $TextField = styled(TextField)`
  &&& {
    margin-bottom: 3rem;

    background: ${primary[100]};
    border: 0.05rem solid rgba(189, 191, 193, 0.4);

    box-shadow: ${darkTheme.shadow.boxShadow};
    backdrop-filter: blur(1rem);

    border-radius: 1rem;

    &:focus,
    &:focus-within {
      border-color: ${neutral[300]};
    }

    input,
    textarea {
      box-sizing: border-box;
      height: 6.2rem;
      padding: 2rem;

      font-family: ${fontsTheme.primaryLight};
      font-weight: 300;
      font-size: ${typeScale.header3};
      line-height: 1.6em;

      color: ${neutral[200]};

      &::placeholder {
        text-align: right;
        opacity: 0.7;
      }
    }

    .MuiFilledInput-root {
      padding: 0;
      &::before,
      &::after {
        content: none;
      }
    }
  }
`;

const $Textarea = styled($TextField)`
  &&& {
    padding: 0;
    textarea {
      min-height: calc(1.6em * 7) !important;
    }
  }
`;

const $Button = styled(Button)`
  font-size: ${typeScale.header3};
`;
