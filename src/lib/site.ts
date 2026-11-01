// ============================================================
// Everything that changes when the project moves
// ============================================================
// Kept in one file so the GitHub org, demo URL and contact address can be
// updated without hunting through components.

export const site = {
  name: 'Xanty PSA',
  domain: 'xanty.net',
  tagline: 'Open Source PSA, built for smaller MSPs',
  // Honest today: this is a young project open to contributions, rather than
  // the product of an existing community. Deliberately unattributed to any
  // company so the project stands on its own.
  byline: 'Built in the open - contributions welcome.',

  // TODO: point at the real repository once it is published.
  github: 'https://github.com/tegwin/xantypsa',
  license: 'AGPL-3.0',
  licenseUrl: 'https://www.gnu.org/licenses/agpl-3.0.en.html',

  // TODO: the demo instance is not deployed yet. `demoReady: false` renders the
  // demo call-to-action as "coming soon" rather than a dead link - flip it to
  // true once the instance is up.
  demoReady: false,
  demoUrl: 'https://demo.xanty.net',
  demoEmail: 'demo@xanty.net',
  demoPassword: 'demo',

  contactEmail: 'hello@xanty.net',
} as const;
