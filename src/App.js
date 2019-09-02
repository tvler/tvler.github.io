import React from "react";

export default () => (
  <div className="flex flex-column absolute w-100 h-100">
    <div className="flex flex-column justify-center flex-grow-1">
      <h1 className="ma0 f4 cool-black tc fw7" children="Tyler Deitz" />
      <div className="mt3 f6 lh-solid ttu fw7 tc">
        {[
          ["http://github.com/tvler", "GitHub"],
          ["https://www.are.na/tyler-deitz", "Are.na"],
          ["https://twitter.com/ty___ler", "Twitter"]
        ].map(([href, children], i) => (
          <a
            href={href}
            children={children}
            key={href}
            className={`cool-blue no-underline tracked ${i ? "ml3" : ""}`}
          />
        ))}
      </div>
    </div>

    <div className="mt4 mb4 flex flex-column">
      <span className="lh-big f6 tc cool-black">
        Tyler lives in Los Angeles <br /> and works at Opendoor.
      </span>
    </div>
  </div>
);
