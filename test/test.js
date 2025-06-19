const add = require('../index');
const assert = require('assert');

describe('Addition', () => {
    it('should add 2 and 3 to get 5', () => {
        assert.strictEqual(add(2, 3), 5);
    });
});
