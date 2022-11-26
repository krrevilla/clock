import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
export const diameter = width - 40;
export const center = width / 2;
export const radius = diameter / 2;
export const hourStickCount = 12;
export const minuteStickCount = 12 * 5;
