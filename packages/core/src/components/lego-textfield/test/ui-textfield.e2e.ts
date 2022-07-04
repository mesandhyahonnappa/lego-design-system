import { newE2EPage } from '@stencil/core/testing';

describe('ui-textfield', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-textfield></ui-textfield>');

    const element = await page.find('ui-textfield');
    expect(element).toHaveClass('hydrated');
  });
});
