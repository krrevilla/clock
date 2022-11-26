// Hand.tsx
import React from 'react';
import {Line} from 'react-native-svg';
import {center} from '../helpers/constants';
import {polarToCartesian} from '../helpers/geometry';

type Props = {
  radius: number;
  angle: number;
  strokeWidth: string;
  stroke: string;
};

const Hand = (props: Props) => {
  const {radius, angle, stroke, strokeWidth} = props;
  const {x, y} = polarToCartesian(center, center, radius, angle);

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      stroke={stroke}
    />
  );
};

export default Hand;
