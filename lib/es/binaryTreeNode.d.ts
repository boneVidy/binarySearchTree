import { Nullable } from "./types";
import { Comparetor } from "./comparetor";
export declare class BinaryTreeNode<T> {
    value: T;
    protected left: Nullable<BinaryTreeNode<T>>;
    protected right: Nullable<BinaryTreeNode<T>>;
    protected parent: Nullable<BinaryTreeNode<T>>;
    protected comparetor: Comparetor<T>;
    constructor(value: T);
    setLeft(node: BinaryTreeNode<T>): void;
    setRight(node: BinaryTreeNode<T>): void;
    traverseInOrder(node: BinaryTreeNode<T>): IterableIterator<BinaryTreeNode<T>>;
    [Symbol.iterator](): Iterator<BinaryTreeNode<T>>;
}
