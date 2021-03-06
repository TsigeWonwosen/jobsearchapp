import React from 'react';
import DOMPurify from 'dompurify';

import styled from 'styled-components';

export default function SingleJob({ job, Index, handleFeaturedJob }) {
  const {
    title,
    company,
    created_at,
    how_to_apply,
    location,
    type,
    company_logo,
  } = job;

  return (
    <Card onClick={() => handleFeaturedJob(Index)}>
      <CardBody>
        <JobApply>
          <Body>
            <CardTitle>{title}</CardTitle>
            <JobTitle>{company}</JobTitle>
            <CardSubTitle>
              {new Date(created_at).toLocaleDateString()}
            </CardSubTitle>
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
      </CardBody>
    </Card>
  );
}

export const Card = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #393939;
  width: 95%;
  max-width: 100%;
  min-height: 160px;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  color: #f2f2f3;
  border-radius: 5px;
  box-shadow: -1px 1px 0.5rem 1px rgba(255, 255, 255, 0.2);
  overflow-y: hidden;
  & img {
    width: 50px;
    height: 50px;
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
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
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
  max-width: 60x;
  max-height: 60px;
  border-radius: 5px;
  overflow: hidden;
`;
export const JobApply = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
export const CardBody = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  margin: 0rem auto;
  text-align: left;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 0.9rem;
  color: #378ad3;
`;

export const JobTitle = styled.span`
  text-align: left;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f2f2f3;
`;
export const CardSubTitle = styled.section`
  color: gray;
  font-size: 0.9rem;
  text-align: left;
  margin-top: 0.5rem;
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
