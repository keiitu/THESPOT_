
# Changelog
<!-- ## [Initial Setup] - 2026-03-24

### Added
- Initial project structure and HTML files
- CSS stylesheet with colour palette and typography
- Homepage, About, Services, Contact, Enquiries, Submit Art pages
- Realm pages for all six art styles
- Art and Mind section with blog and resource directory
- All image assets and folders
 -->







## [Image Optimisation] - 2026-06-18

### Added
- Added WebP thumbnails for all gallery images (realm pages)
- Added `-thumb` and `-large` naming convention for image pairs
- Added duplicate + resize workflow for lightbox optimisation

### Changed
- Converted all gallery thumbnails to WebP format for faster loading
- Resized thumbnails to 300–400px wide
- Updated all realm page HTML to use `-thumb.webp` for display in lightbox
- Improved page load speed across all realm pages

### Fixed
- Resolved slow loading issues on realm pages by using properly sized thumbnails

### Removed
- Removed old/unoptimised image files (replaced with WebP thumbnails)

---

## [Maintenance] - 2026-06-18

### Added
- Added `<link rel="stylesheet" href="css_assets/style.css">` to `whythespotexists.html`
- Added `.gitignore` rule to exclude `_private/` folder from version control
- Added `CHANGELOG.md` for project documentation

### Fixed
- Corrected image paths in `penandink.html` – changed `/_images/` to `../_images/`
- Corrected image paths in `pencilsketch.html` – changed `/_images/` to `../_images/`
- Corrected founder image path in `about.html` – changed `/_images/` to `_images/`
- Corrected logo path in `resource_directory.html` – changed `/_images/` to `../_images/`
- Corrected footer links in `resource_directory.html` – changed absolute paths to relative paths
- Fixed CSS typo in `style.css` – changed `.contactuslandigimg` to `.contactuslandingimg`
- Corrected image paths in `enquiries.html` – changed `../_images/` to `_images/`
- Unified header structure in `whythespotexists.html` to match the rest of the site
- Fixed all absolute paths (starting with `/`) in `whythespotexists.html` to relative paths

### Changed
- Unified header across all pages to use consistent `<header class="header">` structure
- Standardised image `src` attributes to use relative paths across all pages

### Removed
- Removed absolute path references (leading `/`) from all image `src` and link `href` attributes

---

## [Part 3 - JavaScript & SEO] - 2026-06-18

### Added
- Added JavaScript libraries: jQuery, jQuery Validation, Lightbox2, Typed.js, Fuse.js, GSAP
- Added custom JavaScript modules: `main.js`, `libraries.js`, `contact.js`, `enquiries.js`, `gallery.js`, `search.js`, `dynamic.js`
- Added form validation for contact and enquiry pages (client-side)
- Added AJAX submission simulation for both forms (with visual feedback)
- Added lightbox gallery for all realm pages
- Added typewriter effect on homepage hero section
- Added scroll-triggered animations using GSAP
- Added mouse-tracked glow effect
- Added floating background blobs
<!-- - Added 3D tilt hover effect on cards -->
<!-- - Added sticky navigation shrink on scroll -->
- Added search/filter functionality for realms page
- Added dynamic content loading for blog posts ("Load More" button)
- Added `robots.txt` and `sitemap.xml` for SEO
- Added `reveal` class for scroll animations

### Changed
- Updated all `<title>` tags with descriptive SEO titles
- Added `<meta name="description">` to all pages
- Added `<meta name="keywords">` to all pages
- Updated all image `alt` text with descriptive keywords
- Renamed all image files to SEO-friendly, descriptive names (hyphens, lowercase)
- Updated image `src` paths to match new file names
- Standardised image naming across all gallery folders

### Fixed
- Resolved all absolute path issues (images, CSS, links)
- Fixed CSS typo `.contactuslandigimg` → `.contactuslandingimg`
- Unified header structure across all pages
- Standardised footer across all pages

---

## [SEO - Image Renaming] - 2026-06-18

### Changed
- Renamed all image files to SEO-friendly, descriptive names
- Updated all `alt` text with descriptive keywords
- Updated `src` paths to match new file names

### Added
- Added `<meta name="description">` to all pages
- Added `<meta name="keywords">` to all pages
- Added descriptive `alt` text to all images

---

## [File Structure & Organisation] - 2026-06-18

### Added
- Created `js_assets/` folder for all JavaScript files

### Changed
- Organised JavaScript files by function (`main.js`, `contact.js`, etc.)
- Standardised file naming conventions across the project




## [Part 3 - JavaScript & SEO] - 2026-06-18

### Added
- Added JavaScript libraries: jQuery, jQuery Validation, Lightbox2, Typed.js, Fuse.js, GSAP
- Added custom JavaScript modules: main.js, libraries.js, contact.js, enquiries.js, gallery.js, search.js, dynamic.js
- Added form validation for contact and enquiry pages (client-side)
- Added AJAX submission simulation for both forms (with visual feedback)
- Added lightbox gallery for all realm pages
- Added typewriter effect on homepage hero section
- Added scroll-triggered animations using GSAP
- Added mouse-tracked glow effect
- Added floating background blobs
- Added 3D tilt hover effect on cards
- Added sticky navigation shrink on scroll
- Added search/filter functionality for realms page
- Added dynamic content loading for blog posts ("Load More" button)
- Added robots.txt and sitemap.xml for SEO
- Added reveal class for scroll animations

### Changed
- Updated all title tags with descriptive SEO titles
- Added meta description tags to all pages
- Added meta keywords tags to all pages
- Updated all image alt text with descriptive keywords
- Renamed all image files to SEO-friendly, descriptive names
- Updated image src paths to match new file names

### Fixed
- Resolved all absolute path issues (images, CSS, links)
- Fixed CSS typo contactuslandigimg → contactuslandingimg
- Unified header structure across all pages
- Standardised footer across all pages
