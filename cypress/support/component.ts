// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from '../../src/router'

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {}
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []

  options.global.plugins.push({
    install(app) {
      app.use(ElementPlus)
      app.use(pinia)
      app.use(router)
    }
  })

  return mount(component, options)
})

// Example use:
// cy.mount(MyComponent)
