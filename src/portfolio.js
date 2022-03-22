const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.amanjha.dev',
  title: 'AJ',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aman',
  role: 'Founder of Tangie',
  description:
    "Hey! I'm working on tangie.ai, a AI that can instantly answer StackOverflow questions.",
  rosie: 'https://www.tangie.ai',
  social: {
    linkedin: 'https://linkedin.com/in/JhaAman',
    github: 'https://github.com/JhaAman',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Therapy Matching Platform',
  //   description:
  //     'I wanted a better way to find a therapist, so I built "Airbnb" for therapy',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'English to Bash Terminal',
  //   description:
  //     "Ever didn't know a bash command? Just type it in English, and we'll translate it to bash for you.",
  //   stack: ['Python', 'OpenAI GPT-3'],
  //   sourceCode: 'https://github.com/JhaAman/codex-cli',
  //   // livePreview: 'https://www.rosieos.com',
  // },
  // {
  //   name: 'Corporate Hierarchy App',
  //   description:
  //     'See your company structure in dynamic graph with colorful detail.',
  //   stack: ['NestJS', 'Angular', 'MongoDB', 'Heroku', 'AdobeXD'],
  //   sourceCode: 'https://github.com/CodyRichter/ultimate-orgchart',
  //   // livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'Next.js',
  'Tailwindcss',
  'Portfolio templates',
  'Electron',
  'Typescript',
  'Rust',
  'Hydroflasks',
  'Vercel',
  'Sketching on my iPad',
  'Supabase',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hey@amanjha.dev',
}

export { header, about, projects, skills, contact }
