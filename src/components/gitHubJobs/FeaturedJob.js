import React from 'react';
import DOMPurify from 'dompurify';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import styled from 'styled-components';

TimeAgo.addDefaultLocale(en);
export default function SingleJob({ featuredJob }) {
  if (featuredJob === 'undefined' || featuredJob === null) {
    return <h1>Loading ..</h1>;
  }
  const {
    title,
    company,
    created_at,
    how_to_apply,
    location,
    type,
    company_logo,
    description,
  } = featuredJob;
  const timeAgo = new TimeAgo('en-US');
  const timeCreated = timeAgo.format(new Date(created_at));
  // {new Date(created_at).toLocaleDateString()}
  return (
    <Card>
      <CardBody>
        <JobApply>
          <Body>
            <CardTitle>
              {title} - <JobTitle>{company}</JobTitle>
            </CardTitle>
            <CardSubTitle>{timeCreated}</CardSubTitle>
            <BadgeContainer>
              <Badge>{location}</Badge>
              <Badge>{type}</Badge>
            </BadgeContainer>

            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(how_to_apply),
              }}
            ></div>
          </Body>
          {company_logo && (
            <ImageContener>
              <img src={company_logo} alt={company} />
            </ImageContener>
          )}
        </JobApply>
        <Article
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description),
          }}
        ></Article>
      </CardBody>
    </Card>
  );
}

export const Card = styled.section`
  background-color: #393939;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  color: #f2f2f3;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  & img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    object-fit: cover;
  }
  & ul,
  ol {
    margin-bottom: 13px;
    margin-left: 26px;

    & li {
      margin: 1rem 0;
      font-size: 0.8rem;
      line-height: 1.6rem;
      font-weight: 700;
      color: #cacccb;
      list-style: inside;

      & p {
        font-size: 0.84rem;
        line-height: 1.4rem;
        font-weight: 700;
        color: #cacccb;
        margin: 0.7rem 0;
      }
    }
  }
  & ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    /* text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important; */
  }
  & p {
    font-size: 0.84rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: #cacccb;
    margin: 0.6rem 0;
  }
  & blockquote {
    font-size: 0.8rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: #cacccb;
    margin: 0.5rem 0;
  }

  & code,
  quote {
    display: block;
    position: relative;
    margin: 0;
    color: #cacccb;
    font-size: 0.8rem;
    box-sizing: border-box;
    font-weight: 500;
    border: 1px solid white;
  }
  & a {
    display: none;
    max-width: 90%;
    overflow: hidden;
  }
`;

export const ImageContener = styled.section`
  max-width: 80px;
  max-height: 80px;
  border-radius: 5px;
  overflow: hidden;
`;
export const JobApply = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Body = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
export const CardBody = styled.section`
  width: 90%;
  padding: 2rem;
  margin: 1rem auto;
  text-align: left;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 1.5rem;
`;

export const JobTitle = styled.span`
  text-align: left;
  font-size: 1rem;
  color: #f2f2f3;
`;
export const CardSubTitle = styled.section`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  margin-top: 0.2rem;
  text-align: left;
`;

export const BadgeContainer = styled.section`
  display: flex;
  margin-bottom: 1rem;
`;
export const Badge = styled.span`
  background-color: #cfd2d6;
  color: black;
  font-size: 0.8rem;
  text-align: center;
  padding: 5px 14px;
  margin-top: 1rem;
  margin-right: 1rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
export const Text = styled.p`
  color: #cfd2d6;
  font-size: 0.7px;
  text-align: left;
`;
export const Button = styled.button`
  padding: 5px 13px;
  color: #3ea3fb;
  border: 1px solid #3ea3fb;
  background-color: transparent;
  border-radius: 100px;
  text-align: left;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: #3ea3fb;
    outline: none;
    border: 1px solid #3ea3fb;
  }
`;

export const ApplyButton = styled(Button)`
  color: white;
  background-color: #3ea3fb;
  outline: none;
  border: none;
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 3rem 0.5 1rem;
  & div {
    max-width: 100%;
  }
  & li {
    margin: 1rem 0;
    font-size: 0.8rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: #cacccb;
    list-style: inside;

    & p {
      font-size: 0.84rem;
      line-height: 1.4rem;
      font-weight: 700;
      color: #cacccb;
      margin: 0.7rem 0;
    }
  }

  & ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    /* text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important; */
  }
  & p {
    font-size: 0.84rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: #cacccb;
    margin: 0.6rem 0;
  }
  & blockquote {
    font-size: 0.8rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: #cacccb;
    margin: 0.5rem 0;
  }

  & code,
  quote {
    display: block;
    position: relative;
    margin: 0;
    color: #cacccb;
    font-size: 0.8rem;
    box-sizing: border-box;
    font-weight: 500;
    border: 1px solid white;
  }
  & a {
    display: none;
    max-width: 90%;
    overflow: hidden;
  }
`;
