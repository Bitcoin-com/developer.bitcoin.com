/**
 * Handlebars block helper that repeats the content inside of it n number of times.
 * @param {integer} count - Number of times to repeat.
 * @param {object} options - Handlebars object.
 * @example
 * {{#list 5}}<li>List item!</li>{{/list}}
 * @example
 * {{#list 5}}<li>List item {{@index}}</li>{{/list}}
 * @returns The content inside of the helper, repeated n times.
 */

// Example file src/helpers/list.js
module.exports = function(count, options) {
  var str = '', data;

  if (options.data) {
    data = options.data;
  }

  for (var i = 1; i <= count; i++) {
    if (data) {
      data.index = i;
    }

    str += options.fn(this, { data: data });
  }
  return str;
}