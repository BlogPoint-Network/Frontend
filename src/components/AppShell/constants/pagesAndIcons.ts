import {
  IconAbacus,
  IconChartBarPopular,
  IconHome,
  IconQuestionMark,
  IconTrendingUp,
  IconUser,
  IconUserHeart,
  IconUsersGroup,
} from '@tabler/icons-react';

export const pages = [
  { label: 'Главная', icon: IconHome, href: '../' },
  { label: 'Профиль', icon: IconUser, href: '../Profile' },
  { label: 'Подписки', icon: IconUserHeart, href: '../ChannelSubscribe' },
  { label: 'Мои каналы', icon: IconUsersGroup, href: '../MyChannels' },
  {
    label: 'Рекомендации',
    icon: IconChartBarPopular,
    href: '../Recommendations',
  },
  {
    label: 'Популярные каналы',
    icon: IconTrendingUp,
    href: '../PopularChannels',
  },
  {
    label: 'Рейтинг каналов',
    icon: IconQuestionMark,
    href: '../RatingOfChannels',
  },
  {
    name: 'Тестовая',
    icon: IconAbacus,
    href: '../Test',
    label: 'Для тестов',
  },
];
