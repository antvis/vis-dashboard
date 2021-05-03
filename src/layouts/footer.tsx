import React from 'react';

type Props = {
  /** 作者 */
  author: string;
  /** 联系方式 */
  contact: string;
  className?: string;
};

const Footer: React.FC<Props> = ({ contact, author, className }) => {
  return (
    <footer className={className}>
      <div className="">Made with ❤️</div>
      <div className="author">
        by
        <a href={contact} style={{ marginLeft: '4px' }} target="_blank">
          {author}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
