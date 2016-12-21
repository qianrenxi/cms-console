export class Navigation {
    id: number;
    identifier: string;
    name: string;
    link?: string;

    parent?: Navigation;
    children?: Navigation[];
}