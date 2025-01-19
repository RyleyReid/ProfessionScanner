import React, { FC, ReactNode } from 'react';
import styles from './pageWrapper.module.scss';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      {children}
    </div>
  );
};
