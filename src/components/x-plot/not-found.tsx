import React from 'react';
import { XComponentProps } from '@/types';

const Not_Found: React.FC<XComponentProps> = props => {
  return (
    <div key={props.id} data-type="not-found">
      找不到组件 {props.tag}
    </div>
  );
};

export default Not_Found;
