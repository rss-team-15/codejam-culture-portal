import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const PoetAllInfoTimeLine = props => {
  const { poetBio } = props;
  return (
    <React.Fragment>
      <Timeline>
        {poetBio.map(poetBioItem => (
          <TimelineItem dateText={poetBioItem.date} key={poetBioItem.date}>
            <p>{poetBioItem.content}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
};

export default PoetAllInfoTimeLine;
