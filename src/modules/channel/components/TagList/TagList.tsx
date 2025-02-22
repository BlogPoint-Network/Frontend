import { FC } from 'react';
import { ITag } from '@app-types';
import Tag from '@modules/channel/components/Tag/Tag.tsx';

interface TagListProps {
  tags: ITag[];
}

export const TagList: FC<TagListProps> = ({ tags }) => {
  return (
    <>
      {tags.map(tag => (
        <Tag id={tag.id} name={tag.name} color={tag.color} />
      ))}
    </>
  );
};
