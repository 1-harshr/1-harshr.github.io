// Everything you see on the site lives here.
// Edit this file to add projects, poems, travel photos or update links.

export type Job = {
  company: string;
  role: string;
  when: string;
  about: string;
};

export type Project = {
  name: string;
  repo: string;
  platforms: string;
  description: string;
  tools?: string;
  featured?: boolean;
};

export type TravelPhoto = {
  place: string;
  year: string;
  /** Path inside /public, e.g. "/travel/kedarkantha.jpg". Leave empty for a placeholder. */
  src?: string;
  /** Describes the photo for screen readers. */
  alt?: string;
  /** Shape of the tile in the gallery. */
  ratio: "3/4" | "1/1" | "4/5" | "3/2" | "2/3" | "4/3" | "1/2";
};

export type Poem = {
  title: string;
  year: string;
  lines: string[];
};

export const profile = {
  firstName: "Harsh",
  lastName: "Ranjan",
  tagline:
    "Hey, I’m Harsh. I build the server, the API, and the app in your pocket, then go climb a mountain to debug.",
  taglineAside: "Mobile is my home turf. IIT Kanpur, 2024.",
  description:
    "Harsh Ranjan, software engineer building complete products, from backend to mobile. IIT Kanpur, 2024.",
  photo: {
    src: "/me.jpg",
    alt: "Harsh sitting on a stone wall in front of a green Himalayan ridge under a clear blue sky",
  },
};

export const about = {
  paragraphs: [
    "I’m an engineer who builds complete solutions: the backend, the APIs, and the apps people actually hold in their hands. I like owning the whole path, from the database schema to the last animation on screen.",
    "Mobile is my specialization. I work across native Android with Jetpack Compose, native iOS with Swift, and Kotlin Multiplatform when one codebase should serve both. On the server side I build with Kotlin and Spring, TypeScript and Python.",
    "I graduated from IIT Kanpur in 2024. Away from the keyboard I’m at the gym or on the road, often somewhere in the mountains, which is how half my side projects start.",
  ],
  facts: [
    { label: "Studied at", value: "IIT Kanpur" },
    { label: "Focus", value: "End-to-end products, mobile first" },
  ],
};

export const jobs: Job[] = [
  {
    company: "Sortly",
    role: "Software Engineer",
    when: "Now",
    about: "Inventory management, used by teams to track everything they own",
  },
  {
    company: "ixigo",
    role: "Software Engineer 2",
    when: "Aug '24 - Feb '26",
    about: "Curated a net new AI-powered travel search experience for ixigo",
  },
];

const gh = "https://github.com/1-harshr";

export const projects: Project[] = [
  {
    name: "PeakBud",
    repo: `${gh}/PeakBud`,
    platforms: "Android",
    description:
      "A hiking companion that tells you which mountain you’re looking at, using local elevation and peak data through the camera.",
    tools: "Jetpack Compose, CameraX, Coroutines, Room, DataStore",
    featured: true,
  },
  {
    name: "notesKMP",
    repo: `${gh}/notesKMP`,
    platforms: "Android, iOS, Server",
    description:
      "A complete notes app for both platforms plus its backend, written entirely in Kotlin Multiplatform.",
  },
  {
    name: "FitTrack",
    repo: `${gh}/FitTrack`,
    platforms: "Android",
    description: "An end-to-end gym solution on mobile, built in Kotlin.",
  },
  {
    name: "GymManagementBackend",
    repo: `${gh}/GymManagementBackend`,
    platforms: "Backend",
    description:
      "Custom gym management software that runs the whole operation on the server side, written in TypeScript.",
  },
  {
    name: "WakeFit",
    repo: `${gh}/WakeFit`,
    platforms: "Android, iOS",
    description:
      "An alarm that only switches off after you do your pushups. Built with Compose Multiplatform.",
  },
  {
    name: "Gamopedia",
    repo: `${gh}/Gamopedia`,
    platforms: "Android, iOS",
    description: "A game encyclopedia sharing UI and logic across platforms with CMP and KMM.",
  },
  {
    name: "WeatherApp",
    repo: `${gh}/WeatherApp`,
    platforms: "iOS",
    description: "A clean, native weather app built with Swift 6.",
  },
  {
    name: "RentalConnect",
    repo: `${gh}/RentalConnect`,
    platforms: "Android",
    description:
      "Connects property owners with their tenants, from listings to day-to-day communication.",
  },
];

