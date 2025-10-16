# Artisan Lab Landing Page

A responsive, modern landing page for Artisan Lab - a 1-on-1 & Group Coaching Program.

## Features

- **Hero Section**: Eye-catching introduction with gradient backgrounds and clear CTAs
- **Program Overview**: Comprehensive checklist of program features with icons
- **Community Wins Gallery**: Showcase of success stories with stacked, responsive layout
- **Who This Is For**: Target audience section with bullet points and divider styling
- **Footer**: Professional disclaimer and links section

## Responsive Design

The landing page is fully responsive with breakpoints at:
- Mobile: < 720px
- Tablet: 720px - 960px
- Desktop: > 960px
- Large Desktop: > 1040px (with enhanced gallery layout)

### Key Responsive Features

- Mobile-first approach with fluid typography using `clamp()`
- Adaptive navigation with mobile toggle menu
- Stacked gallery layout on mobile, grid layout on desktop
- Full-width CTAs on mobile, inline on desktop
- Smooth scrolling with proper anchor offsets

## Typography

The design uses responsive typography with `clamp()` for:
- Fluid font sizes that scale with viewport
- Consistent vertical rhythm
- Optimal readability across all devices

## Color Scheme

- **Primary**: #5b4dff (Purple)
- **Primary Dark**: #3b2aff
- **Background**: #f8f7ff (Light purple tint)
- **Text**: #1b1433 (Dark purple)
- **Muted Text**: #5f5a76
- **Accent**: #f4c77b (Gold)
- **Footer Background**: #0f0b1d (Near black)

## File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive rules
├── script.js           # Interactive features
├── assets/
│   └── images/
│       └── community-wins/  # Placeholder images (SVG)
│           ├── win-1.svg
│           ├── win-2.svg
│           ├── win-3.svg
│           ├── win-4.svg
│           ├── win-5.svg
│           └── win-6.svg
└── README.md
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Supports CSS Grid, Flexbox, and modern CSS features

## Development

Simply open `index.html` in a web browser or serve via any static file server.

No build process required - pure HTML, CSS, and vanilla JavaScript.

## Notes

- Placeholder images are SVG files in the `assets/images/community-wins/` directory
- Replace these with actual community win screenshots
- All images should ideally be 600x400px for consistency
- Smooth scrolling is enabled by default
- Intersection Observer API is used for fade-in animations
