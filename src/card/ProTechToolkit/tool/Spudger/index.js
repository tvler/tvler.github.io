import Svg from './Svg';
import toolFactory from '../toolFactory';
import src1x from './1x.png';
import src2x from './2x.png';

export default toolFactory({
   width: 14.11,
   relativeHeight: 2089.26,
   Svg,
   name: 'Spudger',
   img: {
      src1x,
      src2x,
      style: {
         width: '163.76%',
         top: '-1.32%',
         left: '-40.94%',
      },
   },
});
