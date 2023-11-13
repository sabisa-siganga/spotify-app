"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrackInterface } from "@/app/interfaces/interfaces";

// Displaying a track item
const TrackItem = (props: TrackInterface) => {
  // destructuring props
  const { id, image, title, artist } = props;
  return (
    <>
      {/* rendering a track */}
      <Link href={`track/${id}`} className="track-container">
        <Image
          className="artImg"
          src={image}
          width={150}
          height={150}
          alt="artist"
        />
        <p className="titl">{title}</p>
        <p className="artist">{artist}</p>
      </Link>

      <style global jsx>
        {`
          // style for link
          a {
            text-decoration: none;
            display: block;
          }

          // style for p tags
          p {
            font-size: 16px;
            color: #000;
            font-weight: 500;
            text-align: center;
          }

          .titl {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            padding: 0 15px;
            margin-bottom: 10px;
            height: 40px;
          }

          .artist {
            margin: 0;
          }

          // style for image
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
