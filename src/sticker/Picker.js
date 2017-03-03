import React, { Component } from 'react'
import styled from 'styled-components'
import 'whatwg-fetch'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stickers: [],
      searchValue: '',
      giphySearchUrl: 'http://api.giphy.com/v1/stickers/search?api_key=dc6zaTOxFJmzC',
      giphyTrendingUrl: 'http://api.giphy.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC'
    }

    this.loadTrendingStickers()
  }

  static get propTypes () {
    return {
      onSelected: React.PropTypes.func.isRequired,
      visible: React.PropTypes.bool
    }
  }

  static get defaultProps () {
    return { visible: true }
  }

  loadTrendingStickers () {
    const {giphyTrendingUrl} = this.state
    fetch(giphyTrendingUrl, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      let stickers = response.data.map((g, i) => {return g.images})
      this.setState({stickers})
    })
  }

  searchStickers () {
    const {giphySearchUrl, searchValue} = this.state
    if (searchValue.length < 1) { return }
    let url = giphySearchUrl + '&q=' + searchValue.replace(' ', '+')
    this.setState({stickers: []})
    fetch(url, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      let stickers = response.data.map((g, i) => {return g.images})
      this.setState({stickers})
    })
  }

  onGiphySelect (sticker) {
    this.props.onSelected(sticker)
  }

  onSearchChange (event) {
    event.stopPropagation()
    this.setState({searchValue: event.target.value}, () => this.searchStickers())
  }

  onKeyDown (event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      this.reset()
    }
  }

  reset () {
    this.setState({searchValue: ''})
  }

  render() {
    const {stickers} = this.state
    const {visible} = this.props
    return (
      <GiphyPickerWrapper visible={visible}>
        <CloseWrapper
          className='ld-sticker-close-button'
          onClick={this.props.closeModal}
        >
          <Close width='24' height='24' viewBox='0 0 24 24' className='ld-button-close'>
            <g fill='currentColor' fillRule='evenodd'>
              <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
              <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
            </g>
          </Close>
        </CloseWrapper>

        <Input
          name='giphy-search'
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          onChange={::this.onSearchChange}
          value={this.state.searchValue}
          onKeyDown={::this.onKeyDown}
          placeholder='Search for stickers' />
        <GiphyWrapper>
          {
            stickers.map((g, i) => {
              let stickerUrl = g.fixed_width.url
              return (
                <Giphy
                  className='giphy-sticker'
                  key={i}
                  src={stickerUrl}
                  onClick={() => {this.onGiphySelect(g)}} />
              )
            })
          }
        </GiphyWrapper>

      </GiphyPickerWrapper>
    )
  }
}

const GiphyPickerWrapper = styled.div`
  position: absolute;
  border: 1px solid #F1F1F1;
  border-radius: 2px;
  background-color: inherit;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
  height: 400px;
  overflow-y: scroll;
  z-index: 100;
  padding: 1rem;
  margin-top: -3rem;
`

const GiphyPicker = styled.div`
  cursor: pointer;
  border: 1px solid #eee;
  padding: 0.4rem 0.8rem;
  margin: 0;
  border-radius: 2px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const GiphyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  align-items: baseline;
  background: white;
`

const Giphy = styled.img`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0.21rem;
`

const Input = styled.input`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: inherit;
  font-size: 15px;
  height: auto;
  line-height: 1.2;
  padding: 1rem;
  margin: 1rem 0.2rem;
  z-index: 100;
  &:focus {
    outline: none;
  }
`

const CloseWrapper = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0;
  cursor: pointer;
  border: 0;
  background: transparent;
  color: #ccc;
  width: 200px;
  margin: 0 1rem;

  &:hover {
    color: #9d1d20;
  }
`

const Close = styled.svg`
  display: block;
  margin: 0 0 0 auto;
`
