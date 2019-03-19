import { BinaryTreeNode } from "./binaryTreeNode";
import {Nullable} from "./types";



export class BinarySearchTreeNode<T = any> extends BinaryTreeNode<T> {
  protected left: Nullable<BinarySearchTreeNode<T>> = null;
  protected right: Nullable<BinarySearchTreeNode<T>> = null;
  protected parent: Nullable<BinarySearchTreeNode<T>> = null;
  public insert (value:T):BinarySearchTreeNode<T> {
    if (this.comparetor.equal(this.value, null as unknown as T)) {
      this.value = value;
      return this;
    }

    if (this.comparetor.lessThan(value,this.value)) {
      if (this.left) {
        return this.left.insert(value);
      }
      const newNode = new BinarySearchTreeNode<T>(value);
      this.setLeft(newNode);
      return newNode;
    }

    if (this.comparetor.greaterThan(value,this.value)) {
      if (this.right) {
        return this.right.insert(value);
      }
      const newNode = new BinarySearchTreeNode<T>(value);
      this.setRight(newNode);
      return newNode;
    }

    return this;
  }
}


