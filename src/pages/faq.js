import { useState } from 'react';
import ArrowTop from '../assets/arrow-top.svg';
import ArrowBottom from '../assets/arrow-bottom.svg';
import styled from 'styled-components';
import UseTitle from '../hooks/useTitle';
import {
  device,
  fontsTheme,
  neutral,
  primary,
  secondary,
} from '../styles/global';
import ExitImg from '../assets/exit.svg';
import Link from 'next/link';

export default function FAQ() {
  const data = [
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
    {
      question: 'تیرآهن بال پهن سنگین',
      answer:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..',
    },
  ];
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <$Wrapper>
      <$Exit>
        <Link href="/" passHref>
          <$ExitIcon />
        </Link>
      </$Exit>
      <UseTitle heading="سوالات متداول" paragraph=" " />
      <$Grid>
        <$Container>
          {data.map((item, index) => {
            return (
              <$Box key={index} clicked={clicked} index={index}>
                <$Wrap onClick={() => toggle(index)}>
                  <h4>{item.question}</h4>
                  <span>
                    {clicked === index ? (
                      <$ArrowTopIcon />
                    ) : (
                      <$ArrowBottomIcon />
                    )}
                  </span>
                </$Wrap>
                {clicked === index ? (
                  <$Dropdown>
                    <p>{item.answer}</p>
                  </$Dropdown>
                ) : null}
              </$Box>
            );
          })}
        </$Container>
        
      </$Grid>
    </$Wrapper>
  );
}

const $Wrapper = styled.div`
  padding: 0 5.6em;
`;

const $Grid = styled.div`
  width: 100%;
  position: relative;
  direction: rtl;
  border: 0.05em solid ${neutral[400_50]};
  box-sizing: border-box;
  filter: drop-shadow(${(p) => p.theme.shadow.boxShadow});
  backdrop-filter: blur(4em);
  border-radius: 1.5em;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 2.5em 4em 2.2em;
  box-sizing: border-box;
  direction: ltr;
  margin-top: 6em;
  &::-webkit-scrollbar-track {
    background: ${(p) => p.theme.primaryColorGradientLight};
    border-radius: 0.2em;
  }

  &::-webkit-scrollbar {
    width: 0.25em;
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.2em;
    background-color: ${secondary[200]};
    background-clip: content-box;
  }
`;

const $Title = styled.div`
  h4 {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 800;
    font-size: 1.8em;
    line-height: 2.5em;
    text-align: right;
    color: ${neutral[100]};
    padding-bottom: 1em;
  }
`;
const $Container = styled.div``;

const $Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  flex-direction: row-reverse;
  h4 {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 700;
    font-size: 1.4em;
    line-height: 2em;
    text-align: right;
    color: ${neutral[100]};
  }
  span {
    margin-right: 1.5rem;
  }
`;

const $Box = styled.div`
  background: ${(p) =>
    p.clicked === p.index ? `${primary[400_50]}` : `${primary[300_25]}`};
  border: 0.05em solid rgba(189, 191, 193, 0.4);
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.shadow.primaryShadow};
  border-radius: 1.5em;
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 1.8em 2.4em;
  margin-bottom: 1.7em;
  &:last-child {
    margin-bottom: 0;
  }
`;
const $Dropdown = styled.div`
  width: 100%;
  p {
    font-family: ${fontsTheme.primaryBold};
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    line-height: 167.91%;
    text-align: right;
    text-transform: uppercase;
    color: ${neutral[300]};
    padding-top: 1.9em;
  }
`;

const $ArrowTopIcon = styled(ArrowTop)`
  width: 1.5em;
  height: 1em;
`;

const $ArrowBottomIcon = styled(ArrowBottom)`
  width: 1.5em;
  height: 1em;
`;

const $Exit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 4.5em 4em 13em;
  cursor: pointer;
`;

const $ExitIcon = styled(ExitImg)`
  width: 5.4em;
  height: 5.4em;
`;
