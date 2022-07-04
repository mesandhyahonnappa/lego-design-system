import { newE2EPage } from '@stencil/core/testing';

describe('ui-greet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-greet></ui-greet>');

    const element = await page.find('ui-greet');
    expect(element).toHaveClass('hydrated');
  });
});
