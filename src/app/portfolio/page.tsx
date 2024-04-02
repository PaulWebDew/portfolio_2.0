import React from 'react';

import cls from './style.module.scss';

function Page() {
  return (
    <div className={cls.container}>
      <section className={cls.galary}>
        <div className={cls.frame}>123</div>
        <div className={cls.frame}>123</div>
        <div className={cls.frame}>123</div>
      </section>
    </div>
  );
}

export default Page;
