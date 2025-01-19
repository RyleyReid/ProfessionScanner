import { ReactNode } from 'react';
import styles from './pageWrapper.module.scss';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.pageWrapper}>
      {children}
    </div>
  );
};
