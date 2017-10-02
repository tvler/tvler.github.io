import React from 'react';
import githubLogo from './github-logo.svg';
import ifixitLogo from './ifixit-logo.svg';

export default ({ name, description, link, type }) => (
   <a
      href={link}
      className="
         no-underline aspect-ratio--object flex flex-column tc pa4
         justify-center bg-white bg-white-gradient br2 ba b--light-gray
      "
   >
      <div className="flex flex-column mb2">
         <img
            className="center o-80"
            src={{ github: githubLogo, ifixit: ifixitLogo }[type]}
            height="44"
            alt={{ github: 'Github logo', ifixit: 'iFixit logo' }[type]}
         />
         <span
            className="truncate fw3 f4 mt3 cool-black lh-normal"
            children={name}
         />
      </div>
      <span
         className="fw3 f6 lh-big mt4 cool-black o-80"
         children={description}
      />
   </a>
);
