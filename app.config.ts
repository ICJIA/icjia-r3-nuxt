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
      main: "Board",
      link: "/board",
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
      main: "Search",
      link: "/search",
    },
  ],
});
