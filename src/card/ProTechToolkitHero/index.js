import React from 'react';
import withTouch from '../withTouch';
import mp4 from './480.mp4';
import webm from './480.webm';
import logo from './logo.svg';
import inner1_1x from './inner/1-1x.png';
import inner1_2x from './inner/1-2x.png';
import inner2_1x from './inner/2-1x.png';
import inner2_2x from './inner/2-2x.png';
import inner3_1x from './inner/3-1x.png';
import inner3_2x from './inner/3-2x.png';
import outer1_1x from './outer/1-1x.png';
import outer1_2x from './outer/1-2x.png';
import outer2_1x from './outer/2-1x.png';
import outer2_2x from './outer/2-2x.png';
import outer3_1x from './outer/3-1x.png';
import outer3_2x from './outer/3-2x.png';

export default withTouch(class extends React.PureComponent {
   setRef = ref => {
      const promise = ref.play();

      if (promise !== undefined) {
         promise.catch(() => {});
      }
   }

   render = () => {
      return (
      <div
         className="
            aspect-ratio--object br2 ba b--light-gray
            bg-white-gradient overflow-hidden
         "
      >
         <div className="absolute overflow-hidden">
            <video ref={this.setRef} className="w-100" loop muted playsInline autoPlay>
               <source src={webm} type="video/webm; codecs=vp9,vorbis"/>
               <source src={mp4} type="video/mp4"/>
             </video>
         </div>

         <div
            className="h-100"
            style={{
               transform: `translateY(${this.props.withTouch.playbackBottom * -100}%)`,
               // transform: `translateY(-100%)`,
            }}
         >
            <div
               className="absolute top-0 bg-black-80 w-100 lh-none"
               style={{
                  padding: '12px 16px',
               }}
            >
               <img
                  alt="iFixit logo"
                  src={logo}
                  width="90"
                  height="27"
               />
            </div>

            <div
               className="
                  absolute bottom-0 bg-black-80 flex justify-between
                  w-100 will-change--transform
               "
               style={{
                  padding: '18px 16px',
               }}
            >
               <span
                  className="white f5 lato"
                  children="Pro Tech Toolkit"
               />

               <div>
                  <span
                     className="white o-70 lato"
                     children="$59.95"
                     style={{
                        fontSize: 13,
                     }}
                  />

                  <span
                     className="white bg-blue br2 lato f6 bg-ifixit-blue"
                     children="Add"
                     style={{
                        padding: '8px 16px',
                        marginLeft: 12,
                     }}
                  />
               </div>
            </div>

            <div
               className="
                  absolute w-100 h-100 top-100 left-0 bg-white tc
               "
            >
               <span
                  className="lato fw8 dib"
                  children="PERSISTENT INNOVATION"
                  style={{
                     fontSize: 26,
                     marginTop: 20,
                     marginBottom: 20,
                  }}
               />

               <div
                  className="dib absolute"
                  style={{
                     width: '50%',
                     left: '-7%',
                     top: '15%',
                     opacity: 0.25,
                  }}
               >
                  <div className="relative"
                     style={{
                        paddingBottom: '160.519%',
                     }}
                  >
                     <img
                        alt="inner 1"
                        src={inner1_1x}
                        srcSet={`${inner1_2x} 2x`}
                        className="absolute"
                        style={{
                           width: '100%',
                           left: 0,
                           bottom: 0,
                        }}
                     />
                     <img
                        alt="inner 2"
                        src={inner2_1x}
                        srcSet={`${inner2_2x} 2x`}
                        className="
                           absolute transition-property--transform
                           transition-duration-3
                        "
                        style={{
                           width: '100%',
                           left: 0,
                           bottom: '29.288%',
                           transform: (this.props.withTouch.playbackBottom < 0.7 ?
                              'translateY(26%)' : 'none'
                           ),
                        }}
                     />
                     <img
                        alt="inner 3"
                        src={inner3_1x}
                        srcSet={`${inner3_2x} 2x`}
                        className="
                           absolute transition-property--transform
                           transition-duration-3
                        "
                        style={{
                           width: '87.273%',
                           left: '2.6%',
                           bottom: '56.472%',
                           transform: (this.props.withTouch.playbackBottom < 0.7 ?
                              'translateY(38.5%)' : 'none'
                           ),
                        }}
                     />
                  </div>
               </div>

               <div
                  className="dib absolute"
                  style={{
                     width: '50%',
                     left: '57%',
                     top: '18%',
                     opacity: 0.25,
                  }}
               >
                  <div className="relative"
                     style={{
                        paddingBottom: '155.846%',
                     }}
                  >
                     <img
                        alt="outer 1"
                        src={outer1_1x}
                        srcSet={`${outer1_2x} 2x`}
                        className="absolute"
                        style={{
                           width: '90.547%',
                           left: '4.726%',
                           bottom: 0,
                        }}
                     />
                     <img
                        alt="outer 2"
                        src={outer2_1x}
                        srcSet={`${outer2_2x} 2x`}
                        className="
                           absolute transition-property--transform
                           transition-duration-3
                        "
                        style={{
                           width: '100%',
                           left: 0,
                           bottom: '3.5%',
                           transitionDelay: '0.1s',
                           transform: (this.props.withTouch.playbackBottom < 0.7 ?
                              'translateY(26%)' : 'none'
                           ),
                        }}
                     />
                     <img
                        alt="outer 3"
                        src={outer3_1x}
                        srcSet={`${outer3_2x} 2x`}
                        className="
                           absolute transition-property--transform
                           transition-duration-3
                        "
                        style={{
                           width: '100%',
                           left: '0',
                           bottom: '34.3%',
                           transitionDelay: '0.1s',
                           transform: (this.props.withTouch.playbackBottom < 0.7 ?
                              'translateY(38.5%)' : 'none'
                           ),
                        }}
                     />
                  </div>
               </div>

               <span
                  className="lato dib lh-big absolute w-100 left-0"
                  children="Armed with the data from hundreds of teardowns and thousands of repair guides, our engineers built the most effective toolkit for your practical repair needs."
                  style={{
                     fontSize: 12,
                     padding: '0 14px',
                     color: '#636567',
                     boxSizing: 'border-box',
                     top: '80%',
                  }}
               />
            </div>
         </div>
      </div>
   )};
}, {
   buttonBottom: 62,
});
