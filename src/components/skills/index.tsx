import React, { type FC } from 'react';
import cls from './style.module.scss';

import clsx from 'clsx';
import { SkillCircle } from '@/components';
import { SKILLS_DATA } from '@/data/SkillsData';

type Props = {};
export const Skills: FC = (props: Props) => {
  return (
    <div className={cls.container}>
      {SKILLS_DATA.map((item, index) => (
        <SkillCircle
          key={index}
          color={item.color}
          size={item.size}
          image={item.image}
        />
      ))}
    </div>
  );
};
