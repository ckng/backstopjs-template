module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // Remove iubenda cookie consent dialog.
  // iubdenda - Accept button type.
  // try {
  //   let element = await page.waitForSelector('.iubenda-cs-accept-btn', { 'timeout': 2000, 'visible': true });
  //   await element.click();
  // }
  // catch {
  //   console.log('iubenda does not exists.')
  // }

  // iubdenda - Close button type.
  // try {
  //   let element = await page.waitForSelector('.iubenda-cs-close-btn', { 'timeout': 2000, 'visible': true });
  //   await element.click();
  // }
  // catch {
  //   console.log('iubenda does not exists.')
  // }

  // Remove Hubspot chat prompt.
  // try {
  //   let element = await page.waitForSelector('.initial-message-close-button', { 'timeout': 2000, 'visible': true });
  //   await element.click();
  // }
  // catch {
  //   console.log('Hubspot chat does not exists.')
  // }

  // add more ready handlers here...
};
