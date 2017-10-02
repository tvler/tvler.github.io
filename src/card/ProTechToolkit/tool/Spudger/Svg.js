import React from 'react';
import SvgContainer from '../SvgContainer';

export default ({ style, svgElementStyle, active }) => (
   <SvgContainer
      viewBox="0 0 19.33 386.59"
      style={style}
      svgElementStyle={svgElementStyle}
      active={active}
   >
      <path d="M9.67 385.59h6.42a2.25 2.25 0 0 0 2.25-2.25V57l-.29-4-7.39-51.14a1 1 0 0 0-2 0L1.29 52.91 1 57v293.49a2.21 2.21 0 0 0 1.58 2.15c1.12.31 2.59 1.3 3.61 4.15a1.22 1.22 0 0 1-1.14 1.63h-1.8A2.25 2.25 0 0 0 1 360.67v22.67a2.25 2.25 0 0 0 2.25 2.25h6.42"/>
      <path d="M2 352.38c1.37-8.44 4.06-21.46 7.66-21.46 5.33 0 8.67 28.5 8.67 28.5M1 56.12c0-5 4.5-9.74 8.67-9.74s8.67 4.7 8.67 9.74"/>
      <path d="M9.67 55.76c-2.51 0-4.54 5.46-4.54 12.19v231.16c0 6.73 2 12.19 4.54 12.19s4.54-5.46 4.54-12.19V67.94c0-6.73-2.04-12.18-4.54-12.18z"/>
   </SvgContainer>
);
