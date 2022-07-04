import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lego-greet',
  styleUrl: 'lego-greet.css',
  shadow: true,
})
export class LegoGreet {
  render() {
    return (
      <Host>
        <h1>
          <slot>Greetings!!!</slot>
        </h1>
      </Host>
    );
  }
}
