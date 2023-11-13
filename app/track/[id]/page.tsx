"use client";

import React, { useEffect, useState } from "react";
import { TOKEN } from "@/app/token";
import Image from "next/image";
import Link from "next/link";

// Defining the shape of the fetched results
interface ResultsInterface {
  album: string;
  albumImage: string;
  artists: string;
  trackName: string;
  trackNumber: number;
  releaseDate: string;
  totalTracks: number;
  duration: number;
  popularity: number;
}

// fetching details for a specific track
const fetchTrackDetails = async (id: string) => {
  try {
    // Making a fetch request to the Spotify API for track details
    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    //  Parsing the JSON response
    const results = await response.json();

    // accessing relevant track information from the API response
    const trackResults = {
      album: results.album.name,
      albumImage: results.album.images[0].url,
      artists: results.artists[0].name,
      trackName: results.name,
      trackNumber: results.track_number,
      releaseDate: results.album.release_date,
      totalTracks: results.album.total_tracks,
      duration: results.duration_ms,
      popularity: results.popularity,
    };

    // Returning the formatted track details
    return trackResults;
  } catch (err) {
    // Handling errors,
    console.error(err);
  }
};

// displaying track details
const Track = (props: any) => {
  // State to store the fetched track details
  const [results, setResults] = useState<ResultsInterface | undefined>(
    undefined
  );

  // getting the track ID from the route parameters
  const { id } = props.params as { id: string };

  // Fetching track details when the component mounts or when the ID changes
  useEffect(() => {
    async function fetchData() {
      const resultItems = await fetchTrackDetails(id);

      // Setting the fetched track details in the component state
      setResults(resultItems);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="home-btn">
        <Link href="/">Back home</Link>
      </div>
      <div className="details-container">
        {results && (
          <div>
            {/* Displaying various track details */}
            <Image
              className="album-photo"
              src={results.albumImage}
              width={400}
              height={400}
              alt="albumImg"
            ></Image>
            <p>Album: {results.album}</p>
            <p>Artists: {results.artists}</p>
            <p>Track name: {results.trackName}</p>
            <p>Track number: {results.trackNumber}</p>
            <p>Release date: {results.releaseDate}</p>
            <p>Total tracks: {results.totalTracks}</p>
            <p>Duration: {results.duration}</p>
            <p>Popularity: {results.popularity}</p>
          </div>
        )}

        {/* Displaying a loading message if results are still loading */}
        {!results && "Results loading"}

        {/* Global styling for the component */}
        <style global jsx>
          {`
            body {
              margin: 41px;
            }

            .home-btn {
              padding-bottom: 40px;
            }

            // Styling for the back home link
            a {
              text-decoration: none;
              font-size: 17px;
              font-weight: 400;
              color: aliceblue;
              border: 1px solid #000;
              background: #000;
              border-radius: 5px;
              padding: 9px 12px;
            }

            // Styling for the details container
            .details-container {
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: 1px 1px 37px 1px #ddd;
              max-width: 800px;
              margin: 0 auto;
              padding: 30px;
              border-radius: 5px;
            }

            // Styling for the album photo
            .album-photo {
              border-radius: 5px;
            }

            // Styling for paragraph elements
            p {
              ont-size: 17px;
              color: #000;
              font-weight: 400;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Track;
