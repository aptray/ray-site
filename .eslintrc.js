module.exports = {
  extends: ['eslint-config-ray'],
  globals: {
    Blob: true,
    WebSocket: true,
    location: true,
    fetch: true,
    getComputedStyle: true,
    MouseEvent: true,
    TouchEvent: true,
    HTMLElement: true,
    Node: true,
    Element: true
  },
  rules: {
    'no-plusplus': 0,
    'react/no-array-index-key': 0,
    'no-magic-numbers': 0,
    'no-mixed-operators': 0
  }
}
