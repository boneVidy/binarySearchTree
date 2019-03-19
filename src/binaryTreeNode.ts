import { Nullable } from "./types";
export class BinaryTreeNode<T = any> {
  protected left: Nullable<BinaryTreeNode<T>> = null;
  protected right: Nullable<BinaryTreeNode<T>> = null;
  protected parent: Nullable<BinaryTreeNode<T>> = null;

  // public value: Nullable<T> = null;
  constructor( public value: Nullable<T> = null) {

  }

  public setLeft(node: BinaryTreeNode<T>) {
    if (this.left) {
      this.left.parent = null;
    }
    this.left = node;
    this.left.parent = this;
  }

  public setRight(node: BinaryTreeNode<T>) {
    if (this.right) {
      this.right.parent = null;
    }
    this.right = node;
    this.right.parent = this;
  }




  *traverseInOrder(
    node: BinaryTreeNode<T>
  ): IterableIterator<BinaryTreeNode<T>> {
    if (node.left) {
      yield * this.traverseInOrder(node.left);
    }
    yield node;
    if (node.right) {
      yield * this.traverseInOrder(node.right);
    }
    return;
  }

  [Symbol.iterator](): Iterator<BinaryTreeNode<T>> {
    return this.traverseInOrder(this);
  }
}

