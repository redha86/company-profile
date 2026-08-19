import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SITE_URL = 'https://orren.my.id'
const SITE_NAME = 'ORREN Business Technology'
const THEME_COLOR = '#DC4D01'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`
const BUSINESS_EMAIL = 'hello@orren.my.id'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalPath?: string
  ogImage?: string
  ogType?: string
  breadcrumbs?: BreadcrumbItem[]
  noindex?: boolean
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage,
  ogType = 'website',
  breadcrumbs,
  noindex = false,
}: SEOProps) => {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('id') ? 'id' : 'en'
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`
  const image = ogImage || DEFAULT_OG_IMAGE

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: 'ORREN',
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    image: DEFAULT_OG_IMAGE,
    description: 'Software house di Indonesia - jasa pembuatan website, web development, mobile app development, custom software development, enterprise software, UI UX design, digital transformation, cloud integration, dan teknologi konsultan.',
    sameAs: [
      'https://www.linkedin.com/company/orren',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: BUSINESS_EMAIL,
      contactType: 'customer service',
      availableLanguage: ['English', 'Indonesian'],
      areaServed: 'ID',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: 'ORREN',
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    image: DEFAULT_OG_IMAGE,
    description: 'Software house di Indonesia - jasa pembuatan website, web development, mobile app development, custom software development, enterprise software, UI UX design, dan digital transformation.',
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`,
    },
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    priceRange: '$$',

    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software House Indonesia - Jasa Pembuatan Website',
          serviceType: 'Web Development',
          areaServed: 'ID',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development Indonesia',
          serviceType: 'Mobile App Development',
          areaServed: 'ID',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          serviceType: 'Custom Software Development',
          areaServed: 'ID',
        },
      },
    ],
  }

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['en', 'id'],
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbJsonLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          ...breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
          })),
        ],
      }
    : null

  const alternateUrl = () => `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`

  return (
    <Helmet>
      <html lang={lang} />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="ORREN" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
      <meta name="theme-color" content={THEME_COLOR} />
      <link rel="canonical" href={canonicalUrl} />

      <link rel="alternate" hrefLang="en" href={alternateUrl()} />
      <link rel="alternate" hrefLang="id" href={alternateUrl()} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrl()} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />
      <meta property="og:locale:alternate" content={lang === 'id' ? 'en_US' : 'id_ID'} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@orren" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="msapplication-TileColor" content={THEME_COLOR} />

      <meta name="geo.region" content="ID" />
      <meta name="business:contact_data:country_name" content="Indonesia" />
      <meta name="business:contact_data:email" content={BUSINESS_EMAIL} />

      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteJsonLd)}
      </script>
      {breadcrumbJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
