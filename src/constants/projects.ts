export interface Project {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  deployedLink: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "Spenzly",
    description: "A modern expense tracking application that helps users manage their finances with intuitive features and real-time analytics.",
    image: "/images/projects/spenzly.png",
    githubLink: "https://github.com/ayeman-07/Spenzly",
    deployedLink: "https://spenzly.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"]
  },
  {
    name: "ArtHaat",
    description: "An e-commerce platform for artists to showcase and sell their artwork, featuring secure payments and artist profiles.",
    image: "/images/projects/arthaat.png",
    githubLink: "https://github.com/ayeman-07/ArtHaat",
    deployedLink: "https://arthaat-frontend.vercel.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    name: "ArtHaat Vendor Portal",
    description: "A dedicated portal for artists to manage their products, orders, and sales analytics on the ArtHaat platform.",
    image: "/images/projects/arthaat-vendor.png",
    githubLink: "https://github.com/ayeman-07/ArtHaat-Vendor",
    deployedLink: "https://arthaat-admin.vercel.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    name: "AcadMate",
    description: "A comprehensive academic management system for students to track assignments, grades, and course materials.",
    image: "/images/projects/acadmate.png",
    githubLink: "https://github.com/ayeman-07/AcadMate",
    deployedLink: "https://github.com/ayeman-07/AcadMate",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  }
];

export default projects; 