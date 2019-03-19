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
    find(value: T): Nullable<T>;
}
