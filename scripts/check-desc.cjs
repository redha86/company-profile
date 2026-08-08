const path = require('path');
const base = path.join(__dirname, '..', 'src', 'i18n', 'locales');
const en = require(path.join(base, 'en', 'common.json')).seo;
const id = require(path.join(base, 'id', 'common.json')).seo;
const pages = ['home','about','services','portfolio','industries','process','contact','careers','notFound'];

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

console.log('=== EN lengths ===');
for (const p of pages) {
  const len = descs.en[p].length;
  console.log(p.padEnd(12), len, len > 160 ? 'FAIL' : 'OK');
}
console.log('\n=== ID lengths ===');
for (const p of pages) {
  const len = descs.id[p].length;
  console.log(p.padEnd(12), len, len > 160 ? 'FAIL' : 'OK');
}
