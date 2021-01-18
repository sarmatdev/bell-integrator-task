import Vue from 'vue'

const requireComponent = require.context(
  './base/',
  true,
  /[\w-]+\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  // @ts-ignore
  const componentName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .match(/(?:^|\/|\\)([^\\/]+)$/)[1]

  Vue.component(componentName, componentConfig.default || componentConfig)
})
