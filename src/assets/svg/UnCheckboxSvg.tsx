import React from 'react';
import Svg, {Path, Rect, G} from 'react-native-svg';
import {SVGComponentProps} from './types';

const UnCheckboxSVG: React.FC<SVGComponentProps> = ({
  width="26",
  height="26"
}) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 26 26">
        <Rect x="0.5" y="0.5" width="25" height="25" rx="4.5" fill="#F1F1F1" stroke="#545D6E"/>  
    </Svg>
  );
};
export default UnCheckboxSVG;
