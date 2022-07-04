import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lego-link',
  styleUrl: 'lego-link.css',
  shadow: true,
})
export class Link {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
