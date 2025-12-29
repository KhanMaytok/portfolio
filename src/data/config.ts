const config = {
  title: "Giancarlo Ventura | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Giancarlo, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Giancarlo, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Giancarlo",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
    "Python",
    "Django"
  ],
  author: "Giancarlo Ventura",
  email: "giancarlo@maytok.com",
  site: "https://maytok.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/KhanMaytok",
    linkedin: "https://www.linkedin.com/in/giancarlo-ventura/",
    instagram: "https://www.instagram.com/cafecito.con.miel",
    facebook: "https://www.facebook.com/KhanMaytok/",
    github: "https://github.com/KhanMaytok",
  },
};
export { config };
