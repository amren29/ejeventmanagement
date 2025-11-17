# Pentas Wijaya Website

A modern, responsive website for **Pentas Wijaya** - a premier event management and marketing agency in Malaysia.

## About

Pentas Wijaya is a premier event management and marketing agency delivering creative, strategic, and impactful solutions across Malaysia.

## Features

- **Modern Design**: Clean, minimal white and black theme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Performance**: Built with Next.js 15 for optimal speed
- **Interactive Components**: Hero slider, FAQ accordion, auto-scrolling client logos
- **Contact Form**: Easy-to-use contact form for client inquiries

## Pages

1. **Home** - Hero slider, services overview, client logos, FAQ
2. **About Us** - Company story and mission
3. **Services** - Detailed information about all 6 service categories
4. **Contact** - Contact form and company information

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── GlobalCTA.tsx
│   ├── HeroSlider.tsx
│   ├── ServicesOverview.tsx
│   ├── ClientsSection.tsx
│   └── FAQSection.tsx
└── public/
```

## Customization

### Colors

Edit the color theme in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#FFFFFF",
  accent: "#000000",
  secondary: "#F5F5F5",
  textGray: "#333333",
}
```

### Content

- **Company Information**: Update in `components/Footer.tsx`
- **Services**: Modify in `app/services/page.tsx`
- **FAQ**: Edit in `components/FAQSection.tsx`
- **Hero Images**: Change URLs in `components/HeroSlider.tsx`

## Services Offered

1. Event Management & Activations
2. Branding Production
3. Outdoor Advertising
4. Digital Marketing
5. Creative Production
6. Additional Services (KOLs, Equipment Rental, Printing)

## Contact Information

- **Email**: info@pentaswijaya.com
- **Phone**: +60 18-902 3676
- **Location**: Malaysia

## License

© 2025 Pentas Wijaya. All Rights Reserved.
