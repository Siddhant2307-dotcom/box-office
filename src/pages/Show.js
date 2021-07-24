/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
// import { Details } from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMaineData from '../components/show/ShowMaineData';
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
  const { id } = useParams();
  const { show, isLoading, error } = useShow(id);

  // console.log('show', show);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error occured :{error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMaineData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premeired={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <div>Seasons</div>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Casts</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
