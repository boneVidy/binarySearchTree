import { BinaryTreeNode } from "./binaryTreeNode";
import {Nullable} from "./types";
import {CompareFunction, Comparetor} from "./comparetor";



export class BinarySearchTreeNode<T = any> extends BinaryTreeNode<T> {
  protected left: Nullable<BinarySearchTreeNode<T>> = null;
  protected right: Nullable<BinarySearchTreeNode<T>> = null;
  protected parent: Nullable<BinarySearchTreeNode<T>> = null;
  protected comparetor: Comparetor<T> = new Comparetor();
  constructor (value:T,  compareFn?: CompareFunction) {
    super(value);
    if (compareFn) {
      this.comparetor = new Comparetor(compareFn);

    }
  }
  public insert (value:T):BinarySearchTreeNode<T> {
    if (this.value === null) {
      this.value = value;
      return this;
    }


    if (this.comparetor.lessThan(value,this.value!)) {
      if (this.left) {
        return this.left.insert(value);
      }
      const newNode = new BinarySearchTreeNode<T>(value, this.comparetor.compare);
      this.setLeft(newNode);
      return newNode;
    }

    if (this.comparetor.greaterThan(value,this.value!)) {
      if (this.right) {
        return this.right.insert(value);
      }
      const newNode = new BinarySearchTreeNode<T>(value, this.comparetor.compare);
      this.setRight(newNode);
      return newNode;
    }

    return this;
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


  public getMax ():Nullable<T> {
    if (this.right) {
      return this.right.getMax();
    }
    return this.value;
  }


  public getMin ():Nullable<T> {
    if (this.left) {
      return this.left.getMin();
    }
    return this.value;
  }
}


