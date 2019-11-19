export interface CypressConfiguration {
  //
  // global options
  //

  /**
   * Url used as prefix for `cy.visit()` or `cy.request()` command’s url
   */
  baseUrl: string;
  /**
   * Any values to be set as environment variables
   */
  env: object;
  /**
   * A String or Array of glob patterns used to ignore test files
   * that would otherwise be shown in your list of tests.
   */
  ignoreTestFiles: string | string[];
  /**
   * The number of tests for which snapshots and command data are kept in memory.
   * Reduce this number if you are experiencing high memory consumption in your browser during a test run.
   */
  numTestsKeptInMemory: number;
  /**
   * Port used to host Cypress. Normally this is a randomly generated port
   */
  port: number;
  /**
   * The reporter used during the `cypress run`. Default is "spec"
   */
  reporter: string;
  /**
   * A String or Array of string glob pattern of the test files to load.
   */
  testFiles: string | string[];

  //
  // timeouts
  //

  /**
   * Time, in milliseconds, to wait until most DOM based commands
   * are considered timed out.
   */
  defaultCommandTimeout: number;
  /**
   * Time, in milliseconds, to wait for a system command to
   * finish executing during a `cy.exec()` command.
   */
  execTimeout: number;
  /**
   * Time, in milliseconds, to wait for a task to finish executing
   * during a `cy.task()` command.
   */
  taskTimeout: number;
  /**
   * Time, in milliseconds, to wait for page transition events or
   * `cy.visit()`, `cy.go()`, `cy.reload()` commands to fire
   * their page load events.
   */
  pageLoadTimeout: number;
  /**
   * Time, in milliseconds, to wait for an XHR request to go out
   * in a `cy.wait()` command.
   */
  requestTimeout: number;
  /**
   * Time, in milliseconds, to wait until a response in a
   * `cy.request()`, `cy.wait()`, `cy.fixture()`, `cy.getCookie()`,
   * `cy.getCookies()`, `cy.setCookie()`, `cy.clearCookie()`,
   * `cy.clearCookies()`, and `cy.screenshot()` commands.
   */
  responseTimeout: number;

  //
  // folders and files
  //

  /**
   * Path to folder where application files will attempt to be served from.
   */
  fileServerFolder: string;
  /**
   * Path to folder containing fixture files (Pass `false` to disable).
   */
  fixturesFolder: string | false;
  /**
   * Path to folder containing integration test files.
   */
  integrationFolder: string;
  /**
   * Path to plugins file. (Pass `false` to disable)
   */
  pluginsFile: string | false;
  /**
   * Path to folder where screenshots will be saved from `cy.screenshot()`
   * command or after a test fails during cypress run.
   */
  screenshotsFolder: string;
  /**
   * Path to file to load before test files load.
   * This file is compiled and bundled. (Pass `false` to disable).
   */
  supportFile: string | false;
  /**
   * Path to folder where videos will be saved during `cypress run`
   */
  videosFolder: string;

  //
  // screenshots
  //

  /**
   * Whether Cypress will trash assets within the `screenshotsFolder` and
   * `videosFolder` before tests run with cypress run. Default is `true`.
   */
  trashAssetsBeforeRuns: boolean;

  //
  // videos
  //

  /**
   * The quality setting for the video compression, in Constant Rate Factor (CRF).
   * The value can be false to disable compression or a value between 0 and 51,
   * where a lower value results in better quality
   * (at the expense of a higher file size).
   */
  videoCompression: number | false;
  /**
   * Whether Cypress will capture a video of the tests run with `cypress run`.
   */
  video: boolean;
  /**
   * Whether Cypress will upload the video to the Dashboard even if
   * all tests are passing. This applies only when recording your runs
   * to the Dashboard. Turn this off if you’d like the video uploaded
   * only when there are failing tests.
   */
  videoUploadOnPasses: boolean;

  //
  // browser
  //
  /**
   * Whether Chrome Web Security for `same-origin` policy and
   * `insecure mixed content` is enabled.
   */
  chromeWebSecurity: boolean;
  /**
   * Enables you to override the default user agent the
   * browser sends in all request headers.
   */
  userAgent: string;
  /**
   * A String or Array of hosts that you wish to block traffic for.
   */
  blacklistHosts: string | string[];
  /**
   * Whether Cypress will search for and replace obstructive JS code
   * in `.js` or `.html` files.
   */
  modifyObstructiveCode: boolean;

  //
  // viewport
  //
  /**
   * Default height in pixels for the application under tests’ viewport
   * (Override with `cy.viewport()` command)
   */
  viewportHeight: number;
  /**
   * Default width in pixels for the application under tests’ viewport.
   * (Override with `cy.viewport()` command)
   */
  viewportWidth: number;

  //
  // animations
  //
  /**
   * The distance in pixels an element must exceed over
   * time to be considered animating.
   */
  animationDistanceThreshold: number;
  /**
   * Whether to wait for elements to finish animating before executing commands.
   */
  waitForAnimations: boolean;
}

export type Dictionary = {
  [name: string]: string;
};
