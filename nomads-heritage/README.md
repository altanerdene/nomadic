# Талын Нүүдэлчдийн Өв - Heritage of Nomads of the Steppe

A Next.js website for the Heritage of Nomads of the Steppe certification organization, providing information about responsible nomadic practices certification in Mongolia.

## Features

- Modern Next.js 15 with TypeScript
- Responsive design with CSS modules
- Google Fonts integration (Noto Serif Bengali, Cormorant Garamond)
- Certificate search functionality
- Smooth scrolling and animations
- Interactive contact form and map integration
- Multi-language support (Mongolian/English)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd nomads-heritage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running the Production Build

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
nomads-heritage/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── CertificateSearch.tsx # Certificate search component
│   └── ScrollAnimations.tsx # Scroll effects
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## Certificate Search

The application includes a certificate verification system with sample certificates:
- MRC-24/001
- MRC-24/002
- MRC-24/003
- MRC-22/006

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- CSS Modules
- Google Fonts

## License

© 2024 Талын Нүүдэлчдийн Өв ТББ. All rights reserved.
