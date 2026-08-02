import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  ActionBtn,
  Card,
  CardImg,
  CardImgWrap,
  CardOverlay,
  OverlayBtn,
  TagChip,
} from "../styles/portfolio.styled";
import { ExtIcon } from "../assets/svg/icons";

function Menu({ menuItem }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only load once
    threshold: 0.1, // 10% visible = considered "in view"
  });

  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
      role="list"
    >
      {menuItem.map((item) => {
        return (
          <Card>
            <CardImgWrap>
              <CardImg
                src={item?.image}
                alt={`${item?.title} screenshot`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <CardOverlay>
                {item?.link1 && (
                  <OverlayBtn
                    href={item?.link1}
                    target="_blank"
                    rel="noreferrer"
                    $primary
                  >
                    View live
                    {/* <ExtIcon /> */}
                  </OverlayBtn>
                )}
                {item?.link2 && (
                  <OverlayBtn
                    href={item?.link2}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    {/* <GHIcon /> */}
                  </OverlayBtn>
                )}
              </CardOverlay>
            </CardImgWrap>

            <div className="flex flex-col gap-[10px] p-[18px] flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                  {item?.title}
                </h3>
                {/* {liveUrl && <LiveBadge>Live</LiveBadge>} */}
              </div>
              <div className="flex flex-wrap gap-[5px]">
                {item?.tags?.map((t) => (
                  <TagChip key={t}>{t}</TagChip>
                ))}
              </div>
              <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3">
                {item?.description}
              </p>
              {(item?.link1 || item?.link2) && (
                <div className="flex gap-2 mt-1">
                  {item?.link1 && (
                    <ActionBtn
                      href={item?.link1}
                      target="_blank"
                      rel="noreferrer"
                      $primary
                    >
                      Live site
                      <ExtIcon />
                    </ActionBtn>
                  )}
                  {/* {item?.link2 && (
                    <ActionBtn
                      href={item?.link2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View code <GHIcon />
                    </ActionBtn>
                  )} */}
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 8px;
      }
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .portfolio-image {
        // &::before{
        //     content: "";
        //     position: absolute;
        //     left: 2%;
        //     top: 4%;
        //     height: 0;
        //     width: 0;
        //     transition: all .4s ease-in-out;
        // }
      }
      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }

          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 32%);
          width: calc(100% - 4%);
          background-color: white;
          opacity: 0.9;
          transform-origin: left;

          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
