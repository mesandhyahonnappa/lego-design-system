import { Component, Host, h, Prop, Method, Watch, Event, EventEmitter } from '@stencil/core';
import { createClasses } from '../../utils/create-classes';
import { Size } from '../../utils/element-interface';
export interface InputChangeEventDetail {
  value?: string | null;
}
@Component({
  tag: 'lego-textfield',
  styleUrl: 'lego-textfield.scss',
  shadow: true,
})
export class LegoTextfield {
  private nativeInput?: HTMLInputElement;
  /**
   * input size
   */
  @Prop() size: Size = 'medium';
  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: ``"text"`, `"tel"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"password"`.
   */
  @Prop() type?: 'text' | 'tel' | 'email' | 'number' | 'password' = 'text';

  /**
   * If 'true' the input is disabled
   */
  @Prop() disabled = false;
  /**
   * Placeholder text of input
   */
  @Prop() placeholder = '';
  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | number | null = '';

  /**
   * Emitted when the input loses focus.
   */
  @Event() jllBlur!: EventEmitter<FocusEvent>;
  /**
   * Emitted when the input has focus.
   */
  @Event() jllFocus!: EventEmitter<FocusEvent>;
  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() jllInput: EventEmitter<InputEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() jllChange!: EventEmitter<InputChangeEventDetail>;

  /**
   * Sets focus on the native `input` in `jll-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `jll-textarea`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  @Method()
  async setBlur(): Promise<void> {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  private getValue(): string {
    return this.type === 'number' ? this.value.toString() : (this.value || '').toString();
  }
  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged(): void {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }

    this.jllChange.emit({ value: this.value === '' ? this.value : this.value.toString() });
  }

  private onBlur = (ev: FocusEvent) => {
    ev.preventDefault();
    this.jllBlur.emit(ev);
  };

  private onFocus = (ev: FocusEvent) => {
    ev.preventDefault();
    this.jllFocus.emit(ev);
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input !== null) {
      this.value = input.value || '';
    }
    this.jllInput.emit(ev as InputEvent);
  };

  private onChange = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value || null;
    if (this.nativeInput) {
      this.value = value || '';
    }

    this.jllChange.emit({ value });
  };

  render() {
    return (
      <Host
        class={createClasses('ui-input ', {
          small: this.size === 'small',
          medium: this.size === 'medium',
          large: this.size === 'large',
        })}
        value={this.value}
      >
        <input
          class="input-native"
          ref={input => (this.nativeInput = input)}
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value}
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.onChange}
        />
      </Host>
    );
  }
}
