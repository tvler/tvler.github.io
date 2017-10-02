import React from 'react';

const margin = 45;
const toolDelay = .2;
const toolCopyDuration = .8;
const toolCopyDelay = toolDelay + .3;
const toolImageSvgDuration = 0.8;
const toolImageRenderDuration = .7;
const toolImageRenderDelayOffset = .5;
const toolImageRenderDelay = (
   toolDelay
   + toolImageSvgDuration
   - toolImageSvgDuration
   * toolImageRenderDelayOffset
);

export default ({
   img,
   Svg,
   name,
   width,
   relativeHeight,
}) => {
   const Component = ({ active }) => (
      <div
         className="relative dib"
         style={{
            width: `${width}%`,
            margin: `40% ${margin / 2}% 120%`,
         }}
      >
         <div
            className=""
            style={{
               paddingBottom: `${relativeHeight}%`
            }}
         >
         </div>

         <img
            alt={name}
            className="
               absolute z-999 pointer-events-none
               transition-property--opacity mw-none
            "
            src={img.src1x}
            srcSet={`${img.src2x} 2x`}
            style={{ ...img.style, ...{
               transitionDelay: active ? `${toolImageRenderDelay}s` : `${toolDelay}s`,
               transitionDuration: active ? `${toolImageRenderDuration}s` : `${toolDelay}s`,
               opacity: active ? 1 : 0.001,
            } }}
         />

         <Svg
            active={active}
            style={{
               opacity: active ? 0.001 : 1,
               transitionDelay: active ? `${toolDelay + toolImageSvgDuration}s` : `${toolDelay}s`,
               transitionDuration: active ? '0s' : `${toolDelay}s`,
            }}
            svgElementStyle={{
               transitionDelay: `${toolDelay}s`,
               transitionDuration: active ? `${toolImageSvgDuration}s` : `${toolDelay}s`,
            }}
         />

         <div
            className="absolute top-100 left-0 flex justify-center w-100"
            style={{
               opacity: active ? 0.7 : 0,
               transform: active ? 'translateY(-10px)' : 'none',
               transitionProperty: 'opacity, transform',
               transitionDelay: active ? `${toolCopyDelay}s` : `0s, ${toolDelay}s`,
               transitionDuration: active ? `${toolCopyDuration}s` : `${toolDelay}s, 0s`,
            }}
         >
            <span
               className="f4 mt4 fw3 lato"
               children={name}
            />
         </div>
      </div>
   );

   Component.width = width + margin;

   return Component;
};
