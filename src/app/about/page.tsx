import React from 'react';

import cls from './style.module.scss';
import Image from 'next/image';
import photo from '@/assets/images/myPhoto.png';
import { Button, Skills } from '@/components';
import {
  DownloadIcon,
  EmailIcon,
  GitHubIcon,
  TelegramIcon,
  WhatsappIcon,
} from '@/assets/icons';

import ReactCertificate from '@/assets/images/ReactCertificate.jpg';
import JSCertificate from '@/assets/images/certificateJS.png';
import HTMLCertificate from '@/assets/images/certificateHTML.png';

export default function About() {
  return (
    <section className={cls.section}>
      <div className={cls.about}>
        <h2>ABOUT ME</h2>
        <div className={cls.textWrapper}>
          <p>
            <span>Hello, I´m Pavel,</span> web-developer based on Minsk <br /> I
            have rich experience in web developing & building and customization
            E-commerce platforms,UI Kit and mobile Apps. Also I am good at{' '}
            <span>
              React, React-Native, Next, NodeJS, Express, MongoDB, Docker, Nginx
            </span>
          </p>
        </div>
        <div className={cls.buttons}>
          <Button>
            <DownloadIcon width={20} height={25} />
            Download CV
          </Button>
          <Button width={'0.5rem'} padding={'1.1rem'}>
            <EmailIcon width={20} height={27} />
          </Button>
          <Button width={'0.5rem'} padding={'1.1rem'}>
            <GitHubIcon width={20} height={27} />
          </Button>
          <Button width={'0.5rem'} padding={'1.1rem'}>
            <WhatsappIcon width={20} height={27} />
          </Button>
          <Button width={'0.5rem'} padding={'1.1rem'}>
            <TelegramIcon width={20} height={27} />
          </Button>
        </div>
        <div className={cls.historyWrapper}>
          <h3>History of formation</h3>
          <div className={cls.historyContainer}>
            <div className={cls.historyItem}>
              <span>01/07/2023</span>
              <p>
                <span>Frontend Developer</span>
                <span>ReLabs</span>
                Web developing E-commerce services, websites and UI-Kit
              </p>
            </div>
            <div className={cls.historyItem}>
              <span>10/01/2022</span>
              <p>
                <span>FullStack Developer</span>
                <span>FreeLance</span>
                Web developing E-commerce services, websites. Improving scripts
                and updating existing platforms. Creating servers and api,
                hosting, deploying projects
              </p>
            </div>
            <div className={cls.historyItem}>
              <span>26/09/2022</span>
              <p>
                <span>
                  &ldquo;Finished &ldquo;React JS&ldquo; course at &ldquo;IT GIT
                </span>
              </p>
            </div>
            <Image
              src={ReactCertificate}
              alt={'Certificate'}
              placeholder={'blur'}
              loading={'lazy'}
            />
            <div className={cls.historyItem}>
              <span>13/02/2022</span>
              <p>
                <span>
                  &ldquo;Finished &ldquo;Java Script 2.0&ldquo; course at
                  &ldquo;IT GIT{' '}
                </span>
              </p>
            </div>
            <Image
              src={JSCertificate}
              alt={'Certificate'}
              placeholder={'blur'}
              loading={'lazy'}
            />
            <div className={cls.historyItem}>
              <span>04/01/2022</span>
              <p>
                <span>
                  Finished &quot;HTML FOR JS Developers&quot; course at &quot;IT
                  GIT&quot;{' '}
                </span>
              </p>
            </div>
            <Image
              src={HTMLCertificate}
              alt={'Certificate'}
              placeholder={'blur'}
              loading={'lazy'}
            />

            <div className={cls.historyItem}>
              <span>22/07/2007 - 19/01/2009</span>
              <p>
                <span>Military serving</span>
              </p>
            </div>
            <div className={cls.historyItem}>
              <span>01/09/2003 - 25/05/2007</span>
              <p>
                <span>student of agrarian ang technical college</span>
              </p>
            </div>
          </div>
          <div className={cls.introduce}>
            <p>
              Skilled and dedicated web-developer with 2+ years of experience
              focused on frontend development in applications and web portals,
              JS focused on React.Knowledge in the complete cycle of a frontend
              web development as well as its optimization for integration with
              third parties, SEO, lazy load, SSR. Great team player, passion for
              sharing my knowledge, responsibility, and commitment as primary
              values, always looking for learning, proactive.
            </p>
          </div>
          <div className={cls.skills}>
            <Skills />
          </div>
        </div>
      </div>
      <div className={cls.mainPhoto}>
        <Image
          src={photo}
          alt='Photo'
          sizes='100%'
          style={{
            height: 'auto',
            width: '100%',
            objectFit: 'contain',
            filter: 'brightness(100%)',
            maxHeight: '90vh',
          }}
          placeholder='blur'
          className={cls.photo}
        />
      </div>
    </section>
  );
}
