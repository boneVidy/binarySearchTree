"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comparetor {
    constructor(compare = Comparetor.defaultCompareFunction) {
        this.compare = compare;
    }
    /**
     * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
    static defaultCompareFunction(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }
    /**
     * Checks if two variables are equal.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    equal(a, b) {
        return this.compare(a, b) === 0;
    }
    /**
     * Checks if variable "a" is less than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }
    /**
     * Checks if variable "a" is greater than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }
    /**
     * Checks if variable "a" is less than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }
    /**
     * Checks if variable "a" is greater than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }
}
exports.Comparetor = Comparetor;
//# sourceMappingURL=comparetor.js.map