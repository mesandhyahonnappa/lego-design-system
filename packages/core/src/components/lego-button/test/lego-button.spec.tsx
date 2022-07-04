import { newSpecPage } from '@stencil/core/testing';
import { LegoButton } from '../lego-button';

describe('lego-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LegoButton],
      html: `<lego-button></lego-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lego-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lego-button>
    `);
  });
});
