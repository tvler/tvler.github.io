import React from 'react';
import withTouch from '../withTouch';
import Asws from './tool/Asws';
import Jimmy from './tool/Jimmy';
import BitDriver from './tool/BitDriver';
import AngledTweezers from './tool/AngledTweezers';
import FlexExtension from './tool/FlexExtension';
import ReverseTweezers from './tool/ReverseTweezers';
import Spudger from './tool/Spudger';
import MetalSpudger from './tool/MetalSpudger';
import BluntTweezers from './tool/BluntTweezers';
import title1x from './title1x.png';
import title2x from './title2x.png';

const tools = (
   [
      Asws,
      MetalSpudger,
      Spudger,
      BitDriver,
      Jimmy,
      FlexExtension,
      ReverseTweezers,
      AngledTweezers,
      BluntTweezers,
   ].map((Component, i, array) => ({
      Component,
      position: (
         array.slice(0, i + 1).reduce((total, { width }) => total - width, 0)
         + 50
         + array[i].width / 2
      ),
   }))
);

export default withTouch(({ withTouch: { renderPointer, playbackTop } }) => {
   const sectionZoom = .7;

   const sectionStyle = {
      transform: `scale(${
         playbackTop
         * (1 - sectionZoom) + sectionZoom
      })`,
      transformOrigin: 'center bottom',
   };

   const toolsScroll = (
      tools[Math.floor(tools.length / 2)].position
      + (.5 - renderPointer.x) * 170
   );

   const toolsWidth = 24;

   const toolsContainerStyle = {
      marginTop: '8%',
   };

   const toolsStyle = {
      width: `${toolsWidth}%`,
      transform: `translateX(${toolsScroll}%)`,
   };

   const titleWidth = 115;

   const titleStyle = {
      width: `${titleWidth}%`,
      paddingBottom: `${titleWidth * 0.374}%`
   };

   const activeIndex = tools.findIndex(({ position, Component: { width } }) => (
       toolsScroll > position - width / 2
   ));

   const toolsBackgroundStyle = {
      width: `${1 / sectionZoom * 100}%`,
      left: `${50 - 50 / sectionZoom}%`,
   };

   return (
      <div
         className="
            aspect-ratio--object br2 ba b--light-gray overflow-hidden bg-white
         "
      >
         <div
            className="flex flex-column items-center absolute bottom-0 w-100"
            style={sectionStyle}
         >
            <div
               className="relative flex justify-center"
               style={titleStyle}
            >
               <img
                  alt="Tool Section Title"
                  src={title1x}
                  srcSet={title2x}
                  className="absolute mw-none w-100 top-0"
               />
            </div>

            <div className="relative w-100" style={toolsContainerStyle}>
               <div className="nowrap relative z-1 center" style={toolsStyle}>
                  {tools.map(({ Component }, i) => (
                     <Component
                        key={i}
                        active={activeIndex === i}
                     />
                  ))}
               </div>

               <div
                  className="absolute bg-basically-white top-0 w-100 bottom-0"
                  style={toolsBackgroundStyle}
               />
            </div>
         </div>
      </div>
   );
});
