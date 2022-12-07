"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4048],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(f,i(i({ref:t},h),{},{components:a})):n.createElement(f,i({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4685:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905));const o={sidebar_label:"The Lifecycle of a Celestia App Transaction"},i="The Lifecycle of a Celestia App Transaction",s={unversionedId:"concepts/how-celestia-works/transaction-lifecycle",id:"concepts/how-celestia-works/transaction-lifecycle",title:"The Lifecycle of a Celestia App Transaction",description:"Users request the Celestia App to make data available by",source:"@site/docs/concepts/how-celestia-works/transaction-lifecycle.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/transaction-lifecycle",permalink:"/pr-preview/pr-356/concepts/how-celestia-works/transaction-lifecycle",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/transaction-lifecycle.md",tags:[],version:"current",frontMatter:{sidebar_label:"The Lifecycle of a Celestia App Transaction"},sidebar:"concepts",previous:{title:"Celestia's Data Availability Layer",permalink:"/pr-preview/pr-356/concepts/how-celestia-works/data-availability-layer"},next:{title:"Data Availability FAQ",permalink:"/pr-preview/pr-356/concepts/data-availability-faq"}},l={},c=[{value:"Checking Data Availability",id:"checking-data-availability",level:2}],h={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-lifecycle-of-a-celestia-app-transaction"},"The Lifecycle of a Celestia App Transaction"),(0,r.kt)("p",null,"Users request the Celestia App to make data available by\nsending ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions. Every such transaction consists\nof the identity of the sender, the data to be made available, also\nreferred to as the message, the data size, the namespace ID, and\na signature. Every block producer batches multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData"),"\ntransactions into a block."),(0,r.kt)("p",null,"Before proposing the block though, the producer passes it to the\nstate machine via ABCI++, where each ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transaction is\nsplit into a namespaced message (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"Msg")," in the figure below),\ni.e., the data together with the namespace ID, and an executable\ntransaction (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"e-Tx")," in the figure below) that does not\ncontain the data, but only a commitment that can be used at a later\ntime to prove that the data was indeed made available."),(0,r.kt)("p",null,"Thus, the block data consists of data partitioned into namespaces\nand executable transactions. Note that only these transactions are\nexecuted by the Celestia state machine once the block is committed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lifecycle of a Celestia App Transaction",src:a(1293).Z,width:"3000",height:"1203"})),(0,r.kt)("p",null,"Next, the block producer adds to the block header a commitment\nof the block data. As described ",(0,r.kt)("a",{parentName:"p",href:"./data-availability-layer"},"here"),",\nthe commitment is the Merkle root of the 4k intermediate Merkle roots\n(i.e., one for each row and column of the extended matrix).\nTo compute this commitment, the block producer performs the following operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It splits the executable transactions and the namespaced data\ninto shares. Every share consists of some bytes prefixed by a\nnamespace ID. To this end, the executable transactions are associated\nwith a reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It arranges these shares into a square matrix (row-wise). Note that\nthe shares are padded to the next power of two. The outcome square\nof size k \xd7 k is referred to as the original data."),(0,r.kt)("li",{parentName:"ul"},"It extends the original data to a 2k \xd7 2k square matrix using\nthe 2-dimensional Reed-Solomon encoding scheme described above.\nThe extended shares (i.e., containing erasure data) are associated\nwith another reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It computes a commitment for every row and column of the extended\nmatrix using the NMTs described above.")),(0,r.kt)("p",null,"Thus, the commitment of the block data is the root of a Merkle tree\nwith the leaves the roots of a forest of Namespaced Merkle subtrees,\none for every row and column of the extended matrix."),(0,r.kt)("h2",{id:"checking-data-availability"},"Checking Data Availability"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DA network",src:a(2693).Z,width:"3000",height:"1453"})),(0,r.kt)("p",null,"To enhance connectivity, the Celestia Node augments the Celestia\nApp with a separate libp2p network, i.e., the so-called ",(0,r.kt)("em",{parentName:"p"},"DA network"),",\nthat serves DAS requests."),(0,r.kt)("p",null,"Light nodes connect to a Celestia Node in the DA network, listen to\nextended block headers (i.e., the block headers together with the\nrelevant DA metadata, such as the 4k intermediate Merkle roots), and\nperform DAS on the received headers (i.e., ask for random data chunks)."),(0,r.kt)("p",null,"Note that although it is recommended, performing DAS is optional -- light\nnodes could just trust that the data corresponding to the commitments in\nthe block headers was indeed made available by the Celestia DA layer.\nIn addition, light nodes can also submit transactions to the Celestia App,\ni.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions."),(0,r.kt)("p",null,"While performing DAS for a block header, every light node queries Celestia\nNodes for a number of random data chunks from the extended matrix and the\ncorresponding Merkle proofs. If all the queries are successful, then the\nlight node accepts the block header as valid (from a DA perspective)."),(0,r.kt)("p",null,"If at least one of the queries fails (i.e., either the data chunk is not\nreceived or the Merkle proof is invalid), then the light node rejects the\nblock header and tries again later. The retrial is necessary to deal with\nfalse negatives, i.e., block headers being rejected although the block\ndata is available. This may happen due to network congestion for example."),(0,r.kt)("p",null,"Alternatively, light nodes may accept a block header although the data\nis not available, i.e., a ",(0,r.kt)("em",{parentName:"p"},"false positive"),". This is possible since the\nsoundness property (i.e., if an honest light node accepts a block as available,\nthen at least one honest full node will eventually have the entire block data)\nis probabilistically guaranteed (for more details, take a look at the\n",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"original paper"),")."),(0,r.kt)("p",null,"By fine tuning Celestia's parameters (e.g., the number of data chunks sampled\nby each light node) the likelihood of false positives can be sufficiently\nreduced such that block producers have no incentive to withhold the block data."))}d.isMDXComponent=!0},2693:function(e,t,a){t.Z=a.p+"assets/images/consensus-da-e09f663089be80daa0f62397bfc8fc78.png"},1293:function(e,t,a){t.Z=a.p+"assets/images/tx-lifecycle-9c80bbe1c320bc02c466665bd873169a.png"}}]);