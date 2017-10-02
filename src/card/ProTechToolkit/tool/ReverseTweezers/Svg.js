import React from 'react';
import SvgContainer from '../SvgContainer';

export default ({ style, svgElementStyle, active }) => (
   <SvgContainer
      viewBox="0 0 26.67 406.81"
      style={style}
      svgElementStyle={svgElementStyle}
      active={active}
   >
      <path d="M13.33 405.81a11.64 11.64 0 0 0 10.18-5.12 13 13 0 0 0 2.16-7.34V155.62l-3.83-72.94a.81.81 0 0 0 0-.08l-1.16-7.43v-.05L14.14 1.74a.81.81 0 0 0-1.61 0L6 75.12v.05L4.84 82.6a.81.81 0 0 0 0 .08L1 155.62v237.73a13 13 0 0 0 2.16 7.34 11.64 11.64 0 0 0 10.17 5.12z"/>
      <path d="M25.53 153.06H13.85a2.73 2.73 0 0 0-2.73 2.73v16a2.73 2.73 0 0 0 2.73 2.73h2M6 75.14h14.67"/>
      <path d="M1 177.81h12.15a2.73 2.73 0 0 0 2.73-2.73v-22"/>
      <circle cx="13.33" cy="85.58" r="4.66"/>
      <circle cx="13.33" cy="109.88" r="4.66"/>
      <path d="M1 361.06h24.67M6.25 71.68h14.22"/>
   </SvgContainer>
);
