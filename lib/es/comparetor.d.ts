import { Nullable } from "./types";
export declare type CompareFunction<T = any> = (a: T, b: Nullable<T>) => 0 | 1 | -1;
export declare class Comparetor<T = any> {
    compare: CompareFunction<T>;
    constructor(compare?: CompareFunction<T>);
    /**
     * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
    static defaultCompareFunction(a: any, b: any): 1 | 0 | -1;
    /**
     * Checks if two variables are equal.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    equal(a: T, b: T): boolean;
    /**
     * Checks if variable "a" is less than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a: T, b: T): boolean;
    /**
     * Checks if variable "a" is greater than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a: T, b: T): boolean;
    /**
     * Checks if variable "a" is less than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a: T, b: T): boolean;
    /**
     * Checks if variable "a" is greater than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a: T, b: T): boolean;
}
