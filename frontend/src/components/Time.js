import React from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(englishStrings);

const TimeContainer = styled.div`
  font-size: 2rem;
  color: #6b7485;
`;
const Time = ({date}) => (
  <TimeContainer>
    <TimeAgo date={date} formatter={formatter} />
  </TimeContainer>
);
export default Time;
