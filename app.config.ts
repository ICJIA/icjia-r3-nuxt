export default defineAppConfig({
  title: "R3 (R3)",
  description: "R3 description.",
  api: "https://r3.icjia-api.cloud",
  root: "https://r3.icjia.dev",

  splash: [
    {
      src: "https://r3.icjia-api.cloud/uploads/medium_new_splash_01_0ca141e7db.jpg?updated_at=2022-12-15T16:26:21.124Z",
      lazySrc:
        "https://r3.icjia-api.cloud/uploads/thumbnail_new_splash_01_0ca141e7db.jpg",
      title: "PLANNING AND CAPACITY BUILDING",
      tagline:
        "Grants to provide funds for organizations to develop a community plan for service provision or to build their own internal capacity to provide services.",
    },
    {
      src: "https://r3.icjia-api.cloud/uploads/medium_new_splash_02_c981e61127.jpg?updated_at=2022-12-15T16:26:20.125Z",
      lazySrc:
        "https://r3.icjia-api.cloud/uploads/thumbnail_new_splash_02_c981e61127.jpg?updated_at=2022-12-15T16:26:20.125Z",
      title: "SERVICE AND DELIVERY",
      tagline:
        "Grants to provide services to repair the harm caused by economic disinvestment, violence, and the war on drugs",
    },
  ],
  navMenu: [
    {
      main: "Home",
      link: "/",
      nudgeLeft: "78px",
    },
    {
      main: "About",
      nudgeLeft: "57px",
      children: [
        {
          section: "About the R3 Program",
        },
        {
          title: "R3 news",
          link: "/news",
        },
        {
          title: "Meetings",
          link: "/meetings",
        },
        {
          title: "Board Composition",
          link: "/board",
        },

        {
          divider: true,
        },
        {
          section: "Applicant Tools",
        },
        {
          title: "Eligibility",
          link: "/eligibility",
        },
        {
          title: "FAQs",
          link: "/faqs",
        },
        {
          title: "Collaboratives",
          link: "/collaboratives",
        },
        {
          title: "Resources",
          link: "/resources",
        },
      ],
    },

    {
      main: "Funding",
      link: "/apply",
      nudgeLeft: "78px",
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
