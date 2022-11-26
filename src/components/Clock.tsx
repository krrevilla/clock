// Clock.tsx
import React, {useState} from 'react';
import Svg, {Rect, Text} from 'react-native-svg';
import {Dimensions} from 'react-native';
import ClockMarkings from './ClockMarkings';
import {getTime} from '../helpers/time';
import {useInterval} from '../helpers/useInterval';
import Hand from './Hand';
import {polarToCartesian} from '../helpers/geometry';
import {center, radius} from '../helpers/constants';
const {width} = Dimensions.get('window');

const timeCartesian = polarToCartesian(center, center, radius, 90);

const Clock = () => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <React.Fragment>
      <Svg height={width} width={width}>
        <Rect
          x={timeCartesian.x - 130}
          y={timeCartesian.y - 15}
          width="80"
          height="30"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
        <Text
          x={timeCartesian.x - 90}
          y={timeCartesian.y + 5}
          fill="black"
          fontSize="16"
          strokeWidth="0"
          fontWeight="bold"
          textAnchor="middle">
          {`${time.day} ${time.monthDate}`}
        </Text>
        <ClockMarkings
          day={time.day}
          monthDate={time.monthDate}
          hour={time.hours}
        />
        <Hand
          angle={time.seconds}
          radius={radius / 1.5}
          stroke="white"
          strokeWidth="0.5"
        />
        <Hand
          angle={time.hours}
          radius={radius / 4}
          stroke="white"
          strokeWidth="3"
        />
        <Hand
          angle={time.minutes}
          radius={radius / 2}
          stroke="white"
          strokeWidth="2"
        />
      </Svg>
    </React.Fragment>
  );
};

export default Clock;