export const stack = [
  { group: "Android", items: "Kotlin, Jetpack Compose, Coroutines, Room, DataStore, CameraX" },
  { group: "iOS", items: "Swift 6, native iOS development" },
  { group: "Cross-platform", items: "Kotlin Multiplatform, Compose Multiplatform" },
  { group: "Backend", items: "Kotlin and Spring, TypeScript, Python" },
];

// Drop photos into /public/travel and set `src` to show them.
export const travel: TravelPhoto[] = [
  {
    place: "Kedarnath",
    year: "Oct 2026",
    src: "/travel/kedarnath.jpg",
    alt: "Harsh stretching in front of a snow and rock wall above Kedarnath",
    ratio: "3/4",
  },
  {
    place: "Goa",
    year: "Jul 2026",
    src: "/travel/goa.jpg",
    alt: "Harsh and three friends grinning with fresh coconuts at a roadside stall in Goa",
    ratio: "4/3",
  },
  {
    place: "Triund",
    year: "Apr 2026",
    src: "/travel/triund.jpg",
    alt: "Harsh silhouetted on a boulder, pointing up at the snow-covered Dhauladhar ridge",
    ratio: "3/4",
  },
  {
    place: "Kareri Lake",
    year: "Apr 2026",
    src: "/travel/kareri.jpg",
    alt: "Harsh chatting with a friend on the shore of Kareri Lake, snowy slopes behind",
    ratio: "3/4",
  },
  {
    place: "Dayara Bugyal",
    year: "Oct 2025",
    src: "/travel/dayara-bugyal.jpg",
    alt: "Harsh with a trekking pole on the Dayara meadow, a line of snow peaks behind",
    ratio: "3/4",
  },
  {
    place: "Thailand",
    year: "Feb 2025",
    src: "/travel/thailand.jpg",
    alt: "Harsh wading ankle-deep at a hazy beach in Thailand",
    ratio: "1/2",
  },
  {
    place: "Manali",
    year: "Feb 2025",
    src: "/travel/manali.jpg",
    alt: "Snow-lit peaks at the end of a dark valley in Manali",
    ratio: "4/3",
  },
  {
    place: "Nag Tibba",
    year: "Nov 2024",
    src: "/travel/nagtibba.jpg",
    alt: "A hand-painted van and prayer flags at a mountain viewpoint near Nag Tibba",
    ratio: "4/3",
  },
];

// Add poems here; the section and its nav link show up once there's at least one.
export const poems: Poem[] = [];

export const random = [
  { label: "Currently", value: "Hitting the gym regularly and travelling a lot" },
  { label: "Training", value: "Logging workouts on Strava" },
  { label: "Building", value: "Keeping my GitHub active with side projects" },
  { label: "Fun fact", value: "I wrote an alarm I can’t snooze without doing pushups." },
];

export const contact = {
  heading: "Let’s build something.",
  email: "theharsh68@gmail.com",
  resume: "https://drive.google.com/file/d/1of60OYFuQFKKMEHCOr_0WKzLOI2Q87im/view?usp=sharing",
  links: [
    { label: "GitHub", href: gh },
    { label: "Strava", href: "https://strava.app.link/3ok382Jwh7b" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harshr20/" },
    { label: "X", href: "https://x.com/roamingHarsh" },
    { label: "Medium", href: "https://medium.com/@theharsh68" },
  ],
};
