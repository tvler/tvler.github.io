import React from 'react';

export default code => () => (
   <div className="aspect-ratio--object bg-white-gradient br2">
      <div className="absolute absolute--fill br2 bt br bb b--light-gray" />
      <div className="absolute absolute--fill br2 bl b--currentColor cool-blue bw1 o-80" />
      <div className="absolute absolute--fill flex items-center pl4">
         <img alt="code block" src={code[0]} srcSet={`${code[1]} 2x`} />
      </div>
   </div>
);
