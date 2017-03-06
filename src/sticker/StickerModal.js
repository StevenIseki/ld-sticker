import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Picker from './Picker'

export default class extends Component {
  addSticker (sticker) {
    let stickerUrl = sticker.fixed_width.url
    const { editorState, onChange, insertDataBlock } = this.props
    const data = {src: stickerUrl, type: 'sticker'}

    onChange(insertDataBlock(editorState, data))
    this.props.closeModal()
  }

  render () {
    return (
      <Wrapper className='ld-sticker-modal-wrapper'>
        <Picker onSelected={::this.addSticker} closeModal={this.props.closeModal} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  background-color: inherit;
  width: 360px;
`
