import React from 'react';
import withTouch from '../withTouch';
import herosrc00 from './img/00.png';
import herosrc01 from './img/01.png';
import herosrc02 from './img/02.png';
import herosrc03 from './img/03.png';
import herosrc04 from './img/04.png';
import herosrc05 from './img/05.png';
import herosrc06 from './img/06.png';
import herosrc07 from './img/07.png';
import herosrc08 from './img/08.png';
import herosrc09 from './img/09.png';
import herosrc10 from './img/10.png';
import herosrc11 from './img/11.png';
import herosrc12 from './img/12.png';
import herosrc13 from './img/text.png';
import bundle from './img/bundle.png';

const getTransformStyle = value => (
   `translateZ(${value - 5}px)`
);

const heroImgs = [
   {
      src: herosrc00,
      width: '41.79%',
      top: '4.02%',
      left: '-27.63%',
      transform: getTransformStyle(3),
   },
   {
      src: herosrc01,
      width: '12.74%',
      top: '31.18%',
      left: '-30.24%',
      transform: getTransformStyle(3),
   },
   {
      src: herosrc02,
      width: '41.26%',
      top: '52.73%',
      left: '-47.92%',
      transform: getTransformStyle(2),
   },
   {
      src: herosrc03,
      width: '50.51%',
      top: '33.31%',
      left: '-22.04%',
      transform: getTransformStyle(3),
   },
   {
      src: herosrc04,
      width: '29.05%',
      top: '61.61%',
      left: '0.65%',
      transform: getTransformStyle(2),
   },
   {
      src: herosrc05,
      width: '14.48%',
      top: '49.09%',
      left: '27.88%',
      transform: getTransformStyle(2),
   },
   {
      src: herosrc06,
      width: '11.96%',
      top: '4.1%',
      left: '53.88%',
      transform: getTransformStyle(4),
   },
   {
      src: herosrc07,
      width: '17.97%',
      top: '23.07%',
      left: '42.45%',
      transform: getTransformStyle(4),
   },
   {
      src: herosrc08,
      width: '58.27%',
      top: '16.08%',
      left: '42.2%',
      transform: getTransformStyle(1),
   },
   {
      src: herosrc09,
      width: '13.6%',
      top: '67.98%',
      left: '73.78%',
      transform: getTransformStyle(2),
   },
   {
      src: herosrc10,
      width: '16.23%',
      top: '17.91%',
      left: '116.71%',
      transform: getTransformStyle(2),
   },
   {
      src: herosrc11,
      width: '55.21%',
      top: '43.85%',
      left: '89.22%',
      transform: getTransformStyle(2),
   },
   {
      src: herosrc12,
      width: '46.92%',
      top: '81.56%',
      left: '68.02%',
      transform: getTransformStyle(2),
   },
   {
      src: herosrc13,
      width: '91%',
      left: '4.51%',
      top: '34.9%',
      transform: getTransformStyle(4),
   },
];

export default withTouch(({ withTouch: { playbackBottom, rect } }) => {
   return (
      <div className="aspect-ratio--object br2 bg-black overflow-hidden">
         <div
            className="h-100 w-100 absolute top-0 left-0"
            style={{
               opacity: 1 - playbackBottom,
               perspective: 288,
               perspectiveOrigin: `50% ${50 - 3000 * playbackBottom}%`
            }}
         >
            {heroImgs.map(({ src, ...style }) => (
               <img
                  key={src}
                  src={src}
                  alt="Tool"
                  className="absolute pointer-events-none"
                  style={style}
               />
            ))}
         </div>
         <div
            className="h-100 bg-black w-100 absolute left-0 top-100"
            style={{
               transform: `translateY(-${100 * playbackBottom}%)`,
            }}
         >
            <img
               className="absolute w-100 left-0"
               alt="product"
               src={bundle}
               style={{
                  top: '4.17%',
               }}
            />
         </div>
      </div>

   );
});
