import DOMPurify from "dompurify";

import styled from "styled-components";
import { Ellipsis, X } from "lucide-react";

export default function SingleJob({ job, handleFeaturedJob, isselected }) {
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
    <JobApply
      onClick={() => handleFeaturedJob(job.id)}
      $isselected={isselected}
    >
      {company_logo && (
        <ImageContener>
          <Image
            src={company_logo}
            alt={company}
          />
        </ImageContener>
      )}
      <Body>
        <section
          className={`flex justify-between items-center ${
            isselected ? " text-yellow-300" : ""
          }`}
        >
          <CardTitle>{title}</CardTitle>
          <div className="flex justify-center items-center gap-3">
            <Ellipsis className="h-4 w-4  text-gray-300" />{" "}
            <X className="h-4 w-4  text-gray-300" />
          </div>
        </section>
        <JobTitle>{company}</JobTitle>
        <CardSubTitle>{new Date(created_at).toLocaleDateString()}</CardSubTitle>
        <BadgeContainer>
          <Badge>{location}</Badge>
          <Badge>{type}</Badge>
        </BadgeContainer>

        <div
          className="content mb-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(how_to_apply),
          }}
        ></div>
      </Body>
    </JobApply>
  );
}

export const JobApply = styled.section`
  background-color: #393939;
  width: 98%;
  min-height: 160px;
  max-height: 350px;
  max-width: 100%;
  line-height: 0.7rem !important;
  margin: 0.2rem;
  padding: 0.5rem;
  margin-right: auto;
  display: flex;
  justify-content: center;
  border-radius: 1px;
  gap: 1rem;
  background-color: ${({ $isselected }) =>
    $isselected ? "#252728" : "transparent"};
  border-left: 4px solid
    ${({ $isselected }) => ($isselected ? "#0050FF" : "transparent")};
  border-bottom: 0.5px solid rgba(55, 51, 51, 0.775);
  overflow-y: hidden;
  transition: all 0.3s ease-in-out;

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
  width: 60x;
  height: 60px;
  border-radius: 3px;
  overflow: hidden;
  background-color: gray;
`;

export const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 0.9rem;
  color: #278ad3;
`;

export const JobTitle = styled.span`
  text-align: left;
  font-size: 0.7rem;
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
  background-color: #4e5051;
  color: #e6e7eb;
  font-size: 0.8rem;
  text-align: center;
  padding: 5px 14px;
  margin-top: 1rem;
  margin-right: 1rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  border-radius: 4px;
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
