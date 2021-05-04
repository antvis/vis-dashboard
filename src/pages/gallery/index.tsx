import React from 'react';
import Layout from '@/layouts/layout';
import TryItPage from '@/components/base/try-it-page';
import styles from './index.module.less';

const Gallery = () => {
  return (
    <Layout siteTitle="Gallery" footerClassName={styles.footer}>
      <TryItPage />
    </Layout>
  );
};

export default Gallery;
