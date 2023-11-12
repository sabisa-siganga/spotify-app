"use client";

import Image from "next/image";
import Tracks from "./components/tracks/tracks";
import spotifyLogo from "../public/spotLogo.png";

export default function IndexPage() {
  return (
    <div className="index-container">
      <div className="logo-cont">
        <Image src={spotifyLogo} width={40} height={40} alt="logo" />
        <h1>Spotify</h1>
      </div>
      <div>
        <Tracks />
      </div>

      <style jsx>
        {`
          .logo-cont {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            column-gap: 5px;
            padding-top: 10px;
          }
          h1 {
            font-size: 25px;
            color: #000;
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
}
