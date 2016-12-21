import { ITree, ITreeNode, ITreeOptions } from '../defs/api';

export class Tree implements ITree {
    roots: ITreeNode[];
    getActiveNode(): ITreeNode{return null;}
    focusedNode: ITreeNode;
    options: ITreeOptions;
    isFocused: boolean;
    getFirstRoot(): ITreeNode{return null;}
    getLastRoot(): ITreeNode{return null;}
    setFocus(value: boolean){return null;}
    focusNextNode(){}
    focusPreviousNode(){}
    focusDrillDown(){}
    focusDrillUp(){}
    filterNodes(filter, autoShow?:boolean){}
    clearFilter(){}
    moveNode(node:ITreeNode, to:{node:ITreeNode, index:number}){}
    isExpanded(node: ITreeNode): boolean{return false;}
    isActived(node: ITreeNode): boolean{return false;}
    isNodeFocused(node: ITreeNode): boolean{return false;}
}