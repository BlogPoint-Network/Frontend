import { ITag } from '@app-types';
import { Button } from '@mantine/core';

type TagProps = ITag & {
  selected?: boolean; // выбран ли тег
}; // для передачи касточных стилей

const Tag = ({
  id,
  color,
  name,
  selected = false
}: TagProps) => {
  return (
    <Button
      id={`${id}`}
      variant="outline"
      mb="5px"
      w="fit-content"
      pl="5px"
      pr="5px"
      h="26px"
      bd={`solid ${color} 2px`}
      style={{
        backgroundColor: selected ? color : 'transparent',
        color: selected ? 'white' : color,
        borderRadius: '10px',
      }}
    >
      #{name}
    </Button>
  );
};

export default Tag;
