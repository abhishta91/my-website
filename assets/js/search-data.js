// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-economics-of-cyber-security",
          title: 'Economics of Cyber Security',
          description: "This course explores how economic principles can be applied to cybersecurity decision-making, including investment strategies, risk management, and adversarial behavior in cybercrime ecosystems.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/economics-of-cyber-security/";
            },},{id: "teachings-enterprise-security",
          title: 'Enterprise Security',
          description: "This course covers the design, implementation, and management of enterprise-level security strategies, focusing on organisational, technical, and governance aspects of cybersecurity.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/enterprise-security/";
            },},{id: "teachings-finance-for-engineers",
          title: 'Finance for Engineers',
          description: "This course introduces fundamental financial concepts tailored for engineers, focusing on decision-making, valuation, and financial analysis in technical contexts.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/finance-for-engineers/";
            },},{id: "teachings-industry-4-0",
          title: 'Industry 4.0',
          description: "This course explores the transformation of industries through digital technologies, focusing on the integration of cyber-physical systems, data analytics, and human-centered design in modern industrial environments.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/industry-4-0/";
            },},{id: "teachings-information-services",
          title: 'Information Services',
          description: "This course focuses on the design, delivery, and management of information services within organisations, including service-oriented architectures, digital platforms, and value creation through IT services.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/information-services/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
