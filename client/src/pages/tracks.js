import React from 'react';
import { Layout } from '../components';
import {useQuery, gql} from '@apollo/client'
import TrackCard from '../containers/track-card'
import QueryResult from '../components/query-result';

const TRACKS_QUERY = gql`
  query GetTracks{
    tracksForHome{
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;


const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS_QUERY);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Layout grid>
        {data?.tracksForHome?.map((track) => (
          <TrackCard id={track.id} track={track} />
        ))}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
