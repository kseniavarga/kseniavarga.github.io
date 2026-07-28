/**
 * Single source of truth for About-page navigation.
 *
 * When you add a new page:
 *   1. Create my-page.html (and any assets)
 *   2. Add one entry below with label + href
 *
 * Items with href: null stay as plain text (no link yet).
 * Set order to control display order (lower = higher).
 */
window.SITE_PAGES = [
  { label: "Education", href: "education.html", order: 1 },
  { label: "Select Job Experiences", href: null, order: 2 },
  { label: "Chem Projects", href: "chemistry.html", order: 3 },
  { label: "Photon Projects", href: "photonics-demo.html", order: 4 },
  { label: "Other stuff", href: null, order: 5 },
];
