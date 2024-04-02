import type { ISkillCircleProps } from '@/components/skillCirce/types';
import {
  HtmlImage,
  CssImage,
  SassImage,
  DockerImage,
  JsImage,
  MongoImage,
  NodeJSImage,
  NginxImage,
  ReactImage,
  TypeScriptImage,
} from '@/assets/images';

export const SKILLS_DATA: ISkillCircleProps[] = [
  {
    size: 85,
    image: HtmlImage,
    color: '#e44d25',
  },
  {
    size: 80,
    image: CssImage,
    color: '#2a65f0',
  },
  {
    size: 70,
    image: SassImage,
    color: '#cd689a',
  },
  {
    size: 75,
    image: JsImage,
    color: '#e7a42b',
  },
  {
    size: 80,
    image: ReactImage,
    color: '#01ccfe',
  },
  {
    size: 60,
    image: NodeJSImage,
    color: '#2a5f26',
  },
  {
    size: 70,
    image: MongoImage,
    color: '#51aa41',
  },
  {
    size: 30,
    image: DockerImage,
    color: '#006db8',
  },
  {
    size: 20,
    image: NginxImage,
    color: '#009900',
  },
];
