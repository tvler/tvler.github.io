import React from 'react';
import githubLogo from './github-logo.svg';
import ifixitLogo from './ifixit-logo.svg';

export default ({ name, description, link, type, disabled }) => (
   <a
      href={link}
      className={'no-underline aspect-ratio--object flex flex-column tc pa4 justify-center bg-white bg-white-gradient br2 ba b--light-gray'
      + (disabled ? ' pointer-events-none' : '')}
   >
      <div className="flex flex-column mb2">
         <div
            className="center o-80 relative"
            style={{
               width: 48,
               height: 48,
            }}
         >
            <img
               className="w-100"
               src={{ github: githubLogo, ifixit: ifixitLogo }[type]}
               alt={{ github: 'Github logo', ifixit: 'iFixit logo' }[type]}
            />
         </div>

         <span
            className="truncate fw3 f4 mt3 cool-black lh-normal"
            children={name}
         />
      </div>
      <span
         className="fw3 f6 lh-big mt4 cool-black o-80"
         children={description}
      />
      <div className="mt4">
         <div className="dib relative">
            <span
               className="cool-blue f6 fw4"
               children="View Project"
            />

            {disabled && [
               <div
                  key="strikethrough"
                  className="absolute cool-black bg-currentColor w-100 o-50"
                  style={{
                     height: 2,
                     top: 8,
                     transform: 'rotateZ(-3deg)',
                  }}
               />,
               <span
                  key="errormsg"
                  className="absolute cool-black f7 fw4 o-60 nowrap"
                  children="Not quite ready yet X("
                  style={{
                     top: '140%',
                     left: '-25%',
                  }}
               />
            ]}
         </div>
      </div>
   </a>
);
