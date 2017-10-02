"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/index.html","d336d787f0357935916862e9b25be785"],["/static/css/main.c24f1168.css","1400e58c93416356e661a51a2f64de6e"],["/static/js/main.5f2fbfb7.js","2c9494bf3c5722499ac45320624a8d3c"],["/static/media/00.fa73eb20.png","fa73eb203e79ff12322fc5f2f9bb12fc"],["/static/media/02.3a8aa69c.png","3a8aa69cc6852486aabef45cb26da598"],["/static/media/03.db172cfb.png","db172cfb79b02726375139ddf9a2d4f4"],["/static/media/04.eb84e907.png","eb84e9077362480d082a343a6c498def"],["/static/media/07.c2804ed0.png","c2804ed0ac098b11b2624d14d8bbb450"],["/static/media/08.e011b753.png","e011b753e0b517de7a096ef5c495205d"],["/static/media/1-1x.75b63daa.png","75b63daa41cb0accf63af32fad8ae178"],["/static/media/1-1x.a54657a9.png","a54657a9277a4296cdcee88194abb177"],["/static/media/1-2x.bc3d38a4.png","bc3d38a491e80599dcd3241de91937dc"],["/static/media/1-2x.f751beae.png","f751beae0d8a1a491fd765fd9fb8a038"],["/static/media/10.54e33a80.png","54e33a80eb4fa6a4cfcb4a0dbe99fea4"],["/static/media/11.14a11db9.png","14a11db9abf67661712af6e5116f099f"],["/static/media/12.476265d1.png","476265d191ab8287a8bb5d404686cef8"],["/static/media/1x.20064b98.png","20064b9868611dedce5e075f83dc8dca"],["/static/media/1x.34376e6d.png","34376e6d46093f92bab99c0f74684ea6"],["/static/media/1x.349ba4c8.png","349ba4c828eaf0f823d0ebf03f16b275"],["/static/media/1x.4ec6ec3f.png","4ec6ec3f776cdd5ebee075190f9f7c32"],["/static/media/1x.63a63a4e.png","63a63a4e22508178eacb858b006e0267"],["/static/media/1x.6cd96815.png","6cd96815781314764a938add32c334a6"],["/static/media/1x.88f92e09.png","88f92e09322d226ff746e329be450f3e"],["/static/media/1x.a62cbdc0.png","a62cbdc0a33fcb8ab948ee9de831404d"],["/static/media/1x.e3b09a94.png","e3b09a94306e4c81ec352cd20d95fc6c"],["/static/media/2-1x.9513ca1e.png","9513ca1efa769a4740845fe07afab282"],["/static/media/2-1x.9d771a90.png","9d771a905f5231d11f5876e40641d833"],["/static/media/2-2x.8abf5515.png","8abf5515e74021dc21e09e976fc5d8fa"],["/static/media/2-2x.c1513216.png","c15132167d7a7196c06a4a86eab4dd33"],["/static/media/2x.01da6a1b.png","01da6a1b5274b89bea1c729a880f98fa"],["/static/media/2x.22439ada.png","22439adaf46b3ea3691214d7d9dcf93b"],["/static/media/2x.3bec1fba.png","3bec1fbaa445fdece3baf63dc432b86e"],["/static/media/2x.6bf3df77.png","6bf3df77319a1765ef10be8824422545"],["/static/media/2x.7a9a7499.png","7a9a749912ab2a074104bec057b52f1f"],["/static/media/2x.a13a124b.png","a13a124bba6a1794c80042769a46312e"],["/static/media/2x.add78e66.png","add78e668a7168405fa915a83bab3626"],["/static/media/2x.c2d0492b.png","c2d0492bb541b6f7dede0b0f1b64d313"],["/static/media/2x.c90426e6.png","c90426e6a4d239b40f65cdc4cfe05b3c"],["/static/media/3-1x.32f38a5d.png","32f38a5dc14735d1e526a4899d0408ba"],["/static/media/3-1x.cef13d75.png","cef13d75bcda90296f0ccd6a50173422"],["/static/media/3-2x.6c4f1842.png","6c4f1842aac09aa263907e982ae8f666"],["/static/media/3-2x.d662fa4e.png","d662fa4e9e3b4bf16141bb2bffe1afa0"],["/static/media/ValidIcon.067f258e.svg","067f258e2ef5ad59d3c7d1371bcf7056"],["/static/media/bundle.06fbd923.png","06fbd923b8b6ed2cbb59995fd7ede225"],["/static/media/github-logo.02eab097.svg","02eab097a591052a9986b147222e9e5f"],["/static/media/ifixit-logo.c8f453b4.svg","c8f453b4b5a26e7d308a0690986f08d4"],["/static/media/lato-latin-100.87ffa404.woff2","87ffa40497261394c46b20a092dbfac4"],["/static/media/lato-latin-100.9f2d9639.woff","9f2d96391a58e70b63260d7b5fcb1147"],["/static/media/lato-latin-100italic.0a3a30f5.woff2","0a3a30f5b59862aa6d0eb3af3e5b82c5"],["/static/media/lato-latin-100italic.0c146ee0.woff","0c146ee07ad5fccb06b4512e2ab2b2e3"],["/static/media/lato-latin-300.82bc31aa.woff2","82bc31aa2041bcd67aaa20c614f516df"],["/static/media/lato-latin-300.ad990910.woff","ad9909109f3cbedc36b9bffa45b64726"],["/static/media/lato-latin-300italic.0a8e6f66.woff2","0a8e6f666d5b3c7e166c3d6c3ced8ccc"],["/static/media/lato-latin-300italic.424b0e5d.woff","424b0e5d0e8ac6d710fc7ed1f9ee13c0"],["/static/media/lato-latin-400.3ceb09f6.woff2","3ceb09f6ee7efcb119ccfb3864de95b4"],["/static/media/lato-latin-400.453ee82f.woff","453ee82f6c3281d0dd79762d5c3f9323"],["/static/media/lato-latin-400italic.22f9bdf3.woff","22f9bdf3114e537802aa0a747a5da039"],["/static/media/lato-latin-400italic.895d0b33.woff2","895d0b33487cf144ff0f7c3f6aeadfed"],["/static/media/lato-latin-700.b68c39cb.woff2","b68c39cb688a8efff6f1c19f55313dd2"],["/static/media/lato-latin-700.bf047072.woff","bf047072dce0b5080029c2e5dcfa1e3e"],["/static/media/lato-latin-700italic.4ad27904.woff","4ad27904381e1706ea03fcb2b649f7f0"],["/static/media/lato-latin-700italic.ecce01cb.woff2","ecce01cbce8ee492e7b734a994fd470b"],["/static/media/lato-latin-900.1cf86113.woff2","1cf8611397f653bac61692cd83819ce1"],["/static/media/lato-latin-900.26db7604.woff","26db76044f04fc97167ac032de2f9c1d"],["/static/media/lato-latin-900italic.3d7250ee.woff","3d7250ee5965f4ca5e22a24c84c80a61"],["/static/media/lato-latin-900italic.a5d2ae3a.woff2","a5d2ae3a6c1faa05ae61d8aa01a3981b"],["/static/media/logo.b0c8bc1f.svg","b0c8bc1fbd7b04eb219e0d3ea2fd9668"],["/static/media/resume-tyler-deitz.fdb98a48.pdf","fdb98a48cc310899edac20052b019b1e"],["/static/media/text.eb71a0d3.png","eb71a0d3c3e1f820a714c3fc67a48c51"],["/static/media/title1x.fe7157e2.png","fe7157e2cf952d8ce6c45581de0c75b7"],["/static/media/title2x.98ad6501.png","98ad65016379bdca37f322abdba00775"],["/static/media/work-sans-latin-100.59f1453a.woff2","59f1453ad3ebd7286adac5f880beaa32"],["/static/media/work-sans-latin-100.6b59a112.woff","6b59a11223f0eb04669b0918b3683cdb"],["/static/media/work-sans-latin-200.dda60b2d.woff","dda60b2d3a16123cb909462b847db16b"],["/static/media/work-sans-latin-200.f0b2fa4d.woff2","f0b2fa4d1bdf63ab22e391e6c18e2003"],["/static/media/work-sans-latin-300.06a3ef17.woff","06a3ef170d4f82a75f60506499da69e5"],["/static/media/work-sans-latin-300.f01f411d.woff2","f01f411dcfb2944523eb022a20096c84"],["/static/media/work-sans-latin-400.3d968cce.woff","3d968ccef5a3fbcab447f0248a7b8b49"],["/static/media/work-sans-latin-400.9013d0d1.woff2","9013d0d172bd72557b5e2bf02063e0ba"],["/static/media/work-sans-latin-500.3c4e10fc.woff2","3c4e10fc8f6288fbf199619f092b55d6"],["/static/media/work-sans-latin-500.bb995ba1.woff","bb995ba1a92e95ff2e237dae60a1bbfb"],["/static/media/work-sans-latin-600.2e5c91ae.woff","2e5c91aeff48ba09c884a89e4b55eef6"],["/static/media/work-sans-latin-600.7ebcf53c.woff2","7ebcf53c0fded7f8c3ddd22afe96ae6e"],["/static/media/work-sans-latin-700.026b1839.woff2","026b18396dea1aecb9a21f5c0888d7a4"],["/static/media/work-sans-latin-700.1ba6049b.woff","1ba6049bde9d0ad5d726954af8f5ac68"],["/static/media/work-sans-latin-800.1aeaeb54.woff2","1aeaeb5405cf0de2d45f64cfae5620e3"],["/static/media/work-sans-latin-800.5bee6806.woff","5bee6806db283e2125e91e058577abaf"],["/static/media/work-sans-latin-900.4563e6cf.woff2","4563e6cfbb1d3cd7d1358f9942a024cc"],["/static/media/work-sans-latin-900.6f507dcb.woff","6f507dcbc532c8f91ce5896bfdd2f291"],["/static/media/x1.c324315a.png","c324315a7beeb2ee9b3167e7a7e24aba"],["/static/media/x1.fe7e6860.png","fe7e68609aace0aa94ff4e14f31e33e8"],["/static/media/x2.185d12bd.png","185d12bd9df43b4ce5874facb3daf7c4"],["/static/media/x2.843fb94b.png","843fb94bb9297ca50db7f89374b8f894"],["/static/media/x2.c0ab1aaf.png","c0ab1aaf244889e5c81a14352cba5ad9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,t,c){var f=new URL(a);return c&&f.pathname.match(c)||(f.search+=(f.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),f.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,e){var t=new URL(a);return t.hash="",t.search=t.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),f=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),f]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!e.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(t){return Promise.all(t.map(function(t){if(!e.has(t.url))return a.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),e=urlsToCacheKeys.has(t));!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL("/index.html",self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});