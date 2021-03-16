import React from 'react';
import DOMPurify from 'dompurify';

import styled from 'styled-components';

export default function SingleJob({ job }) {
  const [open, setOpen] = React.useState(false);
  const {
    title,
    company,
    created_at,
    how_to_apply,
    description,
    location,
    type,
    company_logo,
  } = job;

  return (
    <Card>
      <CardBody>
        <JobApply>
          <Body>
            <CardTitle>
              {title} - <JobTitle>{company}</JobTitle>
            </CardTitle>
            <CardSubTitle>
              {new Date(created_at).toLocaleDateString()}
            </CardSubTitle>
            <BadgeContainer>
              <Badge>{type}</Badge>
              <Badge>{location}</Badge>
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
              {' '}
              <img src={company_logo} alt={company} />
            </ImageContener>
          )}
        </JobApply>

        <Button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {!open ? 'View Details' : 'Hide Details'}
        </Button>

        {open && (
          <article>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
            ></div>
          </article>
        )}
      </CardBody>
    </Card>
  );
}

export const Card = styled.section`
  background-color: #393939;
  width: 70%;
  margin: 2rem auto;
  color: #f2f2f3;
  border-radius: 20px;

  & img {
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const ImageContener = styled.section`
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px;
`;
export const JobApply = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;
export const Body = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  & p {
    text-decoration: none;
    font-size: 0.9rem;
    padding: 1rem 0.4rem;
    text-align: left;
    font-family: inherent;
    width: 100%;
  }
  & li {
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
    text-decoration: none;
    padding-left: 1rem;
    border: none;
    font-size: 1rem;
    font-family: inherent;
  }
  & ul {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem 0;
    width: 100%;
    text-align: left;
  }
`;
export const CardBody = styled.section`
  width: 90%;
  padding: 2rem;
  margin: 1rem auto;
  text-align: left;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 1rem;
`;

export const JobTitle = styled.span`
  text-align: left;
  font-size: 0.8rem;
  color: #f2f2f3;
`;
export const CardSubTitle = styled.section`
  color: gray;
  font-size: 0.9rem;
  text-align: left;
`;

export const BadgeContainer = styled.section`
  display: flex;
  margin-bottom: 2rem;
`;
export const Badge = styled.span`
  background-color: #cfd2d6;
  color: black;
  font-size: 0.8rem;
  text-align: center;
  padding: 5px 14px;
  margin-top: 1rem;
  margin-right: 1rem;

  border-radius: 100px;
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
  margin: 1rem 0;
  color: #3ea3fb;
  border: 1px solid #3ea3fb;
  background-color: transparent;
  border-radius: 100px;
  text-align: left;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: #3ea3fb;
    outline: none;
    border: none;
  }
`;
