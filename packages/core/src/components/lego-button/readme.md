# lego-button



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                                                                                                                               | Type                                  | Default     |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----------- |
| `disabled`  | `disabled`   | If 'true' user can not interact with the button                                                                                                                                                                                                                                           | `boolean`                             | `false`     |
| `download`  | `download`   | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string`                              | `undefined` |
| `fullWidth` | `full-width` | Determines width of the button. If true, the button will take up full width of the container.                                                                                                                                                                                             | `boolean`                             | `false`     |
| `href`      | `href`       | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.                                                                                                                                                                   | `string`                              | `undefined` |
| `iconLeft`  | `icon-left`  | Icon to display to the left side of the button content;                                                                                                                                                                                                                                   | `string`                              | `undefined` |
| `iconRight` | `icon-right` | Icon to display to the right side of the button content                                                                                                                                                                                                                                   | `string`                              | `undefined` |
| `rel`       | `rel`        | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string`                              | `undefined` |
| `size`      | `size`       | Determines size of the button                                                                                                                                                                                                                                                             | `"large" \| "medium" \| "small"`      | `'medium'`  |
| `target`    | `target`     | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                                                                                       | `string`                              | `undefined` |
| `type`      | `type`       | The type of the button.                                                                                                                                                                                                                                                                   | `"button" \| "reset" \| "submit"`     | `'button'`  |
| `variant`   | `variant`    | This attribute indicates the variant of button. Varies by background color and border.                                                                                                                                                                                                    | `"ghost" \| "primary" \| "secondary"` | `'primary'` |


## Events

| Event      | Description                          | Type                |
| ---------- | ------------------------------------ | ------------------- |
| `jllBlur`  | Emitted when the button loses focus. | `CustomEvent<void>` |
| `jllFocus` | Emitted when the button has focus.   | `CustomEvent<void>` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the native `button` in `jll-button`. Use this method instead of the global
`button.focus()`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                     | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `--background`           | Background of the button                               |
| `--background-activated` | Background of the button when pressed.                 |
| `--background-focused`   | Background of the button when focused with the tab key |
| `--background-hover`     | Background of the button on hover                      |
| `--border-radius`        | Border radius of the button                            |
| `--border-style`         | Border style                                           |
| `--border-width`         | Border width of the button                             |
| `--box-shadow`           | Box shadow of the button                               |
| `--color`                | Text color of the button                               |
| `--color-activated`      | Text color of the button when pressed                  |
| `--color-disabled`       | Text color of the disabled button                      |
| `--color-focused`        | Text color of the button when focused with the tab key |
| `--color-hover`          | Text color of the button when hover                    |
| `--height`               | Height of the button                                   |
| `--icon-gutter`          | Icon gutter                                            |
| `--icon-size`            | Icons size                                             |
| `--opacity`              | Opacity of the button                                  |
| `--overflow`             | Overflow of button text                                |
| `--padding-bottom`       | Padding bottom of the button                           |
| `--padding-left`         | Padding left of the button                             |
| `--padding-right`        | Padding right of the button                            |
| `--padding-top`          | Padding top of the button                              |
| `--transition`           | Transition of the button                               |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
