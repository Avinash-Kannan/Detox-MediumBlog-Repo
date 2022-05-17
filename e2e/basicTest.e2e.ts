/* eslint-disable no-undef */
import {expect} from 'detox';
import {element} from 'detox';
import {device, by} from 'detox';

describe('Detox feedback Test App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('Fill feedback', async () => {
    await expect(element(by.id('app-header'))).toBeVisible();
    await element(by.text('Yes')).tap();
    await element(by.id('input')).typeText('Good blog');
    await element(by.id('checkbox')).tap();
  });

  it('Submit feedback', async () => {
    await element(by.id('submit-btn')).tap();
    await expect(
      element(by.text('Response Submitted Successfully')),
    ).toBeVisible();
    await element(by.text('OK')).tap();
  });
});
