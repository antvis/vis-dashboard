import React, { ReactNode } from 'react';
import * as _ from 'lodash';
import { Col, Row } from 'antd';
import "./explaination.less";

interface Props {
  className: string;
  title: string | ReactNode;
  details: Array<{ icon?: ReactNode; title: string | ReactNode; description: string | ReactNode }>;
}

export const Explaination: React.FC<Props> = (props) => {
  const { title, details, className = '' } = props;
  return (
    <div className={`${className} explaination`}>
      <div className='title'>{title}</div>
      <div className='detail'>
        {_.map(details, item => (
          <Row className='detail-item'>
            {item.icon && <Col span={2}>{item.icon}</Col>}
            <Col span={22}>
              <Row className='title'>{item.title}</Row>
              <Row className='description'>{item.description}</Row>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  )
}