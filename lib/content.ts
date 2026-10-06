export type NavLink = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  links: ProjectLink[];
};

export type Article = {
  title: string;
  topics: string[];
  desc: string;
  href?: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export const projects: Project[] = [
  {
    title: "Across",
    desc: "Index, search, and chat with your browser history and open tabs.",
    tags: ["Chrome Extension", "RAG", "AI"],
    links: [
      { label: "GitHub", href: "https://github.com/Graffian/Across" },
      { label: "Watch Demo", href: "https://www.youtube.com/watch?v=JgB8mYWmsAU" },
    ],
  },
  {
    title: "RizzUp",
    desc: "An AI wingman app for dating conversations — paste a message or screenshot and get back one context-aware reply instead of generic flirty suggestions. Uses a vision model to read the conversation and a calibrated LLM pipeline so replies actually fit the thread.",
    tags: ["Next.js", "AI Agents", "Computer Vision", "Payments"],
    links: [
      { label: "GitHub", href: "https://github.com/Graffian/rizzUP" },
      { label: "Live Site", href: "https://rizzup.antideploy.com" },
    ],
  },
  {
    title: "SelfHeal",
    desc: "A self-correcting AI agent that turns a plain-English goal into a real API request, executes it, and fixes its own failures by feeding errors back to the LLM and retrying — streaming every attempt live.",
    tags: ["Next.js", "AI Agents", "Groq", "OpenAPI"],
    links: [
      { label: "GitHub", href: "https://github.com/Graffian/SelfHeal" },
      { label: "Live Site", href: "https://self-heal-sigma.vercel.app/" },
      { label: "Watch Demo", href: "https://www.youtube.com/watch?v=pwOvrO10c5g" },
    ],
  },
  {
    title: "iOS Game Automation Bots",
    desc: "Two paid iOS automation bots for Triumph.gg — a blackjack bot using computer vision for card/state detection, and a word-link solver using OpenCV template matching and DFS.",
    tags: ["Python", "OpenCV", "Computer Vision", "WebDriverAgent"],
    links: [
      { label: "GitHub — blackjack", href: "https://github.com/Graffian/triul_blackjack" },
      { label: "GitHub — word-link", href: "https://github.com/Graffian/word_link" },
    ],
  },
];

export const articles: Article[] = [
  {
    title: "Hotspots, Decoded",
    topics: ["Networking"],
    desc: "A breakdown of the networking layer behind mobile hotspots — from local IP assignment and ARP resolution to how CGNAT lets your ISP route your traffic to the internet.",
    href: "https://medium.com/@ayushkantworks/what-really-happens-when-you-connect-to-a-mobile-hotspot-220f2db75be4",
  },
  {
    title: "MITM’ing My Own Hinge Traffic",
    topics: ["Security", "Proxies"],
    desc: "Reverse-engineering Hinge’s traffic using a MITM proxy — how TLS interception, fake certs, and CA trust actually work under the hood.",
    href: "https://medium.com/@ayushkantworks/how-i-intercepted-my-own-hinge-traffic-a-deep-dive-into-mitm-proxies-30d1b629959c",
  },
  {
    title: "The Titanic Disaster: How a Tragedy Rewired Global Communications",
    topics: ["Networking", "History"],
    desc: "How the Titanic disaster exposed weaknesses in early wireless communication — and how the aftermath, amateur radio experimentation, and the discovery of long-distance shortwave communication helped reshape global communications.",
    href: "https://medium.com/@ayushkantworks/the-titanic-disaster-how-a-tragedy-rewired-global-communications-8fa4b0dc22a7",
  },
];
