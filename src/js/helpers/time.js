import {t} from './i18n'

class Time {
  constructor(){
    this._formats = [
      [60, t('seconds'), 1],
      [120, t('1 minute ago'), t('1 minute from now')],
      [3600, t('minutes'), 60],
      [7200, t('1 hour ago'), t('1 hour from now')],
      [86400, t('hours ago'), 3600],
      [172800, t('yesterday'), t('tomorrow')],
      [604800, t('days ago'), 86400],
      [1209600, t('last week'), t('next week')],
      [2419200, t('weeks ago'), 604800],
      [4838400, t('last month'), t('next month')],
      [29030400, t('months ago'), 2419200],
      [58060800, t('last year'), t('next year')],
      [2903040000, t('years ago'), 29030400],
    ]
  }

  agoInWords(ts){
    const now = new Date()
    var seconds = Math.floor((now - ts) / 1000),
      token = t('ago'),
      flag = 1

    if (seconds == 0){
      return t('just now')
    }
    if (seconds < 0){
      seconds = Math.abs(seconds)
      flag = 2
      token = t('from now')
    }

    // Find the time by the absolute seconds
    var timeString = ''
    this._formats.reduce((p, c) => {
      if ((p[0] <= seconds) && (seconds < c[0])){
        timeString = this._formattedTime(seconds, c)
      }

      return c
    }, this._formats[0])

    return timeString
  }

  agoFromString(created){
    return this.agoInWords((new Date(created)).getTime())
  }

  _formattedTime(seconds, m){
    if (typeof(m[2]) == 'string'){
      return m[2]
    }

    return String(Math.floor(seconds/m[2]))+' '+m[1]
  }

}

export const time = new Time()
