import { ElementRef } from '@angular/core';
import { ITreeOptions, ITreeNode, ITree } from '../defs/api';

import { Tree } from './tree.model';

//import * as _ from '@types/lodash';

export class TreeNode implements ITreeNode {
    //parent: ITreeNode;
    //data: any;
    children: ITreeNode[];
    elementRef: any;
    level: number;
    path: string[];

    get id() {return this.getField('id');}
    set id(value){this.setField('id', value);}
    get displayField(): string {return this.getField("display");}

    get isHidden() {return this.getField("isHidden");}
    set isHidden(value) {this.setField("isHidden", value);}
    
    //helpers
    get isExpanded(): boolean {return this.tree.isExpanded(this);}
    get isActived(): boolean {return this.tree.isActived(this);}
    get isFocused(): boolean {return this.tree.isNodeFocused(this);}
    
    get isCollapsed(): boolean {return !this.isExpanded;}
    get isLeaf(): boolean {return !this.hasChildren;}
    get isRoot(): boolean {return this.parent.data.virtual;}
    get hasChildren(): boolean {return !!(this.data.hasChildren || (this.children && this.children.length > 0));}
    get realParent(): ITreeNode { return this.isRoot ? null : this.parent; }

    // proxy functions:
    get options(): ITreeOptions { return this.tree.options; }
    //fireEvent(event) { this.treeModel.fireEvent(event) }
    get context():any { return this.options.context; }


    constructor(public data: any, public parent: ITreeNode, public tree: ITree){
        this.id = this.id || uuid();
        this.level = this.parent ?  this.parent.level + 1 : 0;
        this.path = this.parent ?  [...this.parent.path, this.id] : [this.id];

        if(this.getField('children')){
            this._initChildren();
        }
    }

    _initChildren() {
        this.children = this.getField('children')
            .map(child => new TreeNode(child, this, this.tree));
    }

    // tools
    getField(key) {
        return this.data[this.options[``]];
    }

    setField(key, value) {

    }

    //traversing
    findNextsibling(skipHidden: boolean): ITreeNode {
        return null;
    }

    findPreviousSibling(skipHidden: boolean): ITreeNode {
        return null;
    }

    getFirstChild(skipHidden: boolean): ITreeNode {
        return null;
    }

    getLastChild(skipHidden: boolean): ITreeNode {
        return null;
    }

    findNextNode(goInside: boolean): ITreeNode {
        return null;
    }

    findPreviousNode(skipHidden: boolean): ITreeNode {
        return null;
    }

    isDescendantOf(node:ITreeNode):boolean {
        return null;
    }

    toggleExpanded() {

    }

    expand() {

    }

    collapse() {

    }

    ensureVisible() {

    }

    toggleActivated(multi) {

    }

    focus() {

    }

    blur() {

    }

    scrollIntoView() {

    }

    fireEvent(event: any) {

    }
}

function uuid() {
  return Math.floor(Math.random() * 10000000000000);
}