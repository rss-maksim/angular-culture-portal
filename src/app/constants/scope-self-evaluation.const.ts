export const STORAGE_EVALUATION_KEY = 'SELF_EVALUATION';

export const SELF_EVALUATION: number[][] = [ // Total scope
  [ // 50, Min scope
    10, // Main page + page with a list of authors + author's page (only pages with content without widgets)
    10, // Page with team members + page with worklog
    10, // Page with list of authors contains search widget
    20, // Portal has two languages
  ],
  [ // 14, Normal scope
    20, // Portal has page with styleguide
    10, // Mobile version is okey
    10, // Ipad/tablet version is okey
    10, // Author's page contains timeline
    10, // Author's page contains video overlay
    20, // Author's page contains photo gallery
    10, // Author's page contains map (geowidget)
    20, // Design (typography, icons, colors, links + buttons + input, ui components are styled)
    20, // Material-ui / bootstrap is used
    10, // Portal has third language
  ],
  [ // 90, Extra scope
    10, // Confidence of the project presentation
    10, // Project is made using scully
    10, // Contentful / netlify cms / other cms is used for content management
    20, // Animations / special effects like paralax
    20, // Outstanding design
    20, // Storybook/angularplayground/compodoc/other angular documentation tool usage for the page with styles
  ],
  [ // Fines
    0, // There are less than 3 commits from each active team member. Everyone should merge their own PRs
    0, // Violations stage2-tasks-requirements
    0, // No worklog for team
    0, // Too primitive (ugly for 2020) design / UX
  ],
];
