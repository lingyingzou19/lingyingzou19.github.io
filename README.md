# Lucy Zou Portfolio

A modern, artistic portfolio website for digital illustrator Lucy Zou with contemporary design aesthetics.

## Design Philosophy

This portfolio embodies a **digital artistic aesthetic** with:
- **Modern typography** with gradient text effects and clean sans-serif fonts
- **Digital gradients** and subtle lighting effects throughout
- **Interactive animations** with staggered reveals and mouse-follow parallax
- **Contemporary color palette** with sophisticated grays and accent gradients
- **Geometric elements** and digital noise effects on hover
- **Smooth, fluid animations** using modern CSS easing functions

## Features

- **Enhanced hero section** with multi-layered gradients and dynamic mouse parallax
- **Digital typography** with gradient text effects and artistic underlines
- **Interactive navigation** with hover dropdown submenu for Gallery sections
- **Unified Gallery section** with dropdown selector for Illustration/Animation subsections
- **Clean gallery grids** with 3-column layouts, subsection titles, and subtle hover effects
- **Scroll-triggered animations** with staggered image reveals
- **Professional contact section** with direct links to Instagram, LinkedIn, and email
- **Responsive design** optimized for all devices
- **Digital effects** including backdrop blur, contrast enhancement, and saturation boosts

## Visual Style

- **Typography**: SF Pro Display / Inter font stack with ultra-light weights
- **Colors**: Sophisticated grayscale with gradient accents
- **Effects**: Backdrop blur, gradient overlays, digital noise animations
- **Interactions**: Cubic-bezier easing, transform combinations, filter effects
- **Layout**: Generous whitespace with subtle geometric dividers

## Navigation Structure

- **Gallery**: Hover dropdown menu
  - Illustration: Direct link to illustration subsection
  - Animation: Direct link to animation subsection
- **Contact**: Direct link to contact section

## Gallery Structure

- **Illustration Subsection**: 3-column grid with 6 artwork thumbnails
- **Animation Subsection**: 3-column grid with 6 animation thumbnails
- **Dropdown Selector**: Switch between subsections
- **Responsive Grids**: 3 columns on desktop, 2 on tablet, 1 on mobile

```
/
├── index.html      # Main HTML structure
├── style.css       # Modern CSS with digital effects and gradients
├── script.js       # JavaScript for parallax, animations, and interactions
├── logo.png        # Logo image
├── header-bg.jpg   # Hero background image
├── work1.jpg       # Illustration works
├── work2.jpg
├── work3.jpg
├── work4.jpg
├── work5.jpg
└── work6.jpg
```

## Usage

1. Replace `header-bg.jpg` with your desired hero background image
2. Replace `logo.png` with your logo
3. Replace `work1.jpg` through `work6.jpg` with your artwork
4. Update the text content in `index.html` as needed

## Development

To run locally:
```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

- **Gradients**: Edit the linear-gradient values in CSS for different color schemes
- **Typography**: Modify font weights and gradient text effects
- **Animations**: Adjust cubic-bezier timing functions and transform values
- **Effects**: Fine-tune filter effects, backdrop blur, and digital noise intensity
- **Layout**: Modify grid gaps, margins, and responsive breakpoints

## Technical Details

- **CSS Grid** for responsive gallery layout
- **Intersection Observer** for scroll-triggered animations
- **CSS Transforms** for 3D hover effects
- **Gradient text** using background-clip techniques
- **Modern easing** with cubic-bezier functions
- **Filter effects** for digital enhancement
