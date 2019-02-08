'use strict';

const zip = (...objects) => Object.assign.apply(null, [].reverse.call(objects));
