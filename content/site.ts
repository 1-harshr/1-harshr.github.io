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
  /** Shape of the tile in the gallery. */
  ratio: "3/4" | "1/1" | "4/5" | "3/2" | "2/3" | "4/3";
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
    "I graduated from IIT Kanpur in 2024. Away from the keyboard I’m usually somewhere in the mountains, which is how half my side projects start.",
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
    when: "Previously",
    about: "Travel booking for trains, flights and buses across India",
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
  { place: "Place name", year: "year", ratio: "3/4" },
  { place: "Place name", year: "year", ratio: "1/1" },
  { place: "Place name", year: "year", ratio: "4/5" },
  { place: "Place name", year: "year", ratio: "3/2" },
  { place: "Place name", year: "year", ratio: "2/3" },
  { place: "Place name", year: "year", ratio: "4/3" },
];

export const poems: Poem[] = [
  {
    title: "Title",
    year: "year",
    lines: [
      "The first line of a poem",
      "sits here, waiting its turn,",
      "a quiet placeholder",
      "for words still to come.",
    ],
  },
  {
    title: "Title",
    year: "year",
    lines: [
      "A second poem goes here,",
      "short or long, in any language,",
      "set in this same gentle type.",
    ],
  },
];

export const random = [
  { label: "Currently", value: "Building something new in Kotlin" },
  { label: "Reading", value: "Book title goes here" },
  { label: "Listening to", value: "Song or podcast goes here" },
  { label: "Fun fact", value: "I wrote an alarm I can’t snooze without doing pushups." },
];

export const contact = {
  heading: "Let’s build something.",
  email: "theharsh68@gmail.com",
  // Replace "#" with your links when ready.
  resume: "#",
  links: [
    { label: "GitHub", href: gh },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],
};
