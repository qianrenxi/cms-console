export interface ITreeOptions {
    idField?: string;
    displayField?: string;
    childrenField?: string;
    isExpandedField?: string;
    isHiddenField?: string;

    getChildren?: (node: ITreeNode) => any;
    actionMapping?: any;
    allowDrag?: boolean;
    allowDrop?: boolean | IAllowDropFn;
    levelIndent?: number;

    //deprecated
    treeNodeTemplate?: any;
    loadingComponent?: any;
    hasCustomContextMenu?: any;
    context?: any;
}

export interface ITreeNode {
    displayField: string;
    parent: ITreeNode;
    children: ITreeNode[];
    data: any;
    elementRef: any;
    level: number;
    path: string[];
    context: any;

    //helpers
    isExpanded: boolean;
    isActived: boolean;
    isFocused: boolean;
    isCollapsed: boolean;
    isLeaf: boolean;
    hasChildren: boolean;
    isRoot: boolean;

    //traversing
    findNextsibling(skipHidden: boolean): ITreeNode;
    findPreviousSibling(skipHidden: boolean): ITreeNode;
    getFirstChild(skipHidden: boolean): ITreeNode;
    getLastChild(skipHidden: boolean): ITreeNode;
    findNextNode(goInside: boolean): ITreeNode;
    findPreviousNode(skipHidden: boolean): ITreeNode;
    isDescendantOf(node:ITreeNode):boolean;
    toggleExpanded();
    expand();
    collapse();
    ensureVisible();
    toggleActivated(multi);
    focus();
    blur();
    scrollIntoView();
    fireEvent(event: any);
}

export interface ITree {
    roots: ITreeNode[];
    getActiveNode(): ITreeNode;
    focusedNode: ITreeNode;
    options: ITreeOptions;
    isFocused: boolean;
    getFirstRoot(): ITreeNode;
    getLastRoot(): ITreeNode;
    setFocus(value: boolean);
    focusNextNode();
    focusPreviousNode();
    focusDrillDown();
    focusDrillUp();
    filterNodes(filter, autoShow?:boolean);
    clearFilter();
    moveNode(node:ITreeNode, to:{node:ITreeNode, index:number});
    //addon
    isExpanded(node: ITreeNode): boolean;
    isActived(node: ITreeNode): boolean;
    isNodeFocused(node: ITreeNode): boolean;
}

export interface ITreeNodeDrag {
    getDragNode():{ node: ITreeNode, index:number };
}

export interface IAllowDropFn {
     (element:any, to:{parent:ITreeNode, index:number}):boolean;
}