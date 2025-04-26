import {
  IconAbacus,
  IconChartBarPopular,
  IconHome,
  IconTrendingUp,
  IconUser,
  IconUserHeart,
  IconUsersGroup,
} from '@tabler/icons-react';

export const pages = [
  { label: 'Главная', icon: IconHome, href: '../' },
  { label: 'Профиль', icon: IconUser, href: '../Profile' },
  { label: 'Подписки', icon: IconUserHeart, href: '../subscribe-channels' },
  { label: 'Мои каналы', icon: IconUsersGroup, href: '../user-channels' },
  {
    label: 'Рекомендации',
    icon: IconChartBarPopular,
    href: '../recommendations',
  },
  {
    label: 'Популярные каналы',
    icon: IconTrendingUp,
    href: '../popular-channels',
  },
  {
    name: 'Тестовая',
    icon: IconAbacus,
    href: '../Test',
    label: 'Для тестов',
  },
  {
    name: 'Тестовая2',
    icon: IconAbacus,
    href: '../Test2',
    label: 'Для тестов2',
  },
];
