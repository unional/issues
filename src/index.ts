import { ColorAppender } from 'aurelia-logging-color'

export function createAppender() {
  return new ColorAppender({ coloringText: true, maxColor: 40 })
}
