export default defineAppConfig({
  title: "R3 (R3)",
  description: "R3 description.",
  api: "https://r3.icjia-api.cloud",
  root: "https://r3.icjia.dev",
  isTranslationEnabled: false,

  navMenu: [
    {
      main: "Home",
      link: "/",
      nudgeLeft: "78px",
    },
    {
      main: "About",
      link: "/about",
    },
  ],
  footerMenu: [
    {
      main: "Home",
      link: "/",
    },
    {
      main: "About",
      link: "/about",
    },
    {
      main: "FAQs",
      link: "/faqs",
    },
    {
      main: "News",
      link: "/news",
    },
    {
      main: "Board",
      link: "/board",
    },
    {
      main: "Meetings",
      link: "/meetings",
    },
    {
      main: "Eligibility",
      link: "/eligibility",
    },
    {
      main: "Collaboratives",
      link: "/collaboratives",
    },
    {
      main: "Funding Opportunities",
      link: "/apply",
    },
    {
      main: "Resources",
      link: "/resources",
    },
    {
      main: "Search",
      link: "/search",
    },
  ],
});
