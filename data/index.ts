import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Collaboration is Key",
  description: "I value transparent communication and believe in working closely with teams or clients for the best outcomes.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/dp.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Timezone? No Problem.",
    description: "I’m adaptable to global time zones and always ensure smooth and responsive communication.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Always Evolving with My Tech Stack",
    description: "Python, AI, Node.js and more, I continuously refine my skills to build smarter, scalable solutions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate Developer & Tech Explorer",
    description: "Driven by curiosity and creativity, I love exploring the latest in AI, backend systems, and clean code practices.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "My Development Mindset",
    description: "Clean code, smart systems. I build scalable, efficient, and intelligent backend architectures using Node.js and Python.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Collaborate?",
    description: "Let’s bring your idea to life — whether it’s a startup MVP, automation tool, or AI-powered product.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Billing Data Analysis in Healthcare",
    des: "An AI-powered system for auditing and analyzing healthcare billing data using Python, Pandas, and Gemini AI, with automated insights and visualizations.",
    img: "/health-care.jpg",
    iconLists: ["/python.svg", "/gemini-ai-32.svg", "/ml.png", "/pandas.svg"],
    link: "https://github.com/pawardhaval15",
    sourceCode: "https://github.com/pawardhaval15/Billing-Data-Analysis-AI-Powered",
  },
  {
    id: 2,
    title: "Human Detection & Tracking System",
    des: "Real-time human detection using SSD and Haar Cascade integrated with TensorFlow and OpenCV, featuring a custom Tkinter-based GUI.",
    img: "/S1.png",
    iconLists: ["/python.svg", "/gemini-ai-32.svg", "/ml.png", "/pandas.svg"],
    link: "https://github.com/pawardhaval15",
    sourceCode: "https://github.com/pawardhaval15/GUI-Based-Human-Detection-Tracking-System-",
  },
  {
    id: 3,
    title: "AI-Powered 3D Model Customization",
    des: "A web-based platform to upload, view, and personalize 3D models in real-time with support for textures, transformations, and exporting using Three.js, React, Flask, and Node.js.",
    img: "/GrookOptimized-unscreen.gif",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/3d-model-96.png"],
    link: "https://github.com/pawardhaval15",
    sourceCode: "https://github.com/pawardhaval15/AI-Powered-Model-Customization",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://app-iphone.netlify.app",
  //   sourceCode: "https://github.com/pawardhaval15/apple-clone",
  // },
] as const;

// export const testimonials = [
//   {
//     quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ] as const;

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ] as const;

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer – TechTech",
    desc: "Currently working as a Backend Developer at TechTech, where I design and develop robust backend systems using Node.js and Python. I actively integrate AI/ML models to enhance platform intelligence and leverage MySQL for efficient data management and querying.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/pawardhaval15",
  },
  // {
  //   name: "Twitter",
  //   img: "/twit.svg",
  //   link: "https://twitter.com/TechnicalShubam",
  // },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "http://www.linkedin.com/in/dhaval-pawar-7b556620b",
  },
] as const;

export const techStack = {
  stack1: ["Python", "Node.js", "React.js"],
  stack2: [ "AI/ML", "Flask", "MySQL"],
} as const;
