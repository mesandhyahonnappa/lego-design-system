import type { ComponentInterface, EventEmitter } from '@stencil/core';
import { Component, Method, Event, Host, Prop, h } from '@stencil/core';
import { ButtonType, ButtonVariant, AnchorInterface, ButtonInterface } from './interface';
import { Size } from '../../utils/element-interface';
import { createClasses } from '../../utils/create-classes';

@Component({
  tag: 'lego-button',
  styleUrl: 'lego-button.scss',
  shadow: true,
})
export class LegoButton implements ComponentInterface, AnchorInterface, ButtonInterface {
  private nativeButton: HTMLElement;
  /**
   * The type of the button.
   */
  @Prop() type: ButtonType = 'button';
  /**
   * If 'true' user can not interact with the button
   */
  @Prop({ reflect: true }) disabled = false;

  /** --- Anchor Attributes - Start --- */

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /** --- Anchor Attributes - End --- */

  /**
   * This attribute indicates the variant of button. Varies by background color and border.
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * Determines size of the button
   */
  @Prop() size: Size = 'medium';

  /**
   * Determines width of the button. If true, the button will take up full width of the container.
   */
  @Prop() fullWidth = false;

  /**
   * Icon to display to the left side of the button content;
   */
  @Prop() iconLeft: string | undefined;

  /**
   * Icon to display to the right side of the button content
   */
  @Prop() iconRight: string | undefined;

  /**
   * Emitted when the button has focus.
   */
  @Event() jllFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() jllBlur!: EventEmitter<void>;

  /**
   * Sets focus on the native `button` in `jll-button`. Use this method instead of the global
   * `button.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeButton.focus();
  }

  private onFocus = () => {
    this.jllFocus.emit();
  };

  private onBlur = () => {
    this.jllBlur.emit();
  };

  render() {
    const { type, size, variant, fullWidth, disabled, rel, target, href } = this;

    const TagType = href === undefined ? 'button' : 'a';
    const attrs =
      TagType === 'button'
        ? { type }
        : {
            download: this.download,
            href,
            rel,
            target,
          };

    return (
      <Host
        class={createClasses('jll-button', {
          [variant]: true,
          'small': size === 'small',
          'large': size === 'large',
          'full-width': fullWidth === true,
          'button-disabled': disabled === true,
        })}
        variant={variant}
        size={size}
        aria-disabled={disabled ? 'true' : null}
      >
        <TagType class="button-native" part="native" {...attrs} disabled={disabled} onFocus={this.onFocus} onBlur={this.onBlur}>
          <span class="button-inner">
            <slot></slot>
          </span>
        </TagType>
      </Host>
    );
  }
}
