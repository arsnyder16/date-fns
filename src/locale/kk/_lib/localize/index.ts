import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

const eraValues = {
  narrow: ['б.з.д.', 'б.з.'],
  abbreviated: ['б.з.д.', 'б.з.'],
  wide: ['біздің заманымызға дейін', 'біздің заманымыз']
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ші тоқ.', '2-ші тоқ.', '3-ші тоқ.', '4-ші тоқ.'],
  wide: ['1-ші тоқсан', '2-ші тоқсан', '3-ші тоқсан', '4-ші тоқсан']
}

const monthValues = {
  narrow: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  abbreviated: [
    'қаң',
    'ақп',
    'нау',
    'сәу',
    'мам',
    'мау',
    'шіл',
    'там',
    'қыр',
    'қаз',
    'қар',
    'жел'
  ],
  wide: [
    'қаңтар',
    'ақпан',
    'наурыз',
    'сәуір',
    'мамыр',
    'маусым',
    'шілде',
    'тамыз',
    'қыркүйек',
    'қазан',
    'қараша',
    'желтоқсан'
  ]
}
const formattingMonthValues = {
  narrow: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  abbreviated: [
    'қаң',
    'ақп',
    'нау',
    'сәу',
    'мам',
    'мау',
    'шіл',
    'там',
    'қыр',
    'қаз',
    'қар',
    'жел'
  ],
  wide: [
    'қаңтар',
    'ақпан',
    'наурыз',
    'сәуір',
    'мамыр',
    'маусым',
    'шілде',
    'тамыз',
    'қыркүйек',
    'қазан',
    'қараша',
    'желтоқсан'
  ]
}

const dayValues = {
  narrow: ['Ж', 'Д', 'С', 'С', 'Б', 'Ж', 'С'],
  short: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  abbreviated: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  wide: [
    'жексенбі',
    'дүйсенбі',
    'сейсенбі',
    'сәрсенбі',
    'бейсенбі',
    'жұма',
    'сенбі'
  ]
}

const dayPeriodValues = {
  narrow: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасы',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күндіз',
    evening: 'кеш',
    night: 'түн'
  },
  wide: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасы',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күндіз',
    evening: 'кеш',
    night: 'түн'
  }
}
const formattingDayPeriodValues = {
  narrow: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасында',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күн',
    evening: 'кеш',
    night: 'түн'
  },
  wide: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасында',
    noon: 'түсте',
    morning: 'таңертең',
    afternoon: 'күндіз',
    evening: 'кеште',
    night: 'түнде'
  }
}

function ordinalNumber(dirtyNumber, dirtyOptions) {
  const options = dirtyOptions || {}
  const unit = String(options.unit)
  const suffix

  if (unit === 'date') {
    suffix = '-ші'
  } else if (unit === 'week' || unit === 'minute' || unit === 'second') {
    suffix = '-ші'
  } else {
    suffix = '-ші'
  }

  return dirtyNumber + suffix
}

const localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
