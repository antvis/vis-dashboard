import React, { ReactNode } from 'react';
import * as _ from 'lodash';
import { Col, Row } from 'antd';
import "./explaination.less";

interface ExplainationDetailType {
  icon?: ReactNode;
  title: string | ReactNode;
  description: string | ReactNode;
}
export interface ExplainationProps {
  className: string;
  title: string | ReactNode;
  details: Array<ExplainationDetailType>;
}

export const Explaination: React.FC<ExplainationProps> = (props) => {
  const { title, details, className = '' } = props;
  return (
    <div className={`${className} explaination`}>
      <div className='title'>{title}</div>
      <div className='detail'>
        {_.map(details, (item, index) => (
          <Row className='detail-item' key={index}>
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