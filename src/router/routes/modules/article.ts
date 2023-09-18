import { DEFAULT_LAYOUT } from '../base'
import { AppRouteRecordRaw } from '../types'

const ARTICLES: AppRouteRecordRaw = {
  path: '/articles',
  name: 'articles',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.articles',
    requiresAuth: true,
    icon: 'icon-file',
    order: 2
  },
  children: [
    {
      path: 'overview',
      name: 'articles/overview',
      component: () => import('@/views/articles/center/index'),
      meta: {
        locale: 'menu.articles.overview',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'list',
      name: 'articles/list',
      component: () => import('@/views/articles/list/index'),
      meta: {
        locale: 'menu.articles.list',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'editor',
      name: 'articles/editor',
      component: () => import('@/views/articles/editor/index.vue'),
      meta: {
        locale: 'menu.articles.editor',
        requiresAuth: true,
        hideInMenu: true,
        roles: ['*']
      }
    }
  ]
}

export default ARTICLES
