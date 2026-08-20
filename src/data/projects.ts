import type { Project } from '@/types'
import eko from '@/assets/porto/eko/eko1.png'
import eko2 from '@/assets/porto/eko/eko3.png'
import eko3 from '@/assets/porto/eko/eko4.png'
import eko9 from '@/assets/porto/eko/eko2.png'
import eko4 from '@/assets/porto/eko/eko5.png'
import eko5 from '@/assets/porto/eko/eko6.png'
import eko6 from '@/assets/porto/eko/eko7.png'
import eko7 from '@/assets/porto/eko/eko8.png'
import eko8 from '@/assets/porto/eko/eko9.png'

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
      eko3,
      eko4,
      eko5,
      eko6,
      eko7,
      eko8,
      eko9,
    ],
    url: 'https://eko-syar-web.vercel.app/',
  },
]
