const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'i18n', 'locales');

const descs = {
  en: {
    home: 'ORREN is a software house in Indonesia offering web development, mobile apps, enterprise software, UI/UX design, and digital transformation.',
    about: 'Learn about ORREN, a software house in Indonesia specializing in enterprise software, web development, and digital transformation.',
    services: 'Explore ORREN services: custom software, web development, mobile apps, UI/UX design, system integration, and cloud solutions for your business.',
    portfolio: 'View ORREN portfolio of enterprise software, healthcare platforms, e-commerce apps, and mobile solutions built for clients worldwide.',
    industries: 'ORREN serves healthcare, education, logistics, retail, manufacturing, and startups with tailored enterprise software and digital solutions.',
    process: 'Discover ORREN proven 7-step development process from discovery to deployment, delivering software on time and on budget.',
    contact: 'Contact ORREN, a software house in Indonesia, for enterprise software, web development, mobile apps, cloud, and digital transformation projects.',
    careers: 'Join ORREN team of engineers, designers, and consultants building enterprise software, web, mobile, and cloud solutions in Indonesia.',
    notFound: 'The page you are looking for could not be found. Explore ORREN software, web, mobile, cloud, and UI/UX services.',
  },
  id: {
    home: 'ORREN adalah software house di Indonesia untuk jasa pembuatan website, web development, mobile app, enterprise software, dan digital transformation.',
    about: 'Kenali ORREN, software house di Indonesia yang mempercepat transformasi digital dengan solusi enterprise software, web, mobile, dan cloud.',
    services: 'Jelajahi layanan ORREN: perangkat lunak kustom, pengembangan web, aplikasi mobile, desain UI/UX, integrasi sistem, dan solusi cloud.',
    portfolio: 'Lihat portofolio ORREN: enterprise software, platform kesehatan, aplikasi e-commerce, dan solusi mobile untuk klien di seluruh dunia.',
    industries: 'ORREN melayani industri kesehatan, pendidikan, logistik, ritel, manufaktur, dan startup dengan enterprise software dan solusi digital.',
    process: 'Temukan proses pengembangan 7 langkah ORREN yang terbukti, dari discovery hingga deployment, tepat waktu dan sesuai anggaran.',
    contact: 'Hubungi ORREN, software house di Indonesia, untuk proyek enterprise software, pengembangan web, aplikasi mobile, cloud, dan transformasi digital.',
    careers: 'Bergabunglah dengan tim ORREN: insinyur, desainer, dan konsultan yang membangun enterprise software, web, mobile, dan solusi cloud.',
    notFound: 'Halaman yang Anda cari tidak ditemukan. Jelajahi layanan software, web, mobile, cloud, dan UI/UX dari ORREN.',
  }
};

const titles = {
  en: {
    home: 'Software House Indonesia | ORREN Business Technology',
    about: 'About ORREN | ORREN Business Technology',
    services: 'Services | ORREN Business Technology',
    portfolio: 'Portfolio | ORREN Business Technology',
    industries: 'Industries | ORREN Business Technology',
    process: 'Process | ORREN Business Technology',
    contact: 'Contact | ORREN Business Technology',
    careers: 'Careers | ORREN Business Technology',
    notFound: 'Page Not Found | ORREN Business Technology',
  },
  id: {
    home: 'Software House Indonesia | ORREN Business Technology',
    about: 'Tentang ORREN | ORREN Business Technology',
    services: 'Jasa Pembuatan Website | ORREN Business Technology',
    portfolio: 'Portofolio | ORREN Business Technology',
    industries: 'Industri | ORREN Business Technology',
    process: 'Proses | ORREN Business Technology',
    contact: 'Kontak | ORREN Business Technology',
    careers: 'Karier | ORREN Business Technology',
    notFound: 'Halaman Tidak Ditemukan | ORREN Business Technology',
  }
};

for (const lang of ['en', 'id']) {
  const file = path.join(base, lang, 'common.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const page of Object.keys(descs[lang])) {
    data.seo[page].description = descs[lang][page];
    data.seo[page].title = titles[lang][page];
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  console.log('updated', lang, 'common.json');
}

console.log('\nFinal verification:');
for (const lang of ['en', 'id']) {
  const file = path.join(base, lang, 'common.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [page, s] of Object.entries(data.seo)) {
    if (page === 'siteName') continue;
    const d = s.description.length;
    const t = s.title.length;
    console.log(lang.padEnd(3), page.padEnd(12), 'title[' + t + ']', 'desc[' + d + ']', d > 160 ? 'DESC FAIL' : '', t > 65 ? 'TITLE FAIL' : '', t < 10 ? 'TITLE SHORT' : '');
  }
}
