import { FC, ReactNode } from 'react';
import { boxFormColor } from '@constants';

interface IFormBoxProps {
  children?: ReactNode;
}

export const FormBox: FC<IFormBoxProps> = props => {
  return (
    <div
      style={{
        padding: '10px 30px 15px 30px',
        marginLeft: '200px',
        marginRight: '200px',
        background: boxFormColor,
        border: '1px solid black',
        borderRadius: '30px',
      }}
    >
      {props.children}
    </div>
  );
};
