import { newE2EPage } from '@stencil/core/testing';

describe('lego-greet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lego-greet></lego-greet>');

    const element = await page.find('lego-greet');
    expect(element).toHaveClass('hydrated');
  });
});
