# Initial Project Setup:

1. `npm init -y`
2. `npm i playwright chai prettier @cucumber/cucumber cucumber-html-reporter`
3. Created the following folders & files:

- Folders: [features](features), [page-objects](page-objects), [setup](setup), [step-definitions](step-definitions)
- Files: [cucumber.js](cucumber.js), [reporter.js](reporter.js)

# Global Assertions:

- Created [setup/assertions.js](setup/assertions.js):
  - Here, we are setting up the `Chai` assertion library to be used in our framework.
  - We import the `chai` module & assign some of its assertions to global variables.
  - By assigning these global variables, these assertion methods are accessible throughout our code.
  - Now, we can use `chai` assertions like `expect(actualValue).to.equal(expectedValue);`

# Global Hooks:

- Created [setup/hooks.js](setup/hooks.js):
- Here, we set up hooks that are executed at specific points during the test execution lifecycle.
- These hooks allow us to perform certain actions before all, before each, after all, & after each test scenario.
  - `BeforeAll`:
    - Launches the browser using playwrights `launch()` function.
    - The browser instance is stored in the `global.browser` variable, making it accessible to all scenarios.
  - `AfterAll`:
    - Closes the browser by calling the `close()` method on the `global.browser` instance.
  - `Before`:
    - Creates a new `context` & `page` within the browser.
    - The context & page instances are stored in the `global.context` & `global.page` variables.
  - `After`:
    - Closes the page & context by calling the `close()` methods on the `global.page` & `global.context` instances.
- Overall, these hooks ensure the browser is launched & closed at the appropriate times, & new contexts and pages are created/closed for each scenario. This helps maintain a clean state & isolate each test scenario.

# Glue the Assertions, Hooks & Feature Files together:

- Related file: [cucumber.js](cucumber.js).
- [cucumber.js](cucumber.js) is a config file that defines how Cucumber should execute our tests.
- Here, we defined a common set of command-line options that will be used for running our Cucumber tests.
- It includes options to require Cucumber to load the [setup/assertions.js](setup/assertions.js), [setup/hooks.js](setup/hooks.js), & [step-definitions/login-step.js](step-definitions/login-step.js) files before executing the tests.
- We use `module.exports` to export a config object that specifies the default set of options for running Cucumber tests. The `default` property is set to a string that concatenates the `common` variable with a filepath to the feature files that Cucumber should run.
- Overall, [cucumber.js](cucumber.js) defines a common set of options & specifies the files & patterns that Cucumber should use when executing our tests.

# Features:

- Created [features/login.feature](features/login.feature)

# Step Definitions:

- Created [step-definitions/login-step.js](step-definitions/login-step.js)

# Page Object Model (POM):

- Created [page-objects/login-page.js](page-objects/login-page.js)

# Node Script for Cucumber:

- Added the below to [package.json](package.json)
  ```
    "test": "./node\*modules/.bin/cucumber-js --require cucumber.js --require step-definitions/\*\*/\_.js -f json:cucumber_report.json --publish-quiet"
  ```
- Breakdown of the above command:

  - `./node\*modules/.bin/cucumber-js` - specifies the path to the `cucumber.js` executable in the node_modules folder.
  - `--require cucumber.js` - tells Cucumber to require the [cucumber.js](cucumber.js) file as part of the test execution _(the file containing the Cucumber configuration)_.
  - `--require step-definitions/**/*.js` - tells Cucumber to require all files that match this expression as part of the test execution.
  - `-f json:cucumber_report.json` - specifies the formatter to use for generating the test report. Here, it specifies the `json` formatter & specifies the file where the output should be written.
  - `--publish-quiet` - suppresses the publishing of the report to the Cucumber cloud service.
  - Overall, the `test` command runs the Cucumber tests using [cucumber.js](cucumber.js), specifies the required files, generates a JSON test report, & disables publishing the report to the Cucumber cloud service.

- Now, if we run our tests with `npm test`, the results are published to [cucumber_report.json](cucumber_report.json) which will shortly be used to generate our HTML Report.

# Cucumber HTML Reporter:

1. Create [reporter.js](reporter.js):

- This uses the `cucumber-html-reporter` package to generate a HTML test report.
- The `options` object holds various config settings related to the HTML report.

  - Some `options` examples:
    - `jsonFile` specifies the path to the JSON file containing the Cucumber test results which the HTML report will be based on.
    - `output` specifies the output path for the generated HTML report.

- Overall, [reporter.js](reporter.js) configures the options for generating a HTML report using the `cucumber-html-reporter` package & triggers the report generation process based on the specified options _(incl. the output path of the HTML report)_.
- The generated HTML report can be found in [reports/cucumber_report.html](reports/cucumber_report.html).

2. Update `package.json`:

- Now, we can use the below run command to generate the HTML test report:
  - `"report": "node reporter.js"`

3. Recap:

- Now, we can generate the HTML report by doing the following:
  - Run `npm test` to generate the [cucumber_report.json](cucumber_report.json) file.
  - Run `npm run report` to generate the [reports/cucumber_report.html](reports/cucumber_report.html) based on this JSON file.
