import { newSpecPage } from '@stencil/core/testing';
import { LegoGreet } from '../lego-greet';

describe('ui-greet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LegoGreet],
      html: `<ui-greet></ui-greet>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-greet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-greet>
    `);
  });
});
