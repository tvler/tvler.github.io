import React from 'react';
import Checkbox from './Checkbox';
import withTouch from '../withTouch';
import ValidIcon from './ValidIcon.svg'

const density = 3;
const scale = 1.55;

const containerWidth = 3 * density;
const containerHeight = 4 * density;

const checkBoxPositions = [...Array(containerWidth * containerHeight)].map((item, i) => {
   const width = 1 / containerWidth * scale * 100;
   const height = 1 / containerHeight * scale * 100;
   const top = (Math.floor(i / containerWidth) / containerHeight * scale + (1 - scale) / 2) * 100;
   const left = ((i % containerWidth) / containerWidth * scale + (1 - scale) / 2) * 100;

   return (
      (
         top >= 100 ||
         left >= 100 ||
         left + width <= 0 ||
         top + height <= 0
      ) ? false : {
         width: `${width}%`,
         height: `${height}%`,
         top: `${top}%`,
         left: `${left}%`,
      }
   );
});

const getCheckedBox = ({ x, y }) => (
   Math.floor(
      ((x - .5) / scale + .5) *
      containerWidth
   ) +
   containerWidth * Math.floor(
      ((y - .5) / scale + .5) *
      containerHeight
   )
);

export default withTouch(({ withTouch: { pointer, playbackBottom } }) => {
   const checkedBox = getCheckedBox(pointer);

   return (
      <div
         className="aspect-ratio--object br2 ba b--light-gray overflow-hidden"
      >
         {checkBoxPositions.map((checkBoxPosition, i) => checkBoxPosition ? (
            <Checkbox
               key={i}
               style={checkBoxPosition}
               checked={pointer.z && i === checkedBox}
            />
         ) : false)}

         <div
            className="
               absolute br3 ba b--light-gray w-80 h-20 bg-white
               cool-formy-shadow flex items-center ph3
            "
            style={{
               height: 55,
               top: 40,
               left: 29,
               width: 230,
            }}
         >
            <div
               className={
                  'bg-light-silver absolute h-50' +
                  (playbackBottom ? '' : ' animate-blink')
               }
               style={{
                  width: 2,
                  opacity: playbackBottom ? 0 : 'initial',
               }}
            />

            <span
               className="
                  f3 fw5 o-70 transition-duration-1
                  transition-property--transform
               "
               style={{
                  transform: (
                     Math.ceil(playbackBottom * 5) === 5 ? 'translateX(30px)' : 'none'
                  ),
               }}
               children={'Formy'.substring(0, Math.ceil(playbackBottom * 5))}
            />

            <img
               alt="Valid Icon"
               src={ValidIcon}
               className="
                  absolute transition-property--transform transition-duration-1
               "
               style={{
                  left: 13,
                  transform: Math.ceil(playbackBottom * 5) === 5 ? 'none' : 'scale(0)',
               }}
            />
         </div>
      </div>
   );
});
