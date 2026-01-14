import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Menu({ menuItem }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only load once
    threshold: 0.1, // 10% visible = considered "in view"
  });

  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image" ref={ref}>
                <a href={item.link1} target="_blank" rel="noreferrer">
                  <LazyLoadImage
                    alt={""}
                    effect="blur"
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={item.image}
                  />

                  {/* {!loaded && (
                    <Skeleton
                      height={200}
                      style={{
                        display: "block",
                        lineHeight: "unset",
                      }}
                    />
                  )} */}
                  {/* <img
                      ref={imgRef}
                      src={item.image}
                      alt={item?.title || "Menu item"}
                      onLoad={() => {
                        setLoaded(true);
                      }}
                      style={{
                        display: loaded ? "block" : "none",
                        objectFit: "cover",
                        // Prevent progressive loading appearance
                        imageRendering: "-webkit-optimize-contrast",
                      }}
                    /> */}
                </a>
                {/* <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <Pinterest />
                    </a>
                  </li>
                </ul> */}
              </div>
              <a href={item.link1} target="_blank" rel="noreferrer">
                <h6>{item.title}</h6>
              </a>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
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
