import type { Skill } from '../../prisma/generated/client'

export const skillsData: Omit<Skill, 'id'>[] = [
  // Languages
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },
  { name: 'Go', category: 'Languages' },
  { name: 'C', category: 'Languages' },

  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'Astro', category: 'Frameworks' },
  { name: 'NestJS', category: 'Frameworks' },
  { name: 'Remix', category: 'Frameworks' },
  { name: 'Vue.js', category: 'Frameworks' },
  { name: 'Tailwind', category: 'Frameworks' },

  // Infrastructure & Tooling
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'GCP', category: 'Infrastructure' },
  { name: 'PostgreSQL', category: 'Infrastructure' },
  { name: 'Prisma', category: 'Infrastructure' },
  { name: 'Temporal', category: 'Infrastructure' },
  { name: 'Vercel', category: 'Infrastructure' },
  { name: 'Terraform', category: 'Infrastructure' },
  { name: 'Git', category: 'Infrastructure' },

  // AI & LLMs
  { name: 'LLM orchestration', category: 'AI & LLMs' },
  { name: 'Prompt engineering', category: 'AI & LLMs' },
  { name: 'Voice agents (STT/TTS)', category: 'AI & LLMs' },
  { name: 'AI SDKs', category: 'AI & LLMs' },
  { name: 'Model Context Protocol', category: 'AI & LLMs' },
  { name: 'AI evaluation & guardrails', category: 'AI & LLMs' },

  // Design & Product
  { name: 'Prototyping', category: 'Design & Product' },
  { name: 'Design systems', category: 'Design & Product' },
  { name: 'Component architecture', category: 'Design & Product' },
  { name: 'UI/UX', category: 'Design & Product' },
  { name: 'Product strategy', category: 'Design & Product' },
  { name: 'Stakeholder management', category: 'Design & Product' },
]
