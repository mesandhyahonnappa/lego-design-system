import { newSpecPage } from '@stencil/core/testing';
import { UiTextfield } from '../lego-textfield';

describe('ui-textfield', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiTextfield],
      html: `<ui-textfield></ui-textfield>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-textfield>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-textfield>
    `);
  });
});
