module.exports = (on: any, config) => {
  on('before:browser:launch', (browser = {}, launchOptions: any) => {
    if (browser.name === 'chrome') {
      // Add Chrome incognito mode flag
      launchOptions.args.push('--incognito');
    }
    return launchOptions;
  });
};
