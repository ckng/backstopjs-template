module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // remove iubenda cookie dialog.
  await page.waitFor('.iubenda-cs-accept-btn', { 'timeout': 2000 });
  await page.click('.iubenda-cs-accept-btn');

  // add more ready handlers here...
};
