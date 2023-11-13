"use client";

import Image from "next/image";
import Tracks from "./components/tracks/tracks";
import spotifyLogo from "../public/spotLogo.png";

export default function IndexPage() {
  return (
    <div className="index-container">
      <div className="logo-cont">
        {/* displaying the spotify logo */}
        <Image src={spotifyLogo} width={40} height={40} alt="logo" />
        <h1>Spotify</h1>
      </div>
      <div>
        <Tracks />
      </div>

      {/* styling the page */}
      <style jsx>
        {`
          // styling the logo container
          .logo-cont {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            column-gap: 5px;
            padding-top: 10px;
          }

          // styling the title
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
