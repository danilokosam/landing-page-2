# 🙏 Church Landing Page

A modern, responsive church website built with Astro and Tailwind CSS. This landing page showcases church services, sermons, events, staff, and ministries with a clean, professional design.

## ✨ Features

- **Dynamic Content Management** - Content-driven pages with Markdown support
- **Sermon Library** - Organized sermon collection with speaker information, series tracking, and media support (audio/video)
- **Event Management** - Upcoming events with detailed information and scheduling
- **Staff Directory** - Showcase team members with roles and responsibilities
- **Ministry Programs** - Highlight various ministry programs and activities
- **Blog Section** - Share articles and spiritual insights
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags, structured data, and sitemap configuration
- **PWA Support** - Progressive web app capabilities for app-like experience

## 🏗️ Project Structure

```
landing-page-2/
├── public/                          # Static assets and configurations
│   ├── uploads/                     # User-uploaded media
│   │   ├── blog/                    # Blog post images
│   │   ├── events/                  # Event images
│   │   ├── ministries/              # Ministry images
│   │   ├── sermons/                 # Sermon thumbnails
│   │   └── staff/                   # Staff photos
│   ├── robots.txt                   # SEO crawler configuration
│   └── site.webmanifest             # PWA manifest
│
├── src/
│   ├── components/                  # Reusable Astro components
│   │   ├── Global/
│   │   │   ├── Header.astro         # Site header with navigation
│   │   │   ├── Footer.astro         # Site footer
│   │   │   └── Navigation.astro     # Main navigation menu
│   │   ├── Sections/                # Page section components
│   │   │   ├── HeroSection.astro    # Hero banner sections
│   │   │   ├── PageHeader.astro     # Page title headers
│   │   │   ├── EventList.astro      # Event listings
│   │   │   ├── SermonList.astro     # Sermon listings
│   │   │   └── StaffList.astro      # Staff directory
│   │   └── UI/                      # Atomic UI components
│   │       ├── Button.astro         # Reusable buttons
│   │       ├── Card.astro           # Card containers
│   │       ├── Icon.astro           # Icon component
│   │       ├── Seo.astro            # SEO metadata component
│   │       ├── TimelineItem.astro   # Timeline entries
│   │       └── ValueCard.astro      # Value proposition cards
│   │
│   ├── content/                     # Content collections (Markdown)
│   │   ├── config.ts                # Collection schema definitions
│   │   ├── aboutValues/             # Church values and mission
│   │   ├── blog/                    # Blog articles
│   │   ├── events/                  # Event descriptions
│   │   ├── ministries/              # Ministry information
│   │   ├── sermons/                 # Sermon content with metadata
│   │   ├── staff/                   # Staff profiles
│   │   └── siteInfo/                # Site-wide information
│   │
│   ├── layouts/                     # Page layout templates
│   │   ├── BaseLayout.astro         # Main page layout wrapper
│   │   └── PostLayout.astro         # Blog/sermon post layout
│   │
│   ├── pages/                       # Route pages (file-based routing)
│   │   ├── index.astro              # Home page
│   │   ├── about-us.astro           # About page
│   │   ├── contact.astro            # Contact form page
│   │   ├── giving.astro             # Giving/donations page
│   │   ├── im-new.astro             # Welcome page for new visitors
│   │   ├── staff.astro              # Staff directory page
│   │   ├── blog/
│   │   │   ├── index.astro          # Blog listing page
│   │   │   └── [slug].astro         # Dynamic blog post pages
│   │   ├── events/
│   │   │   ├── index.astro          # Events listing page
│   │   │   └── [slug].astro         # Dynamic event detail pages
│   │   ├── ministries/
│   │   │   ├── index.astro          # Ministries listing page
│   │   │   └── [slug].astro         # Dynamic ministry detail pages
│   │   └── sermons/
│   │       ├── index.astro          # Sermons listing page
│   │       └── [slug].astro         # Dynamic sermon detail pages
│   │
│   ├── styles/                      # Global styles
│   │   └── global.css               # Tailwind CSS and custom styles
│   │
│   ├── utils/                       # Utility functions
│   │   └── dateUtils.js             # Date formatting utilities
│   │
│   ├── assets/                      # Project assets (logos, etc.)
│   ├── env.d.ts                     # TypeScript environment types
│   └── styles/
│
├── astro.config.mjs                 # Astro configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Project dependencies
└── README.md                        # This file
```

## 🛠️ Technologies Used

- **[Astro](https://astro.build)** - Static site generation framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Markdown](https://www.markdownguide.org)** - Content management format
- **Node.js** - JavaScript runtime environment

## 📦 Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/danilokosam/landing-page-2.git
   cd landing-page-2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🚀 Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:3000` |
| `npm run build` | Builds production site to `./dist/` |
| `npm run preview` | Previews production build locally |
| `npm run astro add` | Add integrations (UI frameworks, etc.) |
| `npm run astro check` | Check for TypeScript errors |

## 📝 Content Management

### Adding Content

Content is managed through Markdown files in the `src/content/` directory. Each collection has its own folder:

- **Blog Posts** - Add `.md` files to `src/content/blog/`
- **Sermons** - Add `.md` files to `src/content/sermons/`
- **Events** - Add `.md` files to `src/content/events/`
- **Ministries** - Add `.md` files to `src/content/ministries/`
- **Staff** - Add `.md` files to `src/content/staff/`

Example front matter for a sermon:
```yaml
---
title: "Sermon Title"
speaker: "Pastor Name"
date: 2024-01-01
series: "Series Name"
scripture: "John 3:16"
summary: "Brief sermon summary"
tags: ["faith", "hope"]
videoUrl: "https://youtube.com/embed/..."
audioUrl: "https://example.com/audio.mp3"
image: "/uploads/sermons/sermon-image.jpg"
draft: false
---
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. Global styles are configured in `src/styles/global.css`. Component styles are scoped using Tailwind's utility classes directly in components.

## 📱 Responsive Design

The site is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop screens (1024px and up)

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for all pages
- Open Graph support for social sharing
- Structured data markup
- Sitemap and robots.txt configuration
- Image optimization

## 🚢 Deployment

This site can be deployed to various platforms:

- **Vercel** - Recommended for Astro projects
- **Netlify** - GitHub integration available
- **GitHub Pages** - Static hosting
- **Cloudflare Pages** - Fast global CDN

### Vercel Deployment:
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests with improvements.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or issues, please open an issue on the GitHub repository or contact the development team.

## 🔗 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Community](https://astro.build/chat)
- [Markdown Guide](https://www.markdownguide.org)

---

**Built with ❤️ for church communities**
