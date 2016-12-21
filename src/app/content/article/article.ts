import { Category } from '../category/category';

export class Article {
    id: number;
    title: string;
    identifier: string;
    content: string;
    category: Category;
}