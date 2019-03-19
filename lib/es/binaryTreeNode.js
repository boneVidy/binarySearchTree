"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryTreeNode {
    // public value: Nullable<T> = null;
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    setLeft(node) {
        if (this.left) {
            this.left.parent = null;
        }
        this.left = node;
        this.left.parent = this;
    }
    setRight(node) {
        if (this.right) {
            this.right.parent = null;
        }
        this.right = node;
        this.right.parent = this;
    }
    *traverseInOrder(node) {
        if (node.left) {
            yield* this.traverseInOrder(node.left);
        }
        yield node;
        if (node.right) {
            yield* this.traverseInOrder(node.right);
        }
        return;
    }
    [Symbol.iterator]() {
        return this.traverseInOrder(this);
    }
}
exports.BinaryTreeNode = BinaryTreeNode;
//# sourceMappingURL=binaryTreeNode.js.map