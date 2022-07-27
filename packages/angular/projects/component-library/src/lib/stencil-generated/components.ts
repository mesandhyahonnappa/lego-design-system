/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@sandhyahonnappa/lego-design-system/components';

import { defineCustomElement as defineLegoButton } from '@sandhyahonnappa/lego-design-system/components/lego-button.js';
import { defineCustomElement as defineLegoGreet } from '@sandhyahonnappa/lego-design-system/components/lego-greet.js';
import { defineCustomElement as defineLegoLink } from '@sandhyahonnappa/lego-design-system/components/lego-link.js';
import { defineCustomElement as defineLegoTextfield } from '@sandhyahonnappa/lego-design-system/components/lego-textfield.js';


export declare interface LegoButton extends Components.LegoButton {
  /**
   * Emitted when the button has focus. 
   */
  jllFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus. 
   */
  jllBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineLegoButton,
  inputs: ['disabled', 'download', 'fullWidth', 'href', 'iconLeft', 'iconRight', 'rel', 'size', 'target', 'type', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'lego-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'download', 'fullWidth', 'href', 'iconLeft', 'iconRight', 'rel', 'size', 'target', 'type', 'variant']
})
export class LegoButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['jllFocus', 'jllBlur']);
  }
}


export declare interface LegoGreet extends Components.LegoGreet {}

@ProxyCmp({
  defineCustomElementFn: defineLegoGreet
})
@Component({
  selector: 'lego-greet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class LegoGreet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LegoLink extends Components.LegoLink {}

@ProxyCmp({
  defineCustomElementFn: defineLegoLink
})
@Component({
  selector: 'lego-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class LegoLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { InputChangeEventDetail as ILegoTextfieldInputChangeEventDetail } from '@sandhyahonnappa/lego-design-system/components';
export declare interface LegoTextfield extends Components.LegoTextfield {
  /**
   * Emitted when the input loses focus. 
   */
  legoBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus. 
   */
  legoFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when a keyboard input occurred. 
   */
  legoInput: EventEmitter<CustomEvent<InputEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  legoChange: EventEmitter<CustomEvent<ILegoTextfieldInputChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: defineLegoTextfield,
  inputs: ['disabled', 'placeholder', 'size', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'lego-textfield',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'placeholder', 'size', 'type', 'value']
})
export class LegoTextfield {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['legoBlur', 'legoFocus', 'legoInput', 'legoChange']);
  }
}
