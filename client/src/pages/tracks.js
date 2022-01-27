
import React from 'react';
import { useQuery, gql } from '@apollo/client';

/** TRACKS gql query to retreive all tracks */
export const TRACKS = gql`
query Query {
    getTeams {
      name
      stadium
    }
  }
`;



/**
 * Tracks Page is the home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data } = useQuery(TRACKS);

  return (
        <h1> { data.getGames.stadium } </h1>
  );
};

export default Tracks;
