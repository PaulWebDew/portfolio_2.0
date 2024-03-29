import React, { FC } from 'react';
import { IButtonProps } from '@/components/button/types';

import cls from './style.module.scss';

export const Button: FC<IButtonProps> = ({ children }) => {
  return (
    <button className={cls.button}>
      <div>
        {children}
        {children}
      </div>
    </button>
  );
};

Button.displayName = 'Button';
