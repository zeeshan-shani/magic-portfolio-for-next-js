import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Zee",
  lastName: "Shan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Engineer",
  avatar: "/images/avatar-1.png",
  email: "zeedev063@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/zeeshan-shani",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammadzeeshan333/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Festivo</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Zee, a Full-Stack Engineer at &nbsp;
      {/* <Logo
        icon={false}
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      /> */}
      <strong className="text-primary">Upwork</strong>. , where I craft
      intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.firstName}`,
  description: `Meet ${person.firstName}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/zee-dev-h0guki/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Zee, a passionate Full-Stack Engineer specializing in building
        modern, scalable SaaS products. I turn ideas into powerful web
        applications with seamless frontend and backend experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Self-Employed",
        timeframe: "2024 - Present",
        role: "Full-Stack Developer & Product Engineer",
        achievements: [
          <>
            Partnered with entrepreneurs, startups, coaches, and businesses
            worldwide to deliver high-performance SaaS platforms, websites,
            booking systems, and custom applications tailored to their vision.
          </>,
          <>
            Built and launched dozens of full-scale products through LinkedIn
            outreach, client referrals, and Upwork, establishing a trusted
            reputation for engineering excellence and product innovation.
          </>,
          <>
            Specialized in end-to-end digital product development — from
            intuitive UI/UX design to scalable backend architectures — helping
            businesses scale faster and drive real-world impact.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-bobby.png",
            alt: "Independent Client Projects",
            width: 18,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-bobby-1.png",
            alt: "Independent Client Projects",
            width: 18,
            height: 9,
          },
        ],
      },
      {
        company: "Octathorn",
        timeframe: "2023 - 2025",
        role: "Senior Full-Stack Engineer",
        achievements: [
          <>
            Spearheaded the development of multiple SaaS platforms, including
            enterprise-grade chat applications, booking systems, and complex LMS
            MVPs, driving major innovation across Octathorn's product suite.
          </>,
          <>
            Architected scalable, high-performance backend systems and dynamic
            frontends, delivering critical products that accelerated client
            adoption by over 60%.
          </>,
          <>
            Led end-to-end development on mission-critical projects,
            collaborating closely with cross-functional teams to build next-gen
            digital experiences.
          </>,
          <>
            Engineered complex, high-availability platforms that handled
            thousands of concurrent users, positioning Octathorn as a leader in
            digital transformation solutions.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-octa.png",
            alt: "Independent Client Projects",
            width: 18,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-octa-1.png",
            alt: "Independent Client Projects",
            width: 18,
            height: 9,
          },
        ],
      },
      {
        company: "Her Nation Global",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Led the architectural design and user experience strategy for
            multiple SaaS products, ensuring seamless integration between
            complex backends and intuitive frontends.
          </>,
          <>
            Developed cutting-edge platforms including dynamic booking systems,
            chat applications, and scalable LMS prototypes, significantly
            enhancing the digital footprint of Her Nation Global.
          </>,
          <>
            Collaborated across engineering, product, and design teams to
            deliver high-impact digital solutions, boosting platform engagement
            and client retention by over 50%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-hernation.png",
            alt: "Her Nation Global Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-hernation-1.png",
            alt: "Her Nation Global Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Engineering and Technology (UET)",
        description: <>Studied computer science.</>,
      },
      {
        name: "Udemy, Inc.",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js, React.js, Remix",
        description: (
          <>
            Specialized in building fast, scalable, and high-quality web
            applications using modern frontend technologies.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-next.png",
            alt: "Frontend Development Showcase",
            width: 18,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Cover-next-1.png",
            alt: "Frontend Development Showcase",
            width: 18,
            height: 9,
          },
        ],
      },
      {
        title: "Tailwind CSS, Material UI, Aceternity UI, Shadcn UI, Bootstrap",
        description: (
          <>
            Skilled in modern UI libraries and frameworks to craft beautiful,
            responsive, and highly functional user interfaces with precision and
            speed.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-tailwind.png",
            alt: "UI Libraries Showcase",
            width: 18,
            height: 11,
          },
          {
            src: "/images/projects/project-01/cover-tailwind-1.png",
            alt: "UI Libraries Showcase",
            width: 18,
            height: 11,
          },
        ],
      },
      {
        title: "Node.js, Express.js, NestJS, PostgreSQL, MongoDB",
        description: (
          <>
            Building powerful, scalable backends with Node.js frameworks and
            modern databases — integrating Firebase, push notifications, wallet
            systems, and real-time features with precision.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-node.jpg",
            alt: "Backend Development Showcase",
            width: 16,
            height: 12,
          },
          {
            src: "/images/projects/project-01/cover-node-1.png",
            alt: "Backend Development Showcase",
            width: 16,
            height: 12,
          },
        ],
      },
      {
        title: "AWS, S3, EC2, RDS, Lambda, Amplify",
        description: (
          <>
            Experienced in managing cloud infrastructure with AWS — handling
            deployments, load balancing, pipelines, CloudFront distributions, S3
            storage, email services, and scalable backend systems.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-aws.png",
            alt: "DevOps & Cloud Showcase",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Integrations & Advanced Features",
        description: (
          <>
            Integrated complex services like Stripe, PayPal, Google Wallet, and
            Apple Wallet for seamless payments, built real-time GPS tracking,
            real-time chat systems, Whisper model AI integration, advanced form
            builders, split payments, organizational cuts, and more — delivering
            complete, production-grade solutions.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-integration.png",
            alt: "Advanced Features Showcase",
            width: 16,
            height: 10,
          },
        ],
      },

      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.firstName} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.firstName}`,
  description: `Design and dev projects by ${person.firstName}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.firstName}`,
  description: `A photo collection by ${person.firstName}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/project-01/cover-bobby.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/cover-bobby-1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/cover-hassan-1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/cover-hassan-3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cover-tech.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cover-tech-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cover-tech-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cover-tech-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
