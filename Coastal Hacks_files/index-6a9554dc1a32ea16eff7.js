(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4813: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, { default: function() { return k } });
            var o = n(5893),
                s = n(7294),
                a = n(9008);

            function r(e) {
                var t = e.children,
                    n = "NeoHacks | Virtual",
                    s = "NeoHacks is a beginner friendly virtual hackathon taking place on July 30 - August 1, 2021.",
                    r = "@neohacks";
                return (0, o.jsxs)(a.default, { children: [(0, o.jsx)("meta", { charSet: "utf-8" }), (0, o.jsx)("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }), (0, o.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }), (0, o.jsx)("title", { children: n }), (0, o.jsx)("meta", { name: "description", content: s }), (0, o.jsx)("meta", { name: "keywords", content: "hackathon, code, stem, hack, beginner" }), (0, o.jsx)("meta", { name: "author", content: "NeoHacks" }), (0, o.jsx)("meta", { property: "og:url", content: "neohacks.org" }), (0, o.jsx)("meta", { property: "og:type", content: "website" }), (0, o.jsx)("meta", { property: "og:title", content: n }), (0, o.jsx)("meta", { property: "og:description", content: s }), (0, o.jsx)("meta", { property: "og:image", content: "/og-image.png" }), (0, o.jsx)("meta", { name: "twitter:card", content: "summary" }), (0, o.jsx)("meta", { name: "twitter:site", content: r }), (0, o.jsx)("meta", { name: "twitter:creator", content: r }), t] })
            }
            var i = n(773);

            function l(e) {
                var t = e.title,
                    n = e.children;
                return (0, o.jsxs)("div", { className: "bg-black bg-opacity-5 p-5 rounded-xl", children: [(0, o.jsx)("h3", { className: "mb-1 font-bold text-3xl font-inter", children: t }), (0, o.jsx)("p", { className: "opacity-100", children: n })] })
            }

            function c(e) {
                var t = e.src,
                    n = e.name,
                    s = e.role,
                    a = e.pronouns;
                return (0, o.jsxs)("div", { className: "flex flex-row space-x-5 items-center", children: [(0, o.jsx)("div", { children: (0, o.jsx)("img", { src: t, alt: n, className: "rounded-full w-20 h-20" }) }), (0, o.jsxs)("div", { children: [(0, o.jsx)("p", { className: "text-2xl text-black font-inter font-bold", children: n }), (0, o.jsxs)("p", { className: "text-gray-500 text-lg font-inter", children: [s, " ", (0, o.jsx)("span", { className: "text-blue-500 font-inter", children: a })] })] })] })
            }
            var d = n(1664),
                h = [{ name: "Press Kit", href: "/NeoHacksProspectus.pdf" }, { name: "Sponsor Deck", href: "/NeoHacksProspectus.pdf" }, { name: "Donate", href: "https://bank.hackclub.com/donations/start/neohacks" }, { name: "Contact", href: "mailto:info@neohacks.org" }];

            function m() {
                return (0, o.jsxs)("footer", {
                    id: "footer",
                    className: "mt-32 text-black font-inter font-semibold uppercase text-center pb-6",
                    children: [(0, o.jsx)("ul", {
                        id: "footernav",
                        className: "mb-10 flex flex-col md:flex-row space-y-6 md:space-x-12 md:space-y-0 md:w-screen text-xl justify-center items-center",
                        children: h.map((function(e) {
                            var t = e.name,
                                n = e.href;
                            return (0, o.jsx)("li", { className: "li-none", children: (0, o.jsx)(d.default, { href: null !== n && void 0 !== n ? n : "", children: (0, o.jsx)("a", { target: "_blank", className: "hover:bg-black hover:bg-opacity-5 px-4 py-2 rounded-xl", children: null !== t && void 0 !== t ? t : "" }) }) }, t)
                        }))
                    }), (0, o.jsxs)("h1", { className: "opacity-60 px-6 md:px-4 text-base", children: ["copyright neohacks ", (new Date).getFullYear(), " all rights reserved"] })]
                })
            }

            function u(e) {
                var t = e.title,
                    n = e.children,
                    s = e.hostPfp,
                    a = e.hostName;
                return (0, o.jsxs)("div", { className: "bg-black bg-opacity-5 p-5 rounded-xl", children: [(0, o.jsx)("h3", { className: "mb-1 font-bold text-3xl font-inter", children: t }), (0, o.jsx)("p", { className: "opacity-100", children: n }), (null === a || void 0 === a ? void 0 : a.length) && (0, o.jsxs)("div", { className: "flex flex-row items-center space-x-3 pt-2", children: [(0, o.jsx)("img", { src: s, alt: "Workshop Host", className: "w-7 h-7 rounded-full" }), (0, o.jsxs)("p", { className: "font-inter font-medium", children: ["Hosted by ", a] })] })] })
            }

            function p(e) {
                var t = e.companyName,
                    n = e.logo,
                    s = e.website;
                return (0, o.jsx)("div", { children: (0, o.jsx)(d.default, { href: s, children: (0, o.jsx)("a", { children: (0, o.jsx)("img", { src: n, alt: t, className: "w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" }) }) }) })
            }

            function x(e) {
                var t, n, a, r = e.type,
                    i = e.icon,
                    l = e.color,
                    c = e.heading,
                    d = e.children,
                    h = e.extraclasses,
                    m = d,
                    u = null !== (t = (null === c || void 0 === c || null === (n = c.replace(/\s/g, "")) || void 0 === n || null === (a = n.replace(/'/g, "")) || void 0 === a ? void 0 : a.toLowerCase()) + i) && void 0 !== t ? t : "";
                switch ((0, s.useEffect)((function() {
                    var e = document.querySelector("#cardfour".concat(null !== u && void 0 !== u ? u : ""));
                    null != e && (e.style.color = { red: "#E94957", orange: "#FF7E47", yellow: "#FFFD85", green: "#10B981", blue: "#69709F", turquoise: "#2CDAC5" }[l]), document.querySelectorAll(".cardfour").forEach((function(e) { return e.style.paddingBottom = "0.5rem" }))
                })), r) {
                    case 2:
                        return (0, o.jsxs)("div", { className: "font-inter bg-black bg-opacity-5 p-8 rounded-xl", children: [f(i, l, 4), (0, o.jsx)("h3", { className: "mt-2 font-bold text-2xl", children: c }), (0, o.jsx)("div", { className: "text-lg w-11/12 ".concat(null !== h && void 0 !== h ? h : ""), children: m })] });
                    case 3:
                        return (0, o.jsxs)("div", { className: "mb-28 font-inter", children: [f(i, l, 6), (0, o.jsx)("h3", { className: "mt-2 mb-4 font-bold text-5xl", children: c }), (0, o.jsx)("div", { className: "text-2xl w-11/12 ".concat(null !== h && void 0 !== h ? h : ""), children: m })] });
                    case 4:
                        return (0, o.jsxs)("div", { className: "font-inter bg-black bg-opacity-5 p-8 rounded-xl", children: [f(i, l, 4), (0, o.jsx)("h3", { id: "cardfour".concat(null !== u && void 0 !== u ? u : ""), className: "cardfour m".concat(i ? "y" : "b", "-2 font-black text-3xl lg:text-5xl text-").concat(null !== l && void 0 !== l ? l : "black"), children: c }), (0, o.jsx)("div", { className: "text-xl w-11/12 ".concat(null !== h && void 0 !== h ? h : ""), children: m })] });
                    case 5:
                        return (0, o.jsx)("div", { className: "font-inter bg-black bg-opacity-5 rounded-xl", children: d });
                    default:
                        return (0, o.jsxs)("div", { className: "font-inter", children: [f(i, l), (0, o.jsx)("h3", { className: "mt-2 font-bold text-2xl", children: c }), (0, o.jsx)("div", { className: "text-lg w-11/12 opacity-70 ".concat(null !== h && void 0 !== h ? h : ""), children: m })] })
                }
            }
            var g = { red: "E94957", orange: "FF7E47", yellow: "FFFD85", green: "10B981", blue: "69709F", turquoise: "2CDAC5", purple: "F1BEFE" };

            function f(e, t, n) {
                var s;
                switch (t = "#".concat(null !== (s = g[t]) && void 0 !== s ? s : "000000"), e) {
                    case "lightbulb":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }) });
                    case "sparkles":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }) });
                    case "globe":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" }) });
                    case "phone":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" }) });
                    case "map":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" }) });
                    case "puzzle":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" }) });
                    case "flag":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" }) });
                    case "pencil":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }) });
                    case "calendar":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) });
                    case "pin":
                        return (0, o.jsxs)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: [(0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }), (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })] });
                    case "star":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }) });
                    case "cash":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" }) });
                    case "moon":
                        return (0, o.jsx)("svg", { width: "".concat(null !== n && void 0 !== n ? n : "3", "rem"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: t, children: (0, o.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) })
                }
            }
            var w = n(4578);

            function j() { return (0, o.jsx)("div", { className: "bg-white bg-opacity-50 shadow-lg rounded-xl p-4", children: (0, o.jsxs)("div", { className: "flex flex-row items-center space-x-8", children: [(0, o.jsx)(w.aav, { size: 35, color: "#f11d28" }), (0, o.jsxs)("div", { className: "flex flex-col", children: [(0, o.jsx)("h4", { className: "font-bold", children: "NeoHacks has been rescheduled!" }), (0, o.jsx)("p", { className: "text-sm", children: "New date: July 30 - August 1. Join us for a weekend of fun and learning!" })] })] }) }) }
            var v = [{ companyName: "Hack Club Bank", logo: "https://cloud-lsj5acqf8-hack-club-bot.vercel.app/0powered-by-hack-club.png", website: "https://bank.hackclub.com" }];

            function k() {
                return (0, s.useEffect)((function() { console.log("Sign up for NeoHacks!") })), (0, o.jsxs)("div", {
                    children: [(0, o.jsx)(r, {}), (0, o.jsxs)("main", {
                        children: [(0, o.jsx)("div", { className: "hidden lg:block lg:absolute lg:left-1/4 lg:right-1/4 lg:mt-8", children: (0, o.jsx)(j, {}) }), (0, o.jsxs)("section", { className: "bg-navy m-0", children: [(0, o.jsxs)(i.E.div, { initial: { x: -300, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 1 }, className: "p-12 pb-16 md:p-24 flex flex-col space-y-5 md:pt-48 relative z-50", children: [(0, o.jsx)("h1", { className: "text-5xl md:text-8xl font-black text-white font-ramona", children: "NeoHacks" }), (0, o.jsx)("h3", { className: "font-fira text-white text-xl md:text-2xl w-2/3 md:w-full", children: "July 30 - Aug 1, 2021 \u2022 Virtual" }), (0, o.jsx)(i.E.button, { whileHover: { scale: 1.1 }, whileTap: { scale: .9 }, className: "rounded-full bg-white font-inter text-base md:text-lg font-medium p-2 px-6 w-min", children: (0, o.jsx)("a", { href: "https://airtable.com/shrhuP6sBAWskOiqT", children: "Register" }) })] }), (0, o.jsx)("img", { src: "/cliff.svg", alt: "cliff", className: "w-full relative z-0 md:-mt-64 -mt-60" })] }), (0, o.jsxs)("section", { children: [(0, o.jsxs)("h2", { className: "md:leading-loose pb-4 md:pb-0", children: ["Welcome to ", (0, o.jsx)("span", { className: "font-ramona text-navy", children: "NeoHacks" }), "!"] }), (0, o.jsx)("p", { className: "text-lg ", children: "NeoHacks is a 48-hour hackathon taking place July 30 - Aug 1, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more. The first day of the event will be a workshop-based learnathon where you will get a chance to gain new skills. The second day will be dedicated towards your building a project with your team." })] }), (0, o.jsxs)("section", { children: [(0, o.jsx)("h2", { children: "FAQ" }), (0, o.jsxs)("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-10", children: [(0, o.jsx)(l, { title: "Where is this held?", children: "Due to COVID-19, NeoHacks is completely virtual and will take place on Zoom and Discord." }), (0, o.jsx)(l, { title: "What is a hackathon?", children: "A hackathon is a great place to learn new skills, make new friends, and have fun. By the end of the hackathon, you will have turn in a project for feedback from judges." }), (0, o.jsx)(l, { title: "Who is eligible to participate?", children: "This hackathon is open to anyone regardless of their identity. We highly encourage beginners to participate!" }), (0, o.jsx)(l, { title: "How can I prepare for a hackathon?", children: "No advanced preparation is necessary! We have workshops tailored to those who are new to coding and intro workshops to help beginner hackers." }), (0, o.jsx)(l, { title: "What if I don't have a team?", children: "There will be several team formation opportunities before and during the event. Although working with a team (of 1-4 hackers) is highly encouraged, you may choose to work alone." })] })] }), (0, o.jsxs)("section", { children: [(0, o.jsx)("h2", { children: "Prizes" }), (0, o.jsxs)("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-10", children: [(0, o.jsx)(x, { type: 2, icon: "star", color: "orange", heading: "Best Overall", children: "Every project submitted will be entered in this category. Winners will each receive a Discord Nitro subscription along with a $50 Amazon gift-card." }), (0, o.jsx)(x, { type: 2, icon: "pencil", color: "red", heading: "Most Creative", children: "You'll each win a $20 gift-card along with a one-year license for Sketch, a design platform used by over one million people \u2014 from freelancers, to the world\u2019s largest teams." }), (0, o.jsx)(x, { type: 2, icon: "globe", color: "blue", heading: "Best Web App", children: "Create a web application using any technologies of choice for a chance to win a $25 Amazon gift card for each member of your team." }), (0, o.jsx)(x, { type: 2, icon: "phone", color: "purple", heading: "Best Mobile App", children: "Create a mobile application using any technologies of choice for a chance to win a $25 Amazon gift card for each member of your team." }), (0, o.jsx)(x, { type: 2, icon: "sparkles", color: "turquoise", heading: "Best Workshop Hack", children: "Attend a workshop and base your project off what you learned at that workshop. Be sure to tell us which workshop you attended and how you took your project further after the workshop." })] })] }), (0, o.jsxs)("section", { children: [(0, o.jsx)("h2", { children: "Workshops" }), (0, o.jsxs)("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-10", children: [(0, o.jsx)(u, { title: "Intro to HTML/CSS", children: "This workshop serves as an introduction to web development with HTML and CSS." }), (0, o.jsx)(u, { title: "Intro to Figma", children: "Learn how to use Figma, a free design and prototyping software, to develop the UI for your project." }), (0, o.jsx)(u, { title: "Intro to Git/GitHub", children: "Learn the basics of Git and GitHub, a useful tool every developer should be familiar with. At the end of the workshop, you will be able to create your first pull request." }), (0, o.jsx)(u, { title: "Intro to Next.js (React)", hostName: "Sam Poder", hostPfp: "https://github.com/sampoder.png", children: "Learn the basics of Next.js, a React framework to build modern, dynamic websites." }), (0, o.jsx)(u, { title: "Expansion 101", hostName: "Galicia Gordon", hostPfp: "https://github.com/galiciagordon.png", children: "Attend the Expansion 101 Workshop to learn about Galicia's tips for team formation and project brainstorming session to find a team and project that inspires you to build something great." }), (0, o.jsx)(u, { title: "Intro to Python", children: "This workshop serves as a basic introduction to python, a powerful, general-purpose programming language with a diverse range of applications." })] })] }), (0, o.jsxs)("section", {
                            children: [(0, o.jsx)("h2", { className: "pb-4", children: "Sponsors" }), (0, o.jsx)("div", {
                                className: "grid grid-cols-2 md:grid-cols-4",
                                children: v.map((function(e) {
                                    var t = e.logo,
                                        n = e.companyName,
                                        s = e.website;
                                    return (0, o.jsx)(p, { logo: t, companyName: n, website: s })
                                }))
                            })]
                        }), (0, o.jsx)("section", {}), (0, o.jsxs)("section", { children: [(0, o.jsx)("h2", { children: "Team" }), (0, o.jsxs)("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-10", children: [(0, o.jsx)(c, { name: "Risha Jhangiani", role: "Lead Organizer.", pronouns: "she/her", src: "https://github.com/rishadjhangiani.png" }), (0, o.jsx)(c, { name: "Marius Schaefer", role: "Social Media.", pronouns: "he/him", src: "https://github.com/marius-schaefer.png" }), (0, o.jsx)(c, { name: "Daniel Katz", role: "Operations.", pronouns: "he/him", src: "https://github.com/minimachines.png" }), (0, o.jsx)(c, { name: "Daniel Shubin", role: "Sponsorships.", pronouns: "he/him", src: "https://github.com/minimachines.png" }), (0, o.jsx)(c, { name: "Neta Shubin", role: "Outreach.", pronouns: "she/her", src: "https://github.com/minimachines.png" }), (0, o.jsx)(c, { name: "Ella", role: "Branding.", pronouns: "she/her", src: "https://github.com/eilla1.png" })] })] })]
                    }), (0, o.jsx)(m, {})]
                })
            }
        },
        8581: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return n(4813) }])
        }
    },
    function(e) {
        e.O(0, [876, 962, 774, 888, 179], (function() { return t = 8581, e(e.s = t); var t }));
        var t = e.O();
        _N_E = t
    }
]);