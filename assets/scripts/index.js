'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const productsEvents = require('./products/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  productsEvents.addProductHandlers()
  $('.main').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
