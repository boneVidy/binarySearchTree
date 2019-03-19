import { Nullable } from "./types";
import {CompareFunction, Comparetor} from "./comparetor";
export class BinaryTreeNode<T = any> {
  protected left: Nullable<BinaryTreeNode<T>> = null;
  protected right: Nullable<BinaryTreeNode<T>> = null;
  protected parent: Nullable<BinaryTreeNode<T>> = null;

  protected comparetor: Comparetor<T> = new Comparetor();
  // public value: Nullable<T> = null;
  constructor( public value: Nullable<T> = null, compareFn?: CompareFunction) {
    if (compareFn) {
      this.comparetor = new Comparetor(compareFn);

    }
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


  public find(value: T):Nullable<T> {
    if (this.value === null) {
      return null;
    }
    if (this.comparetor.equal(value, this.value!)) {
      return this.value;
    }
    if (this.comparetor.lessThan(value, this.value!)) {

      if (this.left) return this.left.find(value);
      return null;
    }

    if (this.comparetor.greaterThan(value, this.value!)) {
      if (this.right) return this.right.find(value);

    }
    return null;
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

