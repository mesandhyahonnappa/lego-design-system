# ui-textfield



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                      | Type                                                   | Default    |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ | ---------- |
| `disabled`    | `disabled`    | If 'true' the input is disabled                                                                                                                  | `boolean`                                              | `false`    |
| `placeholder` | `placeholder` | Placeholder text of input                                                                                                                        | `string`                                               | `''`       |
| `size`        | `size`        | input size                                                                                                                                       | `"large" \| "medium" \| "small"`                       | `'medium'` |
| `type`        | `type`        | A hint to the browser for which keyboard to display. Possible values: ``"text"`, `"tel"`, `"email"`, `"numeric"`, `"decimal"`, and `"password"`. | `"email" \| "number" \| "password" \| "tel" \| "text"` | `'text'`   |
| `value`       | `value`       | The value of the input.                                                                                                                          | `number \| string`                                     | `''`       |


## Events

| Event        | Description                             | Type                                       |
| ------------ | --------------------------------------- | ------------------------------------------ |
| `legoBlur`   | Emitted when the input loses focus.     | `CustomEvent<FocusEvent>`                  |
| `legoChange` | Emitted when the value has changed.     | `CustomEvent<InputChangeEventDetail<any>>` |
| `legoFocus`  | Emitted when the input has focus.       | `CustomEvent<FocusEvent>`                  |
| `legoInput`  | Emitted when a keyboard input occurred. | `CustomEvent<InputEvent>`                  |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `input` in `lego-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
