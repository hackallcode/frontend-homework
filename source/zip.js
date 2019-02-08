'use strict';

/**
 * Concatenates objects into one. When repeating properties, the first mentioned value is used.
 * @param {Object[]} objects - The objects that will concatenate.
 * @return {Object} Result of concatenation.
 */
const zip = (...objects) => objects.reduceRight((res, obj) => {
    return obj instanceof Object && !(obj instanceof Array) ? Object.assign(res, obj) : res
}, {});

// Немного исправленный старый вариант (чтобы показать, где там spread можно было применить):
// const zip = (...objects) => Object.assign(...[].reverse.call(objects));
