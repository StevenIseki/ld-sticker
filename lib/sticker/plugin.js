'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StickerButton = require('./StickerButton');

var _StickerButton2 = _interopRequireDefault(_StickerButton);

var _StickerBlock = require('./StickerBlock');

var _StickerBlock2 = _interopRequireDefault(_StickerBlock);

var _StickerModal = require('./StickerModal');

var _StickerModal2 = _interopRequireDefault(_StickerModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'sticker',
  button: _StickerButton2.default,
  block: _StickerBlock2.default,
  modal: _StickerModal2.default
}; /*
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */