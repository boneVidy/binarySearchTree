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
    findNode(value) {
        if (this.value === null) {
            return null;
        }
        if (this.comparetor.equal(value, this.value)) {
            return this;
        }
        if (this.comparetor.lessThan(value, this.value)) {
            if (this.left)
                return this.left.findNode(value);
            return null;
        }
        if (this.comparetor.greaterThan(value, this.value)) {
            if (this.right)
                return this.right.findNode(value);
        }
        return null;
    }
    find(value) {
        const node = this.findNode(value);
        if (node) {
            return node.value;
        }
        return null;
    }
    getMaxNode() {
        if (this.right) {
            return this.right.getMaxNode();
        }
        return this;
    }
    getMaxValue() {
        const maxNode = this.getMaxNode();
        if (maxNode)
            return maxNode.value;
    }
    getMinNode() {
        if (this.left) {
            return this.left.getMinNode();
        }
        return this;
    }
    getMinValue() {
        const minNode = this.getMinNode();
        if (minNode)
            return minNode.value;
    }
    getParent() {
        return this.parent;
    }
    // public remove (value: T) {
    //   if (this.left && this.comparetor.equal(this.left, value )) {
    //
    //   }
    // }
    removeByValue(value) {
        const nodeToRemove = this.findNode(value);
        if (!nodeToRemove)
            return false;
        const parent = nodeToRemove.getParent();
        if (!nodeToRemove.left && !nodeToRemove.right) {
            if (parent) {
                parent.removeByNode(nodeToRemove);
            }
            nodeToRemove.value = null;
        }
        else if (nodeToRemove.left && nodeToRemove.right) {
            const nextBiggerNode = nodeToRemove.right.getMinNode();
            if (!this.comparetor.equal(nextBiggerNode.value, nodeToRemove.right.value)) {
                //repalce nextBiggerNodeValue to the removeNode
                this.removeByValue(nextBiggerNode.value);
                nodeToRemove.value = nextBiggerNode.value;
            }
            else {
                // repalce nodeToRemove and nodeToRemove's right
                nodeToRemove.value = nodeToRemove.right.value;
                nodeToRemove.setRight(nodeToRemove.right.right);
            }
        }
        else {
            const childNode = nodeToRemove.left || nodeToRemove.right;
            if (parent) {
                parent.replaceChild(nodeToRemove, childNode);
            }
            else {
                nodeToRemove.right = childNode.right;
                nodeToRemove.left = childNode.left;
                nodeToRemove.value = childNode.value;
                // BinaryTreeNode.copyNode(childNode, nodeToRemove);
            }
        }
        nodeToRemove.parent = null;
        return true;
        // if (nodeToRemove)
    }
    removeByNode(nodeToRemove) {
        const { value } = nodeToRemove;
        if (this.left && this.comparetor.equal(this.left.value, value)) {
            this.left = null;
            return true;
        }
        if (this.right && this.comparetor.equal(this.right.value, value)) {
            this.right = null;
            return true;
        }
        return false;
    }
    replaceChild(nodeToReplace, replacementNode) {
        if (!nodeToReplace || !replacementNode) {
            return false;
        }
        if (this.left && this.comparetor.equal(this.left.value, nodeToReplace.value)) {
            this.left = replacementNode;
            replacementNode.parent = this;
            return true;
        }
        if (this.right && this.comparetor.equal(this.right.value, nodeToReplace.value)) {
            this.right = replacementNode;
            replacementNode.parent = this;
            return true;
        }
        return false;
    }
}
exports.BinarySearchTreeNode = BinarySearchTreeNode;
//# sourceMappingURL=binarySearchTree.js.map