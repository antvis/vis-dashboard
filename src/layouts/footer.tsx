import React from 'react';
import { GithubFilled } from '@ant-design/icons';

type Props = {
  /** 作者 */
  author: string;
  /** 联系方式 */
  contact: string;
  githubUrl: string;
};

const Footer: React.FC<Props> = props => {
  return (
    <footer>
      <div className="">Made with ❤️ <a href="https://github.com/antvis/g2plot" target="_blank">G2Plot</a></div>
      <div className="actions" style={{ position: 'absolute', right: '24px' }}>
        <a
          href={props.githubUrl}
          style={{ textDecoration: 'none' }}
          target="_blank"
        >
          <GithubFilled className="github-icon action-link" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
