import DOMPurify from "dompurify";
import { timeSince } from "../../utility/timeAge";
import styled from "styled-components";

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

  const timeOfDays = timeSince(new Date(created_at));

  return (
    <Card>
      <CardBody>
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
            <ApplyButton
              href={url}
              target="_blank"
            >
              Apply
            </ApplyButton>
            <div
              className="content"
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
      </CardBody>
    </Card>
  );
}

export const Card = styled.section`
  background-color: #393939;
  width: 100%;
  height: 100%;
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
  max-width: 80px;
  max-height: 80px;
  border-radius: 5px;
  overflow: hidden;
`;
export const JobApply = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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

export const Button = styled.a`
  all: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 5px 8px;
  color: #3ea3fb;
  border: 1px solid #3ea3fb;
  background-color: transparent;
  border-radius: 100px;
  max-width: 2rem;
  text-align: left;
  outline: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: #3ea3fb99;
    outline: none;
    border: 1px solid #3ea3fb;
  }
`;

export const ApplyButton = styled(Button)`
  color: white;
  background-color: #3ea3fb;
  outline: none;
  border: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  border: 1px solid #3ea3fb;
  max-width: 5rem !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
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

    & p > quotes {
      font-size: 0.84rem;
      line-height: 1.4rem;
      font-weight: 700;
      color: #facccb;
      margin: 0.7rem 0;
    }
  }
  & p::target-text {
    font-size: 0.84rem;
    line-height: 1.4rem;
    font-weight: 700;
    color: #facccb;
    margin: 0.7rem 0;
  }

  & ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
  & p:first-child {
    font-size: 1.1rem;
    line-height: 1.7rem;
    font-weight: 500;
    color: #f4f4f4;
    margin: 0.6rem 0;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: #cacccb;
    margin: 0.6rem 0;
  }
  & p em,
  strong {
    font-size: 1.1rem;
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
    /* display: none; */
    display: inline-block !important;
    color: #cacccb;
    font-size: 0.8rem;
    max-width: 90%;
    overflow: hidden;
  }
`;
