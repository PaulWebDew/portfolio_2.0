import type { HTMLProps } from 'react';
import type { StaticImageData } from 'next/image';

export interface ISkillCircleProps extends HTMLProps<HTMLDivElement> {
  color: string;
  size: number;
  image: StaticImageData;
}
