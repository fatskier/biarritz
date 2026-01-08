# Book Landing Page

A modern, responsive landing page for your self-published book, built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout optimized for conversions
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in metadata and OpenGraph tags for better discoverability
- **Fast Performance**: Next.js ensures optimal loading speeds
- **Easy to Customize**: Well-organized code with clear sections

## Sections Included

1. **Navigation Bar**: Sticky header with smooth scrolling to sections
2. **Hero Section**: Eye-catching intro with book cover, CTA buttons, and stats
3. **About the Book**: Detailed description with key themes highlighted
4. **Author Bio**: Personal section with photo and social links
5. **Testimonials**: Social proof with reader reviews and ratings
6. **Purchase Options**: Multiple buying options (Kindle, Paperback, Audiobook)
7. **Footer**: Contact info and additional links

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization Guide

### 1. Update Book Information

Edit `app/page.tsx` and replace the placeholder text with your book's information:

- **Book Title**: Line 21 and 26 - Replace "Your Book Title Goes Here"
- **Subtitle**: Line 29 - Update with your compelling subtitle
- **Price**: Line 35 - Update with your actual price
- **Stats**: Lines 46-56 - Update with your real ratings and reader counts

### 2. Add Your Book Cover

1. Add your book cover image to the `/public` folder (e.g., `book-cover.jpg`)
2. In `app/page.tsx`, around line 67, uncomment the `<Image>` component and update the path:

```tsx
<Image
  src="/book-cover.jpg"
  alt="Your Book Title"
  fill
  className="object-cover"
  priority
/>
```

### 3. Add Your Author Photo

1. Add your photo to the `/public` folder (e.g., `author-photo.jpg`)
2. In `app/page.tsx`, around line 147, uncomment the `<Image>` component and update the path

### 4. Update Metadata (SEO)

Edit `app/layout.tsx` to update:
- Page title
- Description
- Keywords
- OpenGraph tags

### 5. Update Purchase Links

In the "Purchase/CTA Section" (around line 267), replace the `#` placeholders with your actual purchase links:
- Amazon Kindle link
- Amazon Paperback link
- Audible audiobook link

### 6. Add Social Media Links

Update social media links in:
- Author bio section (around line 165)
- Footer section (around line 312)

### 7. Customize Colors

Edit `tailwind.config.ts` to change the primary color scheme. The default is blue, but you can customize it:

```typescript
primary: {
  50: '#f0f9ff',
  500: '#0ea5e9',  // Main color
  600: '#0284c7',  // Darker shade
  // ... add your color values
}
```

### 8. Update Contact Information

Replace placeholder contact information in the footer (around line 305) with your actual:
- Email address
- Social media profiles

## Building for Production

When you're ready to deploy:

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Other Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js out of the box
- **AWS Amplify**: Good for AWS users
- **DigitalOcean App Platform**: Affordable option with good performance
- **Self-hosted**: Use `npm run build` and serve the `.next` folder with a Node.js server

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and Tailwind imports
├── public/              # Static assets (add images here)
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## Tips for Success

1. **High-Quality Images**: Use high-resolution book cover and author photos
2. **Compelling Copy**: Write engaging descriptions that hook readers
3. **Social Proof**: Add real reviews and testimonials when available
4. **Clear CTAs**: Make purchase buttons prominent and easy to find
5. **Mobile First**: Test on mobile devices - many readers browse on phones
6. **Load Testing**: Ensure images are optimized for fast loading
7. **Analytics**: Consider adding Google Analytics or similar to track visitors

## Support

For issues or questions about Next.js, visit:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available for personal and commercial use.

---

**Happy publishing!** Your story deserves to be shared with the world.
