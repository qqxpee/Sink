export default defineAppConfig({
  title: 'Sink',
  github: 'https://github.com/qqxpee/Sink',
  coffee: 'https://p.pee.ee',
  twitter: 'https://p.pee.ee',
  telegram: 'https://p.pee.ee',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://p.pee.ee/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
