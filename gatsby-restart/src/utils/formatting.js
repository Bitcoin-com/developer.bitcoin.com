// @flow


const titleMap = {
  'bitbox': 'BitBox',
  'wormhole': 'Wormhole',
  'rest': 'REST',
  'gui': 'GUI',
  'other': 'Other'
}
export const getTitleDisplay = (product: string) => {
  return titleMap[product] || titleMap['other'];
}