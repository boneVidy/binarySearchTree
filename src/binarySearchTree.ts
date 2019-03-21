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


    if (this.comparetor.lessThan(value,this.value)) {
      if (this.left) {
        return this.left.insert(value);
      }
      const newNode = new BinarySearchTreeNode<T>(value, this.comparetor.compare);
      this.setLeft(newNode);
      return newNode;
    }

    if (this.comparetor.greaterThan(value,this.value)) {
      if (this.right) {
        return this.right.insert(value);
      }
      const newNode = new BinarySearchTreeNode<T>(value, this.comparetor.compare);
      this.setRight(newNode);
      return newNode;
    }

    return this;
  }

  public findNode(value: T):Nullable<BinarySearchTreeNode<T>> {
    if (this.value === null) {
      return null;
    }
    if (this.comparetor.equal(value, this.value)) {
      return this;
    }
    if (this.comparetor.lessThan(value, this.value)) {

      if (this.left) return this.left.findNode(value);
      return null;
    }

    if (this.comparetor.greaterThan(value, this.value)) {
      if (this.right) return this.right.findNode(value);

    }
    return null;
  }
  public find(value: T):Nullable<T> {
    const node = this.findNode(value);
    if (node) {
      return node.value;
    }
    return null;
  }

  public getMaxNode ():Nullable<BinarySearchTreeNode<T>>{
    if (this.right) {
      return this.right.getMaxNode();
    }
    return this;
  }

  public getMaxValue ():Nullable<T> {
    const maxNode = this.getMaxNode();
    if (maxNode) return maxNode.value;
  }

  public getMinNode ():Nullable<BinarySearchTreeNode<T>>{
    if (this.left) {
      return this.left.getMinNode();
    }
    return this;
  }
  public getMinValue ():Nullable<T> {
    const minNode = this.getMinNode();
    if (minNode) return minNode.value;
  }

  public getParent () {
    return this.parent;
  }
  // public remove (value: T) {
  //   if (this.left && this.comparetor.equal(this.left, value )) {
  //
  //   }
  // }

  public removeByValue (value:T) {
    const nodeToRemove = this.findNode(value);
    if (!nodeToRemove) return false;

    const parent = nodeToRemove.getParent();
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeByNode(nodeToRemove);
      }
      nodeToRemove.value = null as unknown as T;
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const nextBiggerNode = nodeToRemove.right.getMinNode();
      if (!this.comparetor.equal(nextBiggerNode!.value, nodeToRemove.right.value)) {
        //repalce nextBiggerNodeValue to the removeNode
        this.removeByValue(nextBiggerNode!.value);
        nodeToRemove.value = nextBiggerNode!.value;
      } else {
        // repalce nodeToRemove and nodeToRemove's right
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.setRight(nodeToRemove.right.right!);
      }
    } else {
      const childNode = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode!);
      } else {
        nodeToRemove.right = childNode!.right;
        nodeToRemove.left = childNode!.left;
        nodeToRemove.value = childNode!.value
        // BinaryTreeNode.copyNode(childNode, nodeToRemove);
      }
    }
    nodeToRemove.parent = null;

    return true;
    // if (nodeToRemove)
  }

  public removeByNode (nodeToRemove:BinarySearchTreeNode<T>) {
    const {value} = nodeToRemove;
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


  public replaceChild(nodeToReplace:BinarySearchTreeNode<T>, replacementNode:BinarySearchTreeNode<T>) {
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


