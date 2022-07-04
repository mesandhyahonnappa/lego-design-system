import { newE2EPage } from '@stencil/core/testing';

describe('lego-textfield', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lego-textfield></lego-textfield>');

    const element = await page.find('lego-textfield');
    expect(element).toHaveClass('hydrated');
  });
});
