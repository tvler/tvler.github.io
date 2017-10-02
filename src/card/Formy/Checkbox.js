import React from 'react';

export default ({ checked, style }) => (
   <div className="absolute" style={style} >
      <div className="top-5 left-5 absolute ba b--light-gray br2 w-90 h-90 bg-white overflow-hidden">
         <div
            className={
               'absolute absolute--fill cool-blue bg-currentColor transition-property--opacity'
               + (checked ? '' : ' transition-duration-2')
            }
            style={{ opacity: checked ? 1 : 0 }}
         />
      </div>
      <svg
         xmlns="http://www.w3.org/2000/svg"
         className="absolute"
         width="30"
         height="30"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         style={{
            top: 10,
            left: 9,
         }}
      >
            <polyline points="20 6 9 17 4 12" />
      </svg>
   </div>
);
