import { BinaryTreeNode } from "./binaryTreeNode";
import { Nullable } from "./types";
import { CompareFunction, Comparetor } from "./comparetor";
export declare class BinarySearchTreeNode<T = any> extends BinaryTreeNode<T> {
    protected left: Nullable<BinarySearchTreeNode<T>>;
    protected right: Nullable<BinarySearchTreeNode<T>>;
    protected parent: Nullable<BinarySearchTreeNode<T>>;
    protected comparetor: Comparetor<T>;
    constructor(value: T, compareFn?: CompareFunction);
    insert(value: T): BinarySearchTreeNode<T>;
    findNode(value: T): Nullable<BinarySearchTreeNode<T>>;
    find(value: T): Nullable<T>;
    getMaxNode(): Nullable<BinarySearchTreeNode<T>>;
    getMaxValue(): Nullable<T>;
    getMinNode(): Nullable<BinarySearchTreeNode<T>>;
    getMinValue(): Nullable<T>;
    getParent(): Nullable<BinarySearchTreeNode<T>>;
    removeByValue(value: T): boolean;
    removeByNode(nodeToRemove: BinarySearchTreeNode<T>): boolean;
    replaceChild(nodeToReplace: BinarySearchTreeNode<T>, replacementNode: BinarySearchTreeNode<T>): boolean;
}
