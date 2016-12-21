import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1, title: 'Article 1', identifier: 'article-1',
        category: {id: 10000, name: '分类1'},
        content: "Article 1 content"
    },
    {
        id: 2, title: 'Article 2', identifier: 'article-2',
        category: {id: 10000, name: '分类1'},
        content: "Article 2 content"
    },
    {
        id: 3, title: 'Article 3', identifier: 'article-3',
        category: {id: 10000, name: '分类1'},
        content: "Article 3 content"
    },
    {
        id: 4, title: 'Article 4', identifier: 'article-4',
        category: {id: 10000, name: '分类1'},
        content: "Article 4 content"
    }
]