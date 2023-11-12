"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrackInterface } from "@/app/interfaces/interfaces";

const TrackItem = (props: TrackInterface) => {
  const { image, title, artist } = props;
  return (
    <>
      <Link href="#" className="track-container">
        <Image
          className="artImg"
          src={image}
          width={150}
          height={150}
          alt="artist"
        />
        <p>{title}</p>
        <p>{artist}</p>
      </Link>

      <style global jsx>
        {`
          a {
            text-decoration: none;
            display: block;
          }

          p {
            font-size: 16px;
            color: #000;
            font-weight: 500;
            text-align: center;
          }

          .artImg {
            object-fit: cover;
            display: flex;
            margin: 0 auto;
            border-radius: 5px;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default TrackItem;
