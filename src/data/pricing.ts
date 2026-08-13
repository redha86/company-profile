export interface PricingPackage {
  id: string;
  category: string;
  nameKey: string;
  price: number | null;
  descriptionKey: string;
  featuresKey: string;
  pagesKey?: string;
  renewalKey?: string;
  recommended?: boolean;
  ctaKey: string;
  ctaAction?: 'contact' | 'quote';
}

export const pricingPackages: PricingPackage[] = [
  // LANDING PAGE (2 packages, 1 recommended)
  {
    id: 'landing-page-basic',
    category: 'LANDING_PAGE',
    nameKey: 'pricing.packages.landing_basic.name',
    price: 700000,
    descriptionKey: 'pricing.packages.landing_basic.desc',
    featuresKey: 'pricing.packages.landing_basic.features',
    pagesKey: 'pricing.packages.landing_basic.pages',
    renewalKey: 'pricing.packages.landing_basic.renewal',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'landing-page-pro',
    category: 'LANDING_PAGE',
    nameKey: 'pricing.packages.landing_pro.name',
    price: 1500000,
    descriptionKey: 'pricing.packages.landing_pro.desc',
    featuresKey: 'pricing.packages.landing_pro.features',
    pagesKey: 'pricing.packages.landing_pro.pages',
    renewalKey: 'pricing.packages.landing_pro.renewal',
    recommended: true,
    ctaKey: 'pricing.cta.choose'
  },
  // PORTFOLIO (3 packages, 1 recommended)
  {
    id: 'portfolio-basic',
    category: 'PORTFOLIO',
    nameKey: 'pricing.packages.portfolio_basic.name',
    price: 700000,
    descriptionKey: 'pricing.packages.portfolio_basic.desc',
    featuresKey: 'pricing.packages.portfolio_basic.features',
    pagesKey: 'pricing.packages.portfolio_basic.pages',
    renewalKey: 'pricing.packages.portfolio_basic.renewal',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'portfolio-standard',
    category: 'PORTFOLIO',
    nameKey: 'pricing.packages.portfolio_standard.name',
    price: 1500000,
    descriptionKey: 'pricing.packages.portfolio_standard.desc',
    featuresKey: 'pricing.packages.portfolio_standard.features',
    pagesKey: 'pricing.packages.portfolio_standard.pages',
    renewalKey: 'pricing.packages.portfolio_standard.renewal',
    recommended: true,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'portfolio-premium',
    category: 'PORTFOLIO',
    nameKey: 'pricing.packages.portfolio_premium.name',
    price: 2500000,
    descriptionKey: 'pricing.packages.portfolio_premium.desc',
    featuresKey: 'pricing.packages.portfolio_premium.features',
    pagesKey: 'pricing.packages.portfolio_premium.pages',
    renewalKey: 'pricing.packages.portfolio_premium.renewal',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  // COMPANY WEBSITE (3 packages, 1 recommended)
  {
    id: 'company-basic',
    category: 'COMPANY',
    nameKey: 'pricing.packages.company_basic.name',
    price: 2500000,
    descriptionKey: 'pricing.packages.company_basic.desc',
    featuresKey: 'pricing.packages.company_basic.features',
    pagesKey: 'pricing.packages.company_basic.pages',
    renewalKey: 'pricing.packages.company_basic.renewal',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'company-standard',
    category: 'COMPANY',
    nameKey: 'pricing.packages.company_standard.name',
    price: 4500000,
    descriptionKey: 'pricing.packages.company_standard.desc',
    featuresKey: 'pricing.packages.company_standard.features',
    pagesKey: 'pricing.packages.company_standard.pages',
    renewalKey: 'pricing.packages.company_standard.renewal',
    recommended: true,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'company-premium',
    category: 'COMPANY',
    nameKey: 'pricing.packages.company_premium.name',
    price: 8000000,
    descriptionKey: 'pricing.packages.company_premium.desc',
    featuresKey: 'pricing.packages.company_premium.features',
    pagesKey: 'pricing.packages.company_premium.pages',
    renewalKey: 'pricing.packages.company_premium.renewal',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  // E-COMMERCE (3 packages, 1 recommended)
  {
    id: 'ecommerce-basic',
    category: 'ECOMMERCE',
    nameKey: 'pricing.packages.ecommerce_basic.name',
    price: 5000000,
    descriptionKey: 'pricing.packages.ecommerce_basic.desc',
    featuresKey: 'pricing.packages.ecommerce_basic.features',
    pagesKey: 'pricing.packages.ecommerce_basic.pages',
    renewalKey: 'pricing.packages.ecommerce_basic.renewal',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'ecommerce-standard',
    category: 'ECOMMERCE',
    nameKey: 'pricing.packages.ecommerce_standard.name',
    price: 8500000,
    descriptionKey: 'pricing.packages.ecommerce_standard.desc',
    featuresKey: 'pricing.packages.ecommerce_standard.features',
    pagesKey: 'pricing.packages.ecommerce_standard.pages',
    renewalKey: 'pricing.packages.ecommerce_standard.renewal',
    recommended: true,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'ecommerce-premium',
    category: 'ECOMMERCE',
    nameKey: 'pricing.packages.ecommerce_premium.name',
    price: 15000000,
    descriptionKey: 'pricing.packages.ecommerce_premium.desc',
    featuresKey: 'pricing.packages.ecommerce_premium.features',
    pagesKey: 'pricing.packages.ecommerce_premium.pages',
    renewalKey: 'pricing.packages.ecommerce_premium.renewal',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  // DESIGN SERVICE (3 packages, 1 recommended)
  {
    id: 'design-basic',
    category: 'DESIGN',
    nameKey: 'pricing.packages.design_basic.name',
    price: 1000000,
    descriptionKey: 'pricing.packages.design_basic.desc',
    featuresKey: 'pricing.packages.design_basic.features',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'design-standard',
    category: 'DESIGN',
    nameKey: 'pricing.packages.design_standard.name',
    price: 2500000,
    descriptionKey: 'pricing.packages.design_standard.desc',
    featuresKey: 'pricing.packages.design_standard.features',
    recommended: true,
    ctaKey: 'pricing.cta.choose'
  },
  {
    id: 'design-premium',
    category: 'DESIGN',
    nameKey: 'pricing.packages.design_premium.name',
    price: 4500000,
    descriptionKey: 'pricing.packages.design_premium.desc',
    featuresKey: 'pricing.packages.design_premium.features',
    recommended: false,
    ctaKey: 'pricing.cta.choose'
  },
  // CUSTOM APPLICATION (1 package, custom pricing)
  {
    id: 'custom-app',
    category: 'CUSTOM',
    nameKey: 'pricing.packages.custom_app.name',
    price: null,
    descriptionKey: 'pricing.packages.custom_app.desc',
    featuresKey: 'pricing.packages.custom_app.features',
    recommended: true,
    ctaKey: 'pricing.cta.discuss',
    ctaAction: 'quote'
  }
];

export const pricingCategories = [
  { id: 'all', labelKey: 'pricing.categories.all' },
  { id: 'LANDING_PAGE', labelKey: 'pricing.categories.landing' },
  { id: 'PORTFOLIO', labelKey: 'pricing.categories.portfolio' },
  { id: 'COMPANY', labelKey: 'pricing.categories.company' },
  { id: 'ECOMMERCE', labelKey: 'pricing.categories.ecommerce' },
  { id: 'DESIGN', labelKey: 'pricing.categories.design' },
  { id: 'CUSTOM', labelKey: 'pricing.categories.custom' }
];

