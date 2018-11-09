// @flow

const titleMap = {
  bitbox: 'BITBOX',
  wormhole: 'Wormhole',
  rest: 'REST',
  gui: 'GUI',
  slp: 'SLP',
  other: 'Other',
}
export const getTitleDisplay = (product: string) => {
  return titleMap[product] || titleMap['other']
}
