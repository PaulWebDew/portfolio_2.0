import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ISkillCircleProps } from '@/components/skillCirce/types';
import cls from './style.module.scss';

type Props = {};
export const SkillCircle: FC<ISkillCircleProps> = ({ size, color, image }) => {
  return (
    <div
      className={clsx(cls.progress, size < 50 && cls.less)}
      style={{ '--i': size, '--clr': color } as React.CSSProperties}
    >
      <Image src={image} alt={'HTML icon'} className={cls.image} />
      <p>
        {size} <span>%</span>
      </p>
    </div>
  );
};
