# ld-sticker
Sticker plugin for [last-draft](http://lastdraft.vace.nz) using [Giphy](https://github.com/Giphy/GiphyAPI)

[![npm version](https://badge.fury.io/js/ld-sticker.svg)](https://badge.fury.io/js/ld-sticker)

# Install
```jsx
npm install ld-sticker --save
```

# Use
```jsx
import {Editor} from 'last-draft'
import sticker from 'ld-sticker'
let plugins = [sticker]

export default class ExampleEditor extends Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromHtml('<div></div>')
    this.state = { value: INITIAL_STATE }
  }

  onChange(editorState) {
    this.setState({ value: editorState })
  }

  render() {
    return (
      <Editor
        inline={['bold', 'italic', 'code', 'dropcap']}
        blocks={['h2', 'quote']}
        plugins={plugins}
        editorState={this.state.value}
        onChange={::this.onChange} />
    )
  }
}
```

## Styles

Last Draft plugins use styled-components 💅 for the base styling.

## Custom Styles with CSS

You can also add custom css to override the base styling with the following class names specified below:

```css
.ld-sticker-modal-wrapper {}
.ld-sticker-block-wrapper {}
.ld-sticker-block {}
.ld-sticker-block-image {}
.ld-sticker-block-action {}
.ld-button-sticker-close {}
.ld-sticker-button {}
.ld-button-sticker-picker-close {}
.ld-button-sticker-picker-close-wrapper {}

.ld-sticker-picker-input {}
.ld-sticker-picker-wrapper-outer {}
.ld-sticker-picker-wrapper {}
.ld-sticker-picker-gif {}
```
