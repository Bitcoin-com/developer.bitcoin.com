// @flow

const titleMap = {
  bitbox: 'BITBOX',
  rest: 'REST',
  gui: 'GUI',
  slp: 'SLP',
  badger: 'Badger',
  cashscript: 'CashScript',
  other: 'Other',
}
export const getTitleDisplay = (product: string) => {
  return titleMap[product] || titleMap['other']
}
