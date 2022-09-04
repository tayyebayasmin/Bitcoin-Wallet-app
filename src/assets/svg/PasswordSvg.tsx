import React from 'react';
import Svg, {Path, Rect, G} from 'react-native-svg';
import {SVGComponentProps} from './types';

const passwordSVG: React.FC<SVGComponentProps> = ({
  color = "#545d6e",
  width="18",
  height="18"
}) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 18 18">
          <Path id="Shape" d="M9.584,13H1.369A1.31,1.31,0,0,1,0,11.762V5.571A1.31,1.31,0,0,1,1.369,4.333h.684V3.1A3.237,3.237,0,0,1,5.476,0,3.236,3.236,0,0,1,8.9,3.1V4.333h.685a1.31,1.31,0,0,1,1.369,1.238v6.191A1.31,1.31,0,0,1,9.584,13ZM5.476,7.429A1.31,1.31,0,0,0,4.107,8.667,1.31,1.31,0,0,0,5.476,9.905,1.31,1.31,0,0,0,6.845,8.667,1.31,1.31,0,0,0,5.476,7.429Zm0-6.253A2.031,2.031,0,0,0,3.354,3.1V4.333H7.6V3.1A2.03,2.03,0,0,0,5.476,1.176Z" fill={color}/>   
    </Svg>
  );
};
export default passwordSVG;
