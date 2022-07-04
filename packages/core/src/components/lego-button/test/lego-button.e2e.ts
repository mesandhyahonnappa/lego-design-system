import { newE2EPage } from '@stencil/core/testing';

describe('lego-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lego-button></lego-button>');

    const element = await page.find('lego-button');
    expect(element).toHaveClass('hydrated');
  });
});
