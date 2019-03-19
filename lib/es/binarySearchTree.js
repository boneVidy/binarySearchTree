"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTreeNode_1 = require("./binaryTreeNode");
class BinarySearchTreeNode extends binaryTreeNode_1.BinaryTreeNode {
    constructor() {
        super(...arguments);
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    insert(value) {
        if (this.comparetor.equal(this.value, null)) {
            this.value = value;
            return this;
        }
        if (this.comparetor.lessThan(this.value, value)) {
            if (this.left) {
                return this.left.insert(value);
            }
            const newNode = new BinarySearchTreeNode(value);
            this.setLeft(newNode);
            return newNode;
        }
        if (this.comparetor.greaterThan(this.value, value)) {
            if (this.right) {
                return this.right.insert(value);
            }
            const newNode = new BinarySearchTreeNode(value);
            this.setRight(newNode);
            return newNode;
        }
        return this;
    }
}
exports.BinarySearchTreeNode = BinarySearchTreeNode;
const bst = new BinarySearchTreeNode(2);
bst.insert(2);
bst.insert(1);
bst.insert(4);
bst.insert(3);
console.log(Array.from([...bst]).map(item => item.value));
//# sourceMappingURL=binarySearchTree.js.map