import React, { useEffect, useState } from "react";
import TrackItem from "../trackItem/trackItem";
import { TrackInterface } from "@/app/interfaces/interfaces";
import { TOKEN } from "../../token";

// tracks endpoint
const URL =
  "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA";

// fetching  tracks from the Spotify API
const Tracks = () => {
  // State to store fetched track information
  const [songs, setSongs] = useState<TrackInterface[]>([]);

  // fetch tracks
  const fetchTracks = async () => {
    try {
      const response = await fetch(URL, {
        // Making a fetch request to the Spotify API with the provided token for authorization
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      // Parsing the JSON response
      const results = await response.json();

      // getting relevant track information from the API response
      const tracksInfo = results.tracks.map((track: any) => {
        return {
          id: track.id,
          image: track.album.images[0].url,
          title: track.name,
          artist: track.artists[0].name,
        };
      });

      // Updating the state with the fetched track information
      setSongs(tracksInfo);
    } catch (err) {
      // handling error
      console.error(err);
    }
  };

  // Fetching tracks when the component mounts
  useEffect(() => {
    fetchTracks();
  }, []);

  // Rendering the fetched track information
  return (
    <div className="tracks-container">
      <h2>Spotify tracks</h2>
      <div className="tracks">
        <ul>
          {songs.map((song, index) => {
            return (
              <li key={index}>
                <TrackItem
                  id={song.id}
                  image={song.image}
                  title={song.title}
                  artist={song.artist}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* tracks styles */}
      <style global jsx>{`
        // styling the tracks container
        .tracks-container {
          max-width: 1190px;
          margin: 0 auto;
        }

        // styling the tracks
        .tracks {
          max-width: 1090px;
          margin: 0 auto;
          padding: 0 15px;
        }

        // styling the title
        h2 {
          font-size: 27px;
          color: #03b745;
          font-weight: 500;
          text-align: center;
          padding-bottom: 30px;
        }

        // styling the list
        ul {
          list-style: none;
          display: flex;
          column-gap: 30px;
          row-gap: 30px;
          flex-wrap: wrap;
          padding-left: 0;
        }
        // styling the list item
        li {
          box-shadow: 1px 1px 37px 1px #ddd;
          width: 250px;
          height: 250px;
          border-radius: 5px;
          background: #b5b2b2;
        }

        // breaking points
        @media screen and (max-width: 1152px) {
          .tracks {
            padding: 0 15px;
            max-width: 810px;
          }
        }

        @media screen and (max-width: 872px) {
          .tracks {
            max-width: 530px;
          }
        }

        @media screen and (max-width: 592px) {
          ul {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Tracks;
