'use strict';

/**
 * Concatenates objects into one. When repeating properties, the first mentioned value is used.
 * @param {Object[]} objects - The objects that will concatenate.
 * @return {Object} Result of concatenation.
 */
const zip = (...objects) => objects.reduceRight((res, obj) => Object.assign(res, obj), {});

// Немного исправленный старый вариант:
// const zip = (...objects) => Object.assign(...[].reverse.call(objects));
