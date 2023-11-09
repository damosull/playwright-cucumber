const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'test-results/report/cucumber-report.json',
  output: 'test-results/report/cucumber-html-report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'QA',
    Browser: 'Chrome 54.0',
    Platform: 'Windows 10',
  },
};

reporter.generate(options);
