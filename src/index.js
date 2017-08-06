'use strict'

require('ace-css/css/ace.css')
require('font-awesome/css/font-awesome.css')

// Require index.html so it is copied to dist
require('./index.html')

const Elm = require('./Main.elm')

const mountNode = document.getElementById('main')


// .embed() can take an optional second argument.
// This could e.g. be an object handing inital data to the elm app
const app = Elm.Main.embed(mountNode)
