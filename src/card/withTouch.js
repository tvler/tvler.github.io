import React from 'react';

const initialPointer = {
   x: .5,
   y: .5,
   z: 0,
};

const getRenderPointer = ({ pointer, animateFromPointer, renderZ }) => {
   const getUpdatedDimension = dimension => (
      (
         (pointer.z - renderZ) *
         (pointer[dimension] - animateFromPointer[dimension]) /
         (animateFromPointer.z - pointer.z) || 0
      ) + pointer[dimension]
   );

   return {
      x: getUpdatedDimension('x'),
      y: getUpdatedDimension('y'),
      z: renderZ,
   };
};

const getEventFromMouseOrTouch = cb => ev => {
   ev.preventDefault();
   const {
      clientX,
      clientY,
   } = ev.touches && ev.touches[0] ? ev.touches[0] : ev;

   cb({ clientX, clientY, type: ev.type });
};

const getUpdatedRect = ref => () => {
   const { left, top } = ref.getBoundingClientRect();

   return {
      rect: {
         left,
         top,
         width: ref.offsetWidth,
         height: ref.offsetHeight,
      },
   };
};

const getUpdatedPointers = ev => prevState => {
   const getUpdatedDimension = dimension => {
      const slope = 0.07;
      const position = (
         (
            ev[{ x: 'clientX', y: 'clientY' }[dimension]] -
            prevState.rect[{ x: 'left', y: 'top' }[dimension]]
         ) / prevState.rect[{ x: 'width', y: 'height' }[dimension]]
      );

      return (
         position < 0 ?
            slope * position :
         position > 1 ?
            slope * (position - 1) + 1 :
         position
      );
   };

   const pointer = (ev ?
      (
         ['mouseup', 'touchend'].includes(ev.type) ? initialPointer : {
            x: getUpdatedDimension('x'),
            y: getUpdatedDimension('y'),
            z: 1,
         }
      )
      : prevState.pointer
   );

   const renderZ = Math.max(Math.min(
      Math.sign(pointer.z - prevState.renderZ) * .06 + prevState.renderZ,
   1), 0);

   return {
      pointer,
      hasDraggedPastClickDrag: Boolean(pointer.z) && (
         prevState.hasDraggedPastClickDrag ||
         1 - pointer.y > 0.15 ||
         1 - pointer.y < 0 ||
         pointer.x > 0.73 ||
         pointer.x < 0.27
      ),
      playbackBottom: (pointer.z ?
         Math.min(Math.max(1 - pointer.y, 0), 1)
         : prevState.playbackBottom
      ),
      playbackTop: (pointer.z ?
         Math.min(Math.max(pointer.y, 0), 1)
         : prevState.playbackTop
      ),
      animateFromPointer: prevState.pointer.z === pointer.z ?
         prevState.animateFromPointer : getRenderPointer(prevState),
      renderZ,
   };
};

export default (
   Component,
   options = {
      buttonBottom: 16,
   },
) => class extends React.PureComponent {
   isAnimating = false;
   ispointerDown = false;

   state = {
      pointer: initialPointer,
      animateFromPointer: initialPointer,
      renderZ: initialPointer.z,
      playbackBottom: 0,
      playbackTop: 0,
      hasDraggedPastClickDrag: false,
      rect: {
         left: 0,
         top: 0,
         width: 0,
         height: 0,
      },
   };

   animate = unlock => {
      this.isAnimating = unlock;

      if (this.isAnimating) {
         this.isAnimating = true;
         window.requestAnimationFrame(() => {
            const ev = this.currentEv;
            this.currentEv = null;

            this.setState(getUpdatedPointers(ev), () => {
               this.animate(this.state.renderZ !== 0);
            });
         });
      }
   };

   pointerDown = getEventFromMouseOrTouch(ev => {
      this.currentEv = ev;
      this.ispointerDown = true;

      if (!this.isAnimating) {
         this.setState(getUpdatedRect(this.ref), () => {
            this.animate(true);
         });
      }
   });

   pointerMove = getEventFromMouseOrTouch(ev => {
      if (this.ispointerDown) {
         this.currentEv = ev;
      }
   });

   pointerUp = getEventFromMouseOrTouch(ev => {
      if (this.ispointerDown) {
         this.currentEv = ev;
         this.ispointerDown = false;
      }
   });

   componentDidMount = () => {
      window.addEventListener('mousemove', this.pointerMove);
      window.addEventListener('mouseup', this.pointerUp);
   };

   componentWillUnmount = () => {
      window.removeEventListener('mousemove', this.pointerMove);
      window.removeEventListener('mouseup', this.pointerUpp);
   };

   setRef = ref => {
      if (ref) {
         this.ref = ref;
      }
   };

   render = () => {
      const renderPointer = getRenderPointer(this.state);
      const playbackBottom = this.state.playbackBottom * renderPointer.z;
      const playbackTop = this.state.playbackTop * renderPointer.z;

      const cardContainerStyle = {
         perspective: this.state.rect.width,
         perspectiveOrigin: `
            ${renderPointer.x * 100}%
            ${renderPointer.y * 100}%
         `,
      };

      const cardStyle = {
         transform: renderPointer.z ? `
            rotateX(${(renderPointer.y - .5) * 2}deg)
            rotateY(${(.5 - renderPointer.x) * 2}deg)
            translateZ(${renderPointer.z * 15}px)
         ` : 'none',
      };

      const clickDragStyle = {
         opacity: this.state.hasDraggedPastClickDrag ? 0 : 1,
         transform: this.state.hasDraggedPastClickDrag ? 'scale(0.8)' : 'none',
         marginBottom: options.buttonBottom,
      };

      const coolShadowStyle = {
         opacity: renderPointer.z,
      };

      return (
         <div
            className={
               `will-change-hover--transform aspect-ratio--object ${renderPointer.z ? 'z-max will-change--transform' : ''}`
            }
            style={cardContainerStyle}
         >
            <div
               className="aspect-ratio--object"
               style={cardStyle}
               ref={this.setRef}
            >
               <div
                  className="aspect-ratio--object cool-shadow"
                  style={coolShadowStyle}
               />
               <div
                  className="
                     absolute tc bottom-0 left-0 right-0 tc z-max ease-in
                     transition-duration-1 touch-action-none
                     transition-property--opacity-transform
                  "
                  style={clickDragStyle}
               >
                  <span
                     className="
                        tracked-barely ttu fw6 cool-blue bg-near-white
                        f6 br-pill ph3 touch-action-none user-select-none h18
                        items-center inline-flex
                     "
                     onMouseDown={this.pointerDown}
                     onTouchStart={this.pointerDown}
                     onTouchMove={this.pointerMove}
                     onTouchEnd={this.pointerUp}
                     onContextMenu={ev => ev.preventDefault()}
                     children="click+drag"
                  />
               </div>
               <Component
                  {...this.props}
                  withTouch={{
                     playbackBottom,
                     playbackTop,
                     renderPointer,
                     rect: this.state.rect,
                     pointer: this.state.pointer,
                  }}
               />
            </div>
         </div>
      );
   };
};
