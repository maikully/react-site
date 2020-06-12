(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{13:function(e,a,t){e.exports=t(23)},18:function(e,a,t){},21:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(11),o=t.n(r),i=(t(18),t(3)),c=t(4),s=t(6),m=t(5),u=t(9),d=(t(21),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e),l.a.createElement("h3",null),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},a))))}}]),t}(n.Component)),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 Michael Li"),l.a.createElement("li",null,"Design by"," ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),h=(t(22),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"calculateAge",value:function(e){var a=Date.now()-e.getTime(),t=new Date(a);return Math.abs(t.getUTCFullYear()-1970)}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=(this.props.data.bio,this.props.data.phone),n=this.props.data.email,r=this.props.data.resumedownload,o=this.calculateAge(new Date("March 16, 2001 00:00:00"));return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Michael Li Picture"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I'm a ",o,"-year-old software programmer and musician at Brown University studying computer science and music. I love many kinds of music, especially classical, and will occasionally compose or write about music. Some of my programming and musical works are kept here."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,t),l.a.createElement("br",null),l.a.createElement("span",null,n))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:r,target:"_blank",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component)),E=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),a=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))})),t=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}))}return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Experience"))),l.a.createElement("div",{className:"nine columns main-col"},a)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},t)))))}}]),t}(n.Component),g=(n.Component,n.Component,function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.csProjects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("a",{href:e.url,title:e.title,target:"_blank"},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",{style:{color:"#3F3F3F"}},e.title),l.a.createElement("p",{style:{color:"#555555"}},e.category)))))})),a=this.props.data.musicProjects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("a",{href:e.url,title:e.title,target:"_blank"},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",{style:{color:"#3F3F3F"}},e.title),l.a.createElement("p",{style:{color:"#555555"}},e.category)))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"CS Projects"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e,l.a.createElement("hr",null),l.a.createElement("h1",null," Music Projects "),a))))}}]),t}(n.Component)),f=t(8),v=t(12),y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),n=a.call(this,e),u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v.a,{color:"#04d9ff",num:100,type:"cobweb",bg:!0}),l.a.createElement(d,{data:f.main}),l.a.createElement(h,{data:f.main}),l.a.createElement(E,{data:f.resume}),l.a.createElement(g,{data:f.portfolio}),l.a.createElement(p,{data:f.main}))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-site",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-site","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):b(e)}))}}()},8:function(e){e.exports=JSON.parse('{"main":{"name":"Michael Li","image":"profilepic.jpg","bio":"I\'m a ","email":"michael_s_li@brown.edu","phone":"908-902-6082","address":{"street":"(Your Street)","city":"(Your City)","state":"(Your State)","zip":"(Your Zip/Postal Code)"},"website":"","resumedownload":"resume.pdf","social":[{"name":"linkedin","url":"https://www.linkedin.com/in/michael-li-14a4908b/","className":"fa fa-linkedin"},{"name":"github","url":"http://github.com/maikully","className":"fa fa-github"}]},"resume":{"education":[{"school":"Brown University","degree":"Sc.B. Computer Science and Music","graduated":"May 2023","description":"Studying music theory and composition and computer programming."},{"school":"High Technology High School","graduated":"June 2019","description":"STEM-based magnet high school in Lincroft, New Jersey."}],"work":[{"company":"re:Bloom","title":"Website Designer","years":"June 2018","description":"Contributed to creating a website for re:Bloom in React."},{"company":"New Jersey Performing Arts Center","title":"Research Intern","years":"Feb - May 2019","description":"Intern at NJPAC, doing data entry and analysis of past and potential donors."},{"company":"QuantHouse","title":"Computer Networking Intern","years":"May - August 2018","description":"Paid summer internship at a data center, helping to inventory and migrate over one hundred server machines."}],"skills":[{"name":"Java","level":"100%"},{"name":"Python","level":"100%"},{"name":"LaTeX/LilyPond","level":"100%"},{"name":"Music Theory","level":"100%"},{"name":"Violin","level":"100%"},{"name":"Adobe Photoshop","level":"70%"},{"name":"Adobe Premiere Pro","level":"70%"},{"name":"Adobe Audition","level":"70%"},{"name":"HTML","level":"50%"},{"name":"CSS","level":"50%"}]},"portfolio":{"csProjects":[{"title":"ChordConstructor","category":"A Java program that can create a chord given a key and a roman numeral","url":"https://github.com/maikully/chord-constructor","image":"chord.png"}],"musicProjects":[{"title":"Pop Song","category":"A short \\"pop song\\" written for my intro music theory class (NB: many of the chord symbols are outdated)","url":"pop_song.pdf","image":"popsong.jpg"},{"title":"Sonata Exposition","category":"A piano sonata exposition written for my intro music theory class","url":"sonata.pdf","image":"sonata.jpg"},{"title":"Tanabata Song","category":"An SATB arrangement of the Japanese folk song \\"Tanabata\\"","url":"Tanabata.pdf","image":"tanabata.jpg"},{"title":"In a Sentimental Mood","category":"An arrangement of the jazz standard \\"In a Sentimental Mood\\" for melodica and strings of varyingly low octaves","url":"sentimental.mp3","image":"sentimental.jpg"},{"title":"God Only Knows re-melodication","category":"The chords to \\"God Only Knows\\" but with a new melody, for my intro music theory class","url":"God_Only_Knows.mp3","image":"God_Only_Knows.jpg"},{"title":"Because","category":"Playing the opening vocals of the Beatles\' \\"Because\\" on the violin (disclaimer: sheet music isn\'t mine)","url":"Because.mp3","image":"because.jpg"},{"title":"Nowhere Man","category":"(Poorly) singing the opening vocals of the Beatles\' \\"Nowhere Man\\" (disclaimer: sheet music isn\'t mine)","url":"Nowhere_Man.mp3","image":"nowhere.jpg"}]}}')}},[[13,1,2]]]);
//# sourceMappingURL=main.d97d62f8.chunk.js.map