"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTreeNode_1 = require("./binaryTreeNode");
const comparetor_1 = require("./comparetor");
class BinarySearchTreeNode extends binaryTreeNode_1.BinaryTreeNode {
    constructor(value, compareFn) {
        super(value);
        this.left = null;
        this.right = null;
        this.parent = null;
        this.comparetor = new comparetor_1.Comparetor();
        if (compareFn) {
            this.comparetor = new comparetor_1.Comparetor(compareFn);
        }
    }
    insert(value) {
        if (this.value === null) {
            this.value = value;
            return this;
        }
        if (this.comparetor.lessThan(value, this.value)) {
            if (this.left) {
                return this.left.insert(value);
            }
            const newNode = new BinarySearchTreeNode(value, this.comparetor.compare);
            this.setLeft(newNode);
            return newNode;
        }
        if (this.comparetor.greaterThan(value, this.value)) {
            if (this.right) {
                return this.right.insert(value);
            }
            const newNode = new BinarySearchTreeNode(value, this.comparetor.compare);
            this.setRight(newNode);
            return newNode;
        }
        return this;
    }
    find(value) {
        if (this.value === null) {
            return null;
        }
        if (this.comparetor.equal(value, this.value)) {
            return this.value;
        }
        if (this.comparetor.lessThan(value, this.value)) {
            if (this.left)
                return this.left.find(value);
            return null;
        }
        if (this.comparetor.greaterThan(value, this.value)) {
            if (this.right)
                return this.right.find(value);
        }
        return null;
    }
    getMax() {
        if (this.right) {
            return this.right.getMax();
        }
        return this.value;
    }
    getMin() {
        if (this.left) {
            return this.left.getMin();
        }
        return this.value;
    }
}
exports.BinarySearchTreeNode = BinarySearchTreeNode;
//# sourceMappingURL=binarySearchTree.js.map