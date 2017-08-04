import {t} from '../src/js/helpers/i18n'
import {time} from '../src/js/helpers/time'

test('should translate strings', () => {
  expect('hello').toBe('hello')
})

test('should return time in words', () => {
  let now = (new Date()).getTime()
  expect(time.agoInWords(now)).toBe('just now')
})
