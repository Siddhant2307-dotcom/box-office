import React from 'react';
import IMAGE_NOT_FOUND from '../../images/Asstes - BoxOffice/not-found.png';

import { Star } from '../styled';

const ShowMaineData = ({ name, rating, summary, tags, image }) => {
  return (
    <div>
      <img src={image ? image.original : IMAGE_NOT_FOUND} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMaineData;
