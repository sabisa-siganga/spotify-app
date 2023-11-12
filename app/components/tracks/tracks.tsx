import React, { useState } from "react";
import TrackItem from "../trackItem/trackItem";
import { TrackInterface } from "@/app/interfaces/interfaces";

const Tracks = () => {
  const [songs, setSongs] = useState<TrackInterface[]>([
    {
      image:
        "https://images.unsplash.com/photo-1595146777429-a73623bb6c76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      title: "Only want you",
      artist: "rita Ora",
    },
  ]);
  return (
    <div className="tracks-container">
      <h2>Spotify tracks</h2>
      <div className="tracks">
        <ul>
          {songs.map((song, index) => {
            return (
              <li key={index}>
                <TrackItem
                  image={song.image}
                  title={song.title}
                  artist={song.artist}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <style global jsx>{`
        .tracks-container {
          max-width: 1190px;
          margin: 0 auto;
        }

        .tracks {
          max-width: 1090px;
          margin: 0 auto;
        }

        h2 {
          font-size: 27px;
          color: #03b745;
          font-weight: 500;
          text-align: center;
          padding-bottom: 30px;
        }

        ul {
          list-style: none;
          display: flex;
          column-gap: 30px;
          row-gap: 30px;
          flex-wrap: wrap;
          padding-left: 0;
        }
        li {
          box-shadow: 1px 1px 37px 1px #ddd;
          width: 250px;
          height: 250px;
          border-radius: 5px;
          background: #b5b2b2;
        }
      `}</style>
    </div>
  );
};

export default Tracks;
