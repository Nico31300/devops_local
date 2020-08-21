module.exports = function (config) {
  config.set({
    frameworks: ['qunit'],
    plugins: ['karma-qunit'],
    files: [
      './devops/webapp/test/testsuite.qunit.js'
    ]
  })
}
