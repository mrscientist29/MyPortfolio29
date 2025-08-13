import React from 'react';
import styles from './Alert.module.css';

interface AlertProps {
  type: 'success' | 'error';
  children: React.ReactNode;
}

export const Alert = ({ type, children }: AlertProps) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <p>{children}</p>
    </div>
  );
};