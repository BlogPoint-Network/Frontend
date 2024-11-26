import { FC, ReactNode } from 'react';
import { boxFormColor } from '@constants';

interface IFormBoxProps {
  children?: ReactNode;
}

export const FullWidthBox: FC<IFormBoxProps> = props => {
  return (
    <div
      style={{
        padding: '10px 30px 15px 30px',
        width: '80%',
        background: boxFormColor,
        border: '1px solid black',
        borderRadius: '30px',
      }}
    >
      {props.children}
    </div>
  );
};
