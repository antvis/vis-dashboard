import React from 'react';
import Layout from '@/layouts/layout';
import TryItPage from '@/components/base/try-it-page';
import styles from './example.module.less';

type Props = {
  pageContext: {
    source: string;
  }
}

export default function Example({
  pageContext,
  ...props
}: Props) {
  const { source } = pageContext;

  return (
    <Layout siteTitle="Gallery" footerClassName={styles.footer} themeModeSwitcher={false}>
      <TryItPage source={source}/>
    </Layout>
  );
}
