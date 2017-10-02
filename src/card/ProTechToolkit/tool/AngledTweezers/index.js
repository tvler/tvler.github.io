import Svg from './Svg';
import toolFactory from '../toolFactory';
import src1x from './1x.png';
import src2x from './2x.png';

export default toolFactory({
   width: 35.8,
   relativeHeight: 741.53,
   Svg,
   name: 'Angled Tweezers',
   img: {
      src1x,
      src2x,
      style: {
         width: '108.99%',
         top: '-.86%',
         left: '-5.56%',
      },
   },
});
