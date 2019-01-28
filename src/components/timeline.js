import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const TimelineMy = ({ data }) => (
    <Timeline lineColor={'#ddd'}>
    for (key in data){
        <TimelineItem
            key={data[key]}
            dateText={data[dateText]}
            style={{ color: '#e86971' }}
        >
            <p>{data[content]}</p>
        </TimelineItem>
        }
    </Timeline>
);

export default TimelineMy;