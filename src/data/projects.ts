import type { Project } from '@/types'
import eko from '@/assets/images/eko1.png'
import eko2 from '@/assets/images/eko2.png'

export const projects: Project[] = [
  {
    id: 'eko-syariah',
    title: 'Platform LMS EkoSyar.id',
    description: 'Sistem manajemen pembelajaran komprehensif kejuruan yang dimiliki oleh Universitas Internasional Semen Indonesia (UISI)',
    category: 'web',
    tech: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    gradient: 'from-indigo-400 to-blue-400',
    images: [
      eko,
      eko2,
    ],
    url: 'https://eko-syar-web.vercel.app/',
  },
]
