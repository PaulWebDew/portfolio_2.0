'use client';

import React, { FC, useState } from 'react';
import { IButtonProps } from '@/components/button/types';

import cls from './style.module.scss';
import clsx from 'clsx';

export const Button: FC<IButtonProps> = ({ children, width, padding }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <button
      style={{ width: width, padding: padding }}
      className={cls.button}
      onMouseOut={() => setStartAnimation(true)}
      onMouseOver={() => setStartAnimation(false)}
    >
      <div style={{ width: width ? `calc(${width} + 32px)` : '' }}>
        <div className={clsx(cls.item, startAnimation && cls.start)}>
          {children}
        </div>
        <div className={cls.item}>{children}</div>
      </div>
    </button>
  );
};

Button.displayName = 'Button';
