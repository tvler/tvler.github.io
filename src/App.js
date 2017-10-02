import React from 'react';
import CardProjectLink from './card/ProjectLink';
import CardBlackFridayHero from './card/BlackFridayHero';
import CardFormyCode from './card/FormyCode';
import CardLazyProgressiveEnhancementCode from './card/LazyProgressiveEnhancementCode';
import CardWithDomPropsCode from './card/WithDomPropsCode';
import CardFormy from './card/Formy';
import CardProTechToolkit from './card/ProTechToolkit';
import CardProTechToolkitHero from './card/ProTechToolkitHero';

const projects = [
   {
      name: 'Formy – iFixit',
      description: 'React + forms',
      cards: [
         <CardProjectLink {...{
            type: 'github',
            name: 'ifixit/formy',
            description: 'Create your form as an object and render it in React however you want.',
            link: 'https://github.com/iFixit/formy',
            disabled: true,
         }} />,
         <CardFormy />,
         <CardFormyCode />,
      ],
   },
   {
      name: 'withDomProps',
      description: 'DOM props → React props',
      cards: [
         <CardProjectLink {...{
            type: 'github',
            name: 'tvler/withdomprops',
            description: 'Hoist DOM node properties and pseudoclasses up to your React component.',
            link: 'https://github.com/tvler/withdomprops',
            disabled: true,
         }} />,
         <CardWithDomPropsCode />,
      ],
   },
   {
      name: 'Pro Tech Toolkit – iFixit',
      description: 'Featured product page',
      cards: [
         <CardProjectLink {...{
            type: 'ifixit',
            name: 'Pro Tech Toolkit',
            description: 'Featured product page for iFixit\'s best seller. Design and frontend.',
            link: 'https://www.ifixit.com/pro-tech-toolkit/',
         }} />,
         <CardProTechToolkit />,
         <CardProTechToolkitHero />,
      ],
   },
   {
      name: 'Black Friday – iFixit',
      description: 'Black Friday popup shop',
      cards: [
         <CardProjectLink {...{
            type: 'ifixit',
            name: 'Black Friday – iFixit',
            description: 'Black Friday 2016 popup shop. Frontend and motion.',
            link: 'http://www.tylerdeitz.com/ifixit-black-friday/',
         }} />,
         <CardBlackFridayHero />,
      ],
   },
   {
      name: 'Lazy Progressive Enhancement',
      description: 'Standards-based lazy loader',
      cards: [
         <CardProjectLink {...{
            type: 'github',
            name: 'tvler/lazy-progressive-enhancement',
            description: 'A lazy loader designed to enforce progressive enhancement and valid HTML.',
            link: 'https://github.com/tvler/lazy-progressive-enhancement/',
         }} />,
         <CardLazyProgressiveEnhancementCode />,
      ],
   },
];

export default () => (
   <div className="mw8 center flex flex-column justify-between">
      <div className="sticky-header">
         <div className="sticky-header--object flex flex-column pt5">
            <h1
               className="ph3 ma0 f4 cool-black tc fw7 tl-ns"
               children="Tyler Deitz"
            />
            <div className="mt3 f6 lh-solid ttu fw7 tc tl-ns">
               {
                  [
                     ['mailto:tylerdeitz@gmail.com', 'Email'],
                     ['/', 'Résumé'],
                     ['http://github.com/tvler', 'GitHub'],
                     ['https://www.are.na/tyler-deitz', 'Are.na'],
                  ].map(([href, children]) => (
                     <a
                        href={href}
                        children={children}
                        key={href}
                        className="cool-blue no-underline ml3 tracked"
                     />
                  ))
               }
            </div>
         </div>
      </div>

      {projects.map(project =>
         <div key={project.name} className="flex flex-column mt5">
            <span
               className="ph3 fw5 f5 cool-black tc tl-ns"
               children={project.name}
            />
            <span
               className="ph3 o-60 f6 mt2 cool-black tc tl-ns"
               children={project.description}
            />
            <div
               className="
                  nb4 pb4 ph3 flex overflow-x-auto flex-column
                  flex-row-ns items-center overflow-scrolling-touch
               "
            >
               {project.cards.map((Card, index) =>
                  <div key={index} className="flex">
                     <div className="mt4 w18">
                        <div
                           className="aspect-ratio aspect-ratio--3x4 w-100"
                           children={Card}
                        />
                     </div>
                     <div className="w1 h1 flex-ns flex-none dn" />
                  </div>
               )}
            </div>
         </div>
      )}

      <div className="mt5 mb5 ph3 flex justify-between flex-row-ns flex-column">
         <span className="lh-big f6 tl-ns tc cool-black">
            Tyler lives in Los Angeles <br/> and works on iFixit's design team.
         </span>
         <span className="mt0-ns mt3 lh-big f6 tc tr-ns cool-black">
            Thanks to <a
               href="http://weiweihuanghuang.github.io/Work-Sans/"
               className="no-underline fw7 cool-blue"
               children="Work Sans"
            />,<br/>
            <a
               href="https://github.com/facebookincubator/create-react-app"
               className="no-underline fw7 cool-blue"
               children="Create React App"
             />, <a
               href="http://tachyons.io/"
               className="no-underline fw7 cool-blue"
               children="Tachyons"/>.
         </span>
      </div>
   </div>
);
