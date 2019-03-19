import { BinaryTreeNode } from "./binaryTreeNode";
import { Nullable } from "./types";
export declare class BinarySearchTreeNode<T> extends BinaryTreeNode<T> {
    protected left: Nullable<BinarySearchTreeNode<T>>;
    protected right: Nullable<BinarySearchTreeNode<T>>;
    protected parent: Nullable<BinarySearchTreeNode<T>>;
    insert(value: T): BinarySearchTreeNode<T>;
}
