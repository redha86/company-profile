import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SITE_URL = 'https://orren.my.id'
const SITE_NAME = 'ORREN Business Technology'
const THEME_COLOR = '#DC4D01'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`
const BUSINESS_PHONE = '+62 21-0000-0000'
const BUSINESS_EMAIL = 'hello@orren.my.id'
const BUSINESS_ADDRESS = 'Jakarta, Indonesia'

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
      'https://twitter.com/orren',
      'https://www.facebook.com/orren',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      contactType: 'customer service',
      availableLanguage: ['English', 'Indonesian'],
      areaServed: 'ID',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressRegion: 'Jakarta',
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
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressRegion: 'Jakarta',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.2088,
      longitude: 106.8456,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`,
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
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
      <meta name="twitter:creator" content="@orren" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="msapplication-TileColor" content={THEME_COLOR} />

      <meta name="geo.region" content="ID-JK" />
      <meta name="geo.placename" content="Jakarta" />
      <meta name="geo.position" content="-6.2088;106.8456" />
      <meta name="ICBM" content="-6.2088, 106.8456" />

      <meta name="business:contact_data:street_address" content="Jakarta" />
      <meta name="business:contact_data:locality" content="Jakarta" />
      <meta name="business:contact_data:region" content="Jakarta" />
      <meta name="business:contact_data:postal_code" content="10110" />
      <meta name="business:contact_data:country_name" content="Indonesia" />
      <meta name="business:contact_data:email" content={BUSINESS_EMAIL} />
      <meta name="business:contact_data:phone_number" content={BUSINESS_PHONE} />
      <meta name="place:location:latitude" content="-6.2088" />
      <meta name="place:location:longitude" content="106.8456" />
      <meta name="place:location:region" content="ID-JK" />

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
