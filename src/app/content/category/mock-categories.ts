import { Category } from './category';

export const CATEFORIES: Category[] = [
    {id: 10000, name: '产品服务'},
    {id: 20000, name: '作品案例',
        children: [
            {id: 20100, name: '设计印刷'},
            {id: 20200, name: '户外广告'},
            {id: 20300, name: '卡牌卡片'},
        ]
    },
    {id: 30000, name: '公司简介'},
    {id: 40000, name: '公司新闻'}
];