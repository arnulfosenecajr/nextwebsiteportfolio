export const profile = {
  name: "Arnulfo D. Seneca Jr.",
  title: "Senior Web Developer",
  summary:
    "Senior Web Developer with 10+ years of experience, proficient in full-stack development. Strong background in SEO-driven web builds, CMS platforms, and eCommerce implementations.",
  location: "Cebu City, Cebu 6000, Philippines",
  addressLine: "Nangka St., Cebu City, Cebu 6000",
  phone: "09176359284",
  email: "arnulfojr.seneca181280@gmail.com",
  linkedin: "https://www.linkedin.com/in/arnulfo-jr-seneca-607400121/",
  skills: {
    core: ["HTML", "CSS", "JavaScript", "PHP"],
    phpFrameworks: ["CodeIgniter", "Kohana", "PhalconPHP"],
    cms: ["WordPress", "Webflow", "CraftCMS", "Drupal"],
    ecommerce: ["WooCommerce", "Shopify"],
  },
  experience: [
    {
      from: "2023-10",
      to: "Present",
      role: "Lead Web Developer",
      company: "Freelance (UK SEO Company)",
      highlights: [
        "Led delivery of SEO-focused websites and landing pages with performance and conversion in mind.",
        "Built and maintained CMS/eCommerce sites, including WordPress and Shopify implementations.",
        "Handled end-to-end delivery: scoping, build, QA, launch, and post-launch improvements.",
      ],
    },
    {
      from: "2017-03",
      to: "2023-09",
      role: "Web Development Engineer",
      company: "Digital Search Group Limited (SEO Company)",
      highlights: [
        "Developed and maintained SEO-centric websites and campaigns with technical SEO best practices.",
        "Collaborated with SEO specialists and stakeholders to implement structured content and performance improvements.",
        "Worked across multiple CMS stacks and custom PHP builds.",
      ],
    },
    {
      from: "2016-06",
      to: "2017-03",
      role: "Senior Web Developer",
      company: "Delonix Marketing Corporation",
      highlights: [
        "Built marketing sites and landing pages with strong UX and measurable conversion goals.",
        "Delivered reliable PHP-based features and integrations for client sites.",
      ],
    },
    {
      from: "2015-05",
      to: "2016-03",
      role: "Senior Web Developer",
      company: "Webcadex Inc.",
      highlights: [
        "Developed and maintained client web projects with PHP and modern front-end practices.",
        "Improved maintainability through reusable components and consistent build patterns.",
      ],
    },
    {
      from: "2009-09",
      to: "2015-05",
      role: "Senior PHP Developer",
      company: "Smart Traffic (SEO Company)",
      highlights: [
        "Delivered PHP applications and websites in an SEO-driven environment.",
        "Implemented enhancements for performance, maintainability, and scalability across projects.",
      ],
    },
    {
      from: "2008-01",
      to: "2009-05",
      role: "Senior Computer Programmer",
      company: "POS Technology Solutions",
      highlights: [
        "Developed business software features and maintained production systems.",
      ],
    },
    {
      from: "2007-10",
      to: "2008-01",
      role: "Senior Computer Programmer",
      company: "International Data Conversion Solutions, Inc.",
      highlights: [
        "Contributed to software development and data-related programming tasks.",
      ],
    },
  ],
  education: [
    {
      school: "AMA University",
      location: "Tacloban City, Leyte",
      program: "BS Computer Science",
      year: "SY 2004-2005",
    },
    {
      school: "AMA Computer Learning Center",
      location: "Tacloban City, Leyte",
      program: "2-Year Course: System Design and Programming",
      year: "SY 2000-2001",
    },
  ],
  projects: [
    {
      name: "Soil Sisters",
      url: "https://soilsisters.co.uk/",
      tags: ["Website", "SEO", "CMS"],
      description:
        "SEO-friendly website build and improvements focusing on performance, structure, and content presentation.",
    },
    {
      name: "Exposed Media",
      url: "https://www.exposedmedia.org/",
      tags: ["Website", "SEO"],
      description:
        "Content-focused website delivery with an emphasis on speed, structure, and maintainability.",
    },
    {
      name: "Just Links",
      url: "https://just-links.io/",
      tags: ["Landing Page", "SEO"],
      description:
        "Conversion-focused web presence aligned with SEO requirements and clean UI.",
    },
    {
      name: "Express Fencing Tree Services",
      url: "https://expressfencingtreeservices.co.uk/",
      tags: ["Website", "SEO"],
      description:
        "Small business website build emphasizing clarity, performance, and search visibility.",
    },
  ],
} as const;
