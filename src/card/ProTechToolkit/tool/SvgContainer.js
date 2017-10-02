import React from 'react';

export default class extends React.Component {
   setRef = ref => {
      this.svgElements = ref.querySelectorAll(
         'path, rect, circle, polygon, ellipse, polyline, line'
      );

      this.svgElementsTotalLength = [];

      this.svgElements.forEach(el => {
         const totalLength = (el.getTotalLength ?
            Math.ceil(el.getTotalLength()) : 0
         );
         this.svgElementsTotalLength.push(totalLength);

         el.style.transitionProperty = 'stroke-dashoffset';
         el.style.strokeDasharray = `${totalLength}px`;
      });

      this.componentDidUpdate();
   };

   componentDidUpdate = () => {
      this.svgElements.forEach((el, i) => {
         Object.entries(this.props.svgElementStyle).forEach(([prop, value]) => {
            el.style[prop] = value;
         });

         el.style.strokeDashoffset = `${(this.props.active ?
            Math.min(300, this.svgElementsTotalLength[i]) : 0
         )}px`;
      });
   };

   shouldComponentUpdate = ({ active }) => active !== this.props.active;

   render = () => (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none"
         className="aspect-ratio--object transition-property--opacity"
         fill="#FAFAFA"
         stroke="#aeafb1"
         strokeWidth="1.5"
         ref={this.setRef}
         viewBox={this.props.viewBox}
         children={this.props.children}
         style={this.props.style}
      />
   );
};
