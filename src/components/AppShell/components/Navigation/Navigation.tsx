import { NavLink } from 'react-router-dom';
import { Text } from '@mantine/core';
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

export const Navigation = () => {
  const pages = [
    { label: 'Главная', icon: IconHome, href: '../' },
    { label: 'Профиль', icon: IconUser, href: '../Profile' },
    { label: 'Подписки', icon: IconUserHeart, href: '../ChannelSubscribe' },
    { label: 'Мой канал', icon: IconUsersGroup, href: '../MyChannel' },
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
    {
      name: 'Тестовая',
      icon: IconAbacus,
      href: '../ChangeProfile',
      label: 'Для изменения профиля',
    },
  ];

  return (
    <>
      <h1>Навигация</h1>
      {pages.map((page, index) => (
        <NavLink
          key={index}
          to={page.href}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Text>{page.label}</Text>
        </NavLink>
      ))}
    </>
  );
};
