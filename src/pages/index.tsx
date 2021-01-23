import React from 'react';
import RedirectIndex from '../components/RedirectIndex';
import './index.less';

const Page: React.FC & { noLayout: boolean } = () => <RedirectIndex />;

Page.noLayout = false;

export default Page;
