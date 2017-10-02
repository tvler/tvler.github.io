import Svg from './Svg';
import toolFactory from '../toolFactory';
import src1x from './1x.png';
import src2x from './2x.png';

export default toolFactory({
   width: 32.39,
   relativeHeight: 683.33,
   Svg,
   name: '64 Bit Driver',
   img: {
      src1x,
      src2x,
      style: {
         width: '122.51%',
         top: '-2.23%',
         left: '-16.96%',
      },
   },
});
