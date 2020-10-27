'use strict'

// creating a base name for the mongodb
const mongooseBaseName = 'the-holistic-educator-api'

// create the mongodb uri for development and test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
// CHANGING THE HEROKU CONFIG REFERENCE BELOW FOR ATLAS MIGRATION
// 'DB_URI' was 'MONGODB_URI'
const currentDb = process.env.DB_URI || localDb

module.exports = currentDb
