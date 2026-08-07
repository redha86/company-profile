import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Industries = lazy(() => import('./pages/Industries'))
const Process = lazy(() => import('./pages/Process'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<PageLoader />}><Home /></Suspense>,
  },
  {
    path: '/about',
    element: <Suspense fallback={<PageLoader />}><About /></Suspense>,
  },
  {
    path: '/services',
    element: <Suspense fallback={<PageLoader />}><Services /></Suspense>,
  },
  {
    path: '/portfolio',
    element: <Suspense fallback={<PageLoader />}><Portfolio /></Suspense>,
  },
  {
    path: '/industries',
    element: <Suspense fallback={<PageLoader />}><Industries /></Suspense>,
  },
  {
    path: '/process',
    element: <Suspense fallback={<PageLoader />}><Process /></Suspense>,
  },
  {
    path: '/careers',
    element: <Suspense fallback={<PageLoader />}><Careers /></Suspense>,
  },
  {
    path: '/contact',
    element: <Suspense fallback={<PageLoader />}><Contact /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense fallback={<PageLoader />}><NotFound /></Suspense>,
  },
])

function App() {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
      </Helmet>
      <RouterProvider router={router} />
    </>
  )
}

export default App
