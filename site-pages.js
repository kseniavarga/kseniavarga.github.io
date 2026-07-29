/**
 * Single source of truth for About-page navigation.
 *
 * When you add a new page:
 *   1. Create my-page.html (and any assets)
 *   2. Add one entry below with label + href + class
 *
 * Items with href: null stay as plain text (no link yet).
 * class: gradient style (edu-link, job-link, chem-link, photon-link, other-link)
 * Set order to control display order (lower = higher).
 */
window.SITE_PAGES = [
  { label: "Education", href: "education.html", class: "edu-link", order: 1 },
  { label: "Select job experiences", href: "work_experience.html", class: "job-link", order: 2 },
  { label: "Chem projects", href: "chemistry.html", class: "chem-link", order: 3 },
  { label: "Photon projects", href: "photonics-demo.html", class: "photon-link", order: 4 },
  { label: "Other stuff", href: null, class: "other-link", order: 5 },
];
