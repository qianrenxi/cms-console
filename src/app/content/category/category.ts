export class Category {
    id: number;
    name: string;
    identifer?: string;

    parent?: Category;
    children?: Category[];
}