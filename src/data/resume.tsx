import { Icons } from "@/components/ui/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Warren Miraflor",
  initials: "WM",
  url: "https://warren-miraflor.com",
  location: "Manila, PH",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer. I love building things and helping people.",
  summary:
    "I am a Software Developer with experience in full stack development, specializing in C#/ASP.NET MVC, ReactJS, and SQL databases. I’ve worked on transforming legacy systems into cloud-based solutions, maintaining enterprise healthcare applications, and integrating REST APIs. With a background in Agile and DevOps, I focus on building scalable, reliable, and user-friendly software.",
  avatarUrl: "/me.jpg",
  memojiUrl: "/memoji.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Typescript",
    ".NET Core",
    "SQL",
    "MySQL",
    "MVC",
    "ASP.NET",
    "Rest API",
    "Java",
    "C#",
    "Git",
    "GitHub",
    "Azure DevOps",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/warrencodehub",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/warren-miraflor-6a3693288/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      Resume: {
        name: "Resume",
        url: "/Warren_Miraflor_Resume.pdf",
        icon: NotebookIcon,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "P&A Grant Thornton",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Semi-Senior Developer",
      logoUrl: "/pagt.jpg",
      start: "October 2025",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Eurolink",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/enic.jpg",
      start: "September 2024",
      end: "October 2025",
      description:
        "Maintained and enhanced a health claims integration system using C#/ASP.NET MVC and SQL. Implemented REST API integrations, streamlined workflows with Azure DevOps, and managed end-to-end deployments.",
    },
    {
      company: "Intership Crew Philippines",
      href: "https://nvidia.com/",
      badges: [],
      location: "Manila, PH",
      title: "Software Developer",
      logoUrl: "/icp.jpg",
      start: "August 2020",
      end: "September 2024",
      description:
        "Transformed legacy applications into cloud-based systems using Thinkwise low-code, developed and maintained multiple applications (Crew Management, HIS Mobile, Master Database), and provided training while leading SQL/T-SQL support.",
    },
    {
      company: "FEU-NRMF",
      href: "https://splunk.com",
      badges: [],
      location: "Fairview, QC",
      title: "Internship",
      logoUrl: "/feu_nrmf.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "Supported network configuration and web development using Laravel & MySQL. Assisted in maintaining existing applications and engaged with users for feedback and program support.",
    },
  ],
  education: [
    {
      school: "Polyechnic University of the Philippines",
      href: "#",
      degree: "Bachelor's Degree of Information Technology (BSIT)",
      logoUrl: "/PUPLogo.png",
      start: "2015",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Foundations of Coding Full-Stack",
      dates: "September, 2025",
      location: "Coursera, Microsoft",
      description:
        "Completed a Full-Stack Development course covering coding fundamentals, problem-solving, modular code, and hands-on experience with front-end and back-end technologies.",
      image:
        "/coursera.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        { icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
          title: "Show Certificate" }
      ],
    },
    {
      title: "Introduction to Programming With C#",
      dates: "September, 2025",
      location: "Coursera, Microsoft",
      description:
        "Completed a C# .NET course focused on project setup, OOP principles, and scalable application development, leveraging Microsoft Copilot for code quality and productivity.",
      image:
        "/coursera.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        { icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
          title: "Show Certificate" }
      ],
    },
    {
      title: "Introduction to Web Development",
      dates: "September, 2025",
      location: "Coursera, Microsoft",
      description:
        "Completed a Web Development course covering HTML, CSS, JavaScript, responsive design, accessibility, and collaborative projects using Git and Microsoft Copilot.",
      icon: "public",
      image:
        "/coursera.png",
      links: [
        { icon: <Icons.globe className="h-4 w-4" />, 
          href: "#", 
          title: "Show Certificate" }
      ],
    },
    {
      title: "Blazor for Front-End Development",
      dates: "September, 2025",
      location: "Coursera, Microsoft",
      description:
        "Completed a UI/UX Design course focused on Blazor Pages, creating responsive user-centered designs while leveraging Microsoft Copilot for CSS, design suggestions, and workflow improvements.",
      image:
        "/coursera.png",
      links: [
        { icon: <Icons.globe className="h-4 w-4" />,
          href: "#", 
          title: "Show Certificate" }
      ],
    },
    {
      title: "Back-End Development with .NET",
      dates: "September, 2025",
      location: "Coursera, Microsoft",
      description:
        "Completed a Back-End Development course using the .NET framework, building, managing, and optimizing server-side applications efficiently.",
      image:
        "/coursera.png",
      win: "Best Data Hack",
      mlh: "#",
      links: [
        { icon: <Icons.globe className="h-4 w-4" />, 
          href: "#", 
          title: "Show Certificate" }
      ],
    },
    {
      title: "Database Integration and Management",
      dates: "September, 2025",
      location: "Coursera, Microsoft",
      description:
        "Completed a Database Integration course using EF Core and SQL, focusing on relational database setup, query optimization, and leveraging Microsoft Copilot for efficient SQL operations.",
      image:
        "/coursera.png",
      links: [
        { icon: <Icons.globe className="h-4 w-4" />,
          href: "#", 
          title: "Show Certificate" }
      ],
    },
  ],
} as const;
