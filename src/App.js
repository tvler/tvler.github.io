import React from "react";
import laundry1 from "./laundry/1.png";
import laundry2 from "./laundry/2.png";
import laundry3 from "./laundry/3.png";
import laundry4 from "./laundry/4.png";

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

    <div className="mv4 flex flex-column items-center">
      <div className="flex flex-row">
        {[laundry1, laundry2, laundry3, laundry4].map((src, i) => {
          const widthHeight = 18;
          return (
            <img
              key={1}
              className={i ? "ml2" : ""}
              width={widthHeight}
              height={widthHeight}
              alt=""
              src={src}
            />
          );
        })}
      </div>
      <span className="lh-big f6 tc cool-black mt2">
        Tyler lives in Los Angeles
        <br />
        and works at Opendoor
      </span>
    </div>
  </div>
);
