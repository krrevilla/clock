import React, {useMemo} from 'react';
import {G, Line, Text} from 'react-native-svg';
import {
  center,
  hourStickCount,
  minuteStickCount,
  radius,
} from '../helpers/constants';
import {polarToCartesian} from '../helpers/geometry';

const minutesArray = new Array(minuteStickCount).fill(1);
const hoursArray = new Array(hourStickCount).fill(1);

type Props = {
  hour: number;
  day: string;
  monthDate: string;
};

const minuteSticks = minutesArray.map((minute, index) => {
  const start = polarToCartesian(center, center, radius, index * 6);
  const end = polarToCartesian(center, center, radius, index * 6);

  return (
    <React.Fragment key={index}>
      <Line
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
      />
    </React.Fragment>
  );
});

const ClockMarkings = (props: Props) => {
  const hourSticks = useMemo(() => {
    return hoursArray.map((hour, index) => {
      const start = polarToCartesian(center, center, radius - 10, index * 30);
      const end = polarToCartesian(center, center, radius, index * 30);
      const time = polarToCartesian(center, center, radius - 35, index * 30);

      const currentHour = Math.floor((props.hour / 360) * 12);
      const hourIndex = currentHour === 12 ? 0 : currentHour;

      return (
        <G key={index}>
          <Line
            stroke="white"
            strokeWidth={3}
            strokeLinecap="round"
            x1={start.x}
            x2={end.x}
            y1={start.y}
            y2={end.y}
          />
          <Text
            textAnchor="middle"
            fontSize="17"
            fontWeight="bold"
            fill={hourIndex === index ? 'red' : 'white'}
            alignmentBaseline="central"
            x={time.x}
            y={time.y}>
            {index === 0 ? 12 : index}
          </Text>
        </G>
      );
    });
  }, [props.hour]);

  return (
    <G>
      {minuteSticks}
      {hourSticks}
    </G>
  );
};

export default ClockMarkings;
