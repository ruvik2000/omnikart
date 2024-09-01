(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{7991:function(e,t,i){Promise.resolve().then(i.bind(i,9976))},9976:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var r=i(7437),s=i(2265),n=i(5414),a=e=>{let{letter:t,description:i}=e;return(0,r.jsxs)("div",{className:"relative flex flex-col items-center justify-center gap-4",children:[(0,r.jsxs)("div",{className:"w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] flex items-center justify-center rounded-xl lg:rounded-3xl bg-white shadow-lg dark:bg-[#1f1f1f] dark:shadow-2xl border-2 dark:border-black",children:[(0,r.jsx)(n.E.h2,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},className:"text-3xl lg:text-7xl font-bold text-green-500",children:t}),(0,r.jsx)(n.E.h2,{className:"absolute text-3xl lg:text-7xl font-bold text-white blur-xl",children:t})]}),(0,r.jsx)(n.E.p,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},className:"absolute -bottom-10 font-bold text-center text-[8px] lg:text-sm ",children:i})]})},o=i(6691),l=i.n(o),d=e=>{let{imgUrl:t,title:i,description:s}=e;return(0,r.jsxs)("div",{className:"flex flex-col px-2 items-center justify-evenly w-[250px] h-[350px] border-[3px] rounded-xl border-black shadow-lg dark:border-[#1f1f1f] dark:text-[#1f1f1f]",children:[(0,r.jsx)(l(),{src:t,alt:"height",width:100,height:100,className:"brightness-50"}),(0,r.jsx)("p",{className:"font-semibold",children:i}),(0,r.jsx)("p",{className:"text-sm",children:s})]})},c=i(3952),m=e=>{let{number:t,description:i}=e,s=(0,c.useTheme)();return(0,r.jsxs)("div",{className:"relative flex items-center justify-start  mx-auto w-[90%] text-black px-5 py-10 rounded-xl ".concat("light"===s.theme&&"grad"," dark:bg-[#1f1f1f] border dark:border-white"),children:[(0,r.jsxs)("div",{className:"absolute -left-8  w-14 h-14 flex items-center justify-center rounded-full ".concat("light"===s.theme&&"grad"," dark:bg-[#1f1f1f] border dark:border-white dark:text-white"),children:[(0,r.jsx)("span",{className:"font-bold",children:t}),(0,r.jsx)("span",{className:"font-bold hidden dark:block absolute dark:blur-lg",children:t})]}),(0,r.jsxs)("div",{className:"flex items-center justify-center dark:text-white",children:[(0,r.jsx)("p",{className:"ml-3 !text-left font-semibold",children:i}),(0,r.jsx)("p",{className:"hidden dark:block absolute ml-3 !text-left font-semibold blur-lg",children:i})]})]})},u=i(9877),f=()=>(0,r.jsxs)("main",{className:"flex flex-col",children:[(0,r.jsxs)("section",{className:"pt-[6rem] h-fit lg:h-[30rem] px-30 pb-[8rem] md:pb-[5rem] flex flex-col items-center justify-start gap-10 bg-neutral-100 dark:bg-[#1f1f1f] dark:text-white",children:[(0,r.jsx)("h1",{className:"text-3xl md:text-4xl lg:text-6xl font-medium text-green-500",children:"Work Omni"}),(0,r.jsx)("div",{className:"flex items-center justify-center gap-3 lg:gap-[5rem]",children:u.o_.map((e,t)=>(0,r.jsx)(s.Fragment,{children:(0,r.jsx)(a,{...e})},t))})]}),(0,r.jsxs)("section",{className:"flex flex-col gap-7 py-8 px-[2rem] lg:px-[10rem] text-center text-white bg-green-800",children:[(0,r.jsx)("h2",{className:"text-4xl font-semibold",children:"Seamless Integration with Omnicell ADC"}),(0,r.jsx)("p",{className:"text-sm lg:text-base",children:"Streamlines the medication administration process and provides safe and secure transportation of medications from the medication cabinet to the patient’s bedside. Nurse's shifts involve multiple trips to the Omnicell ADC & bedsides. Using the OmniKart eliminates the need for multiple trips by allowing nurses to request, retrieve, and deliver all patient's medication in a single trip."}),(0,r.jsx)("div",{className:"w-fit mx-auto grid gap-4 grid-cols-1 grid-rows-8 lg:grid-cols-2 lg:grid-rows-4",children:u.Dr.map((e,t)=>(0,r.jsx)(s.Fragment,{children:(0,r.jsx)(m,{...e})},t))})]}),(0,r.jsxs)("section",{className:"flex flex-col gap-7 py-8 px-[2rem] lg:px-[10rem] text-center bg-neutral-100 dark:bg-gray-300",children:[(0,r.jsx)("h2",{className:"text-4xl font-semibold dark:text-[#1f1f1f]",children:"Features"}),(0,r.jsx)("div",{className:"w-fit mx-auto grid gap-6 grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2",children:u.zs.map((e,t)=>(0,r.jsx)(s.Fragment,{children:(0,r.jsx)(d,{...e})},t))})]})]})},3952:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a},useTheme:function(){return o}});var r=i(7437),s=i(2265);let n=(0,s.createContext)(null);function a(e){let{children:t}=e,[i,a]=(0,s.useState)("light");return(0,s.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(a(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(a("dark"),document.documentElement.classList.add("dark"))},[]),(0,r.jsx)(n.Provider,{value:{theme:i,toggleTheme:()=>{"light"===i?(a("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(a("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function o(){let e=(0,s.useContext)(n);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},9877:function(e,t,i){"use strict";i.d(t,{$i:function(){return s},Dr:function(){return a},Ok:function(){return r},o_:function(){return n},zs:function(){return o}});let r=[{name:"Features",hash:"/features",ariaLabel:"Product Features"},{name:"About Us",hash:"/about",ariaLabel:"About Omnikart"},{name:"Contact Us",hash:"/contact",ariaLabel:"Contact Us"}],s=[{id:0,imageUrl:"/side1.webp",infoTitle:"Smart Drawer for Patient Safety",infoList:["Eliminates the manual process of labelling drawers: Up to sixteen patient-specific drawers can be assigned.","Independent locking drawers minimize the risk of administering the wrong medication to a patient.","Guided lights assist to identify the drawer to be opened.","Flexibility to configure workstations with storage drawers or bins.","Visual and sound alerts for drawer close reminders.","Manual unlocking access in emergencies."]},{id:1,imageUrl:"/side2.webp",infoTitle:"Provides a Faster, Safer and More Secure Medication Administration Process",infoList:["Integrates the Omnicell ADC and Hospital Information System to enable a closed-loop process for medication tracking and management.","Secure transportation mode for medication from the ADC to the point-of-care, creating a critical layer of accountability.","Versatility allows it to double as a workstation which nurses can use for incorporating other clinical applications."]},{id:2,imageUrl:"/side3.webp",infoTitle:"Improve Patient Care and Nurse Satisfaction",infoList:["Capable of assigning separate or individual locking drawers for patients thus minimizing trips to the ADC.","Enables quick retrieval of scheduled and as-needed medication.","Remote access allows nurses to review medication orders and manage medication requests.","Proven results: 77% of nurses were able to double-check medications due to time savings."]},{id:3,imageUrl:"/side4.webp",infoTitle:"Workflow for Greater Efficiency",infoList:["“My Patients” feature facilitates faster order processing.","Reduces time spent at the ADC.","Proven results: saved at least 15min per nurse during the morning med pass; medication removal time at ADC decreased 33%."]}],n=[{letter:"K",description:"KEYLESS"},{letter:"A",description:"ADAPTIVE TECHNOLOGY"},{letter:"R",description:"RECHARGEBLE"},{letter:"T",description:"TIME SAVING"}],a=[{number:1,description:"Pharmacy tops up medications to ADC."},{number:2,description:"The Nurse verifies that OmniKart drawers are empty at the start of shift."},{number:3,description:"The Nurse logs in to the system & assigns “My Patients” list & order medications from OmniKart."},{number:4,description:"Once the task is completed and verified, the nurse sends medication request to ADC."},{number:5,description:"The Nurse proceeds to ADC to retrieve medications within the administration window."},{number:6,description:"The Nurse loads meds in OmniKart assigned drawers to patients."},{number:7,description:"The Nurse to ensure meds remain in locked drawers until administered at bedside."},{number:8,description:"At the end of shift, the nurse returns unused items to ADC from OmniKart."}],o=[{imgUrl:"/icon1.png",title:"Electronically adjustable, simple, and durable structure",description:"Enhances mobility, improves safety and well-being of healthcare workers & easy cleaning to reduce the spread of bacteria."},{imgUrl:"/icon2.png",title:"Modular design with customizable add-ons",description:"Increased flexibility with bespoke solutions and a variety of options for add-ons"},{imgUrl:"/icon3.png",title:"Flexible drawer and bin configurations",description:"Cost effective as resources are used efficiently."},{imgUrl:"/icon4.png",title:"Omnicell ADC compatible",description:"To help streamline medication management and improve patient safety."},{imgUrl:"/icon5.png",title:"Long-lasting & hot-swappable batteries",description:"Provides up to 12 hours of run time on a single battery & rechargeable battery for endless usage."},{imgUrl:"/icon6.png",title:"Keyboard backlight, swivel monitor arm, & swappable mouse sides",description:"Supports working at night without disrupting patients’ sleep & increases convenience for nursing staff regardless of being left or right-handed."}]},679:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let r=i(1024),s=i(7929),n=i(2637),a=i(413),o=r._(i(9950)),l=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},d=a.Image},6691:function(e,t,i){e.exports=i(679)}},function(e){e.O(0,[413,146,971,472,744],function(){return e(e.s=7991)}),_N_E=e.O()}]);