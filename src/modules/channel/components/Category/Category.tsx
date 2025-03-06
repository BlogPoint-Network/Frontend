import { ICategory } from '@app-types';
import { Button } from '@mantine/core';

function Category(props: ICategory) {
  return (
    <Button
      id={`${props.id}`}
      variant="outline"
      mb="5px"
      w="fit-content"
      pl="5px"
      pr="5px"
      bd={`solid ${props.color} 2px`}
      style={{ color: props.color, borderRadius: '20px' }}
    >
      {props.name}
    </Button>
  );
}

export default Category;
