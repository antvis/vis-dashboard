import React from 'react';
import { GithubFilled, WechatFilled } from '@ant-design/icons';

type Props = {
  /** 作者 */
  author: string;
  /** 联系方式 */
  contact: string;
  githubUrl: string;
  wechat: string;
};

const Footer: React.FC<Props> = props => {
  return (
    <footer>
      <div className="">Made with ❤️</div>
      <div className="actions" style={{ position: 'absolute', right: '24px' }}>
        <a
          href={props.githubUrl}
          style={{ textDecoration: 'none' }}
          target="_blank"
        >
          <GithubFilled className="github-icon action-link" />
        </a>
        <a
          href={props.wechat}
          style={{ textDecoration: 'none' }}
          target="_blank"
        >
          <WechatFilled className="wechat-icon action-link" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
