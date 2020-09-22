import { Scope } from './scope.model';

export const SCOPES: Scope = new Scope('Total scope', 280, [
  new Scope('Min scope', 50, [
    new Scope('Main page + page with a list of authors + author\'s page (only pages with content without widgets)', 10),
    new Scope('Page with team members + page with worklog', 10),
    new Scope('Page with list of authors contains search widget', 10),
    new Scope('Portal has two languages', 20),
  ]),
  new Scope('Normal scope', 140, [
    new Scope('Portal has page with styleguide', 20),
    new Scope('Mobile version is okey', 10),
    new Scope('Ipad/tablet version is okey', 10),
    new Scope('Author\'s page contains timeline', 10),
    new Scope('Author\'s page contains video overlay', 10),
    new Scope('Author\'s page contains photo gallery', 20),
    new Scope('Author\'s page contains map (geowidget)', 10),
    new Scope('Design (typography, icons, colors, links + buttons + input, ui components are styled)', 20),
    new Scope('Material-ui / bootstrap is used', 20),
    new Scope('Portal has third language', 10),
  ]),
  new Scope('Extra scope', 90, [
    new Scope('Confidence of the project presentation', 10),
    new Scope('Project is made using scully', 10),
    new Scope('Contentful / netlify cms / other cms is used for content management', 10),
    new Scope('Animations / special effects like paralax', 20),
    new Scope('Outstanding design', 20),
    new Scope(
      'Storybook/angularplayground/compodoc/other angular documentation tool usage for the page with styles',
      20
    ),
  ]),
  new Scope('Fines', 0, [
    new Scope(
      'There are less than 3 commits from each active team member. Everyone should merge their own PRs',
      -50
    ),
    new Scope('Violations stage2-tasks-requirements', -50),
    new Scope('No worklog for team', -40),
    new Scope('Too primitive (ugly for 2020) design / UX', -20),
  ]),
]);
