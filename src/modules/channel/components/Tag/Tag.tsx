import { ITag } from '@app-types';
import { Button } from '@mantine/core';

function Tag(props: ITag) {
  return (
    <Button
      id={`${props.id}`}
      variant="outline"
      mb="5px"
      w="fit-content"
      pl="5px"
      pr="5px"
      h="26px"
      bd={`solid ${props.color} 2px`}
      style={{ color: props.color, borderRadius: '10px' }}
    >
      #{props.name}
    </Button>
  );
}

export default Tag;
