import DOMPurify from "dompurify";
import { timeSince } from "../../utility/timeAge";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedJob({ featuredJob }) {
  if (featuredJob === "undefined" || featuredJob === null) {
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
    url,
  } = featuredJob;

  const timeOfDays = timeSince(created_at);
  return (
    <FeaturedJobCard>
      <JobApply>
        <Body>
          <CardTitle>
            {title} - <JobTitle>{company}</JobTitle>
          </CardTitle>
          <CardSubTitle>{timeOfDays}</CardSubTitle>
          <BadgeContainer>
            <Badge>{location}</Badge>
            <Badge>{type}</Badge>
          </BadgeContainer>
          <Anchor
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
            <ArrowUpRight size={"17px"} />
          </Anchor>
          <div
            className="content font-semibold mb-1"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(how_to_apply),
            }}
          ></div>
        </Body>
        {company_logo && (
          <ImageContainer>
            <img
              src={company_logo}
              alt={company}
            />
          </ImageContainer>
        )}
      </JobApply>
      <Article
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      ></Article>
    </FeaturedJobCard>
  );
}

export const FeaturedJobCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-left: 2rem;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  border-radius: 1px;
  color: #f2f2f3;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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

  & pre {
    all: none !important;
    background: #666;
    border: none;
    border-left: 5px solid #f36d33;
    color: #f4f4f4;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
    overflow: auto;
    padding: 0 1em;
  }
  & code {
    border: none !important;
    background: none;
    font-size: 0.875rem;
    line-height: 1.7;
    letter-spacing: normal;
    word-break: break-all;
    width: 100%;
    overflow: auto;
    padding: 1rem;
  }
`;

export const ImageContainer = styled.section`
  max-width: 90px;
  max-height: 90px;
  border-radius: 5px;
  background: gray;
  overflow: hidden;
`;
export const JobApply = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  gap: 1rem;
`;
export const Body = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 1.5rem;
`;

export const JobTitle = styled.span`
  text-align: left;
  font-size: 0.8rem;
  color: #f2f2f3;
  line-height: 0.2rem;
`;
export const CardSubTitle = styled.section`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
  text-align: left;
`;

export const BadgeContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
export const Badge = styled.span`
  background-color: #cfd2d6;
  color: black;
  font-size: 0.8rem;
  text-align: center;
  padding: 3px 8px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
export const Text = styled.p`
  width: 100%;
  height: auto;
  color: #cfd2d6;
  font-size: 0.9px;
  text-align: left;
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 17px;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 400;
  padding: 4px 0.3rem;
  margin: 1rem 0;
  margin-top: 2.4rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  max-width: 100px;
  background: transparent;
  border: 1px solid #007bff;
  overflow: hidden;
  gap: 0.7rem;

  &:hover {
    background: rgba(0, 123, 255, 0.1); /* Light hover effect */
  }

  &:active {
    color: #003d7a;
  }

  &:focus {
    outline: 2px solid #80bdff;
    outline-offset: 2px;
  }
`;

export const Article = styled.div`
  width: 100%;
  height: auto !important;
  padding: 1rem 0.5 1rem 2rem;
  margin: 0;
  padding: 0;
  p {
    height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    height: auto;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  ul,
  ol {
    height: auto;
  }
`;
