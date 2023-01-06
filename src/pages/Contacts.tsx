import React from 'react';

export const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Contacts</h1>

        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Location</h2>
            <p>Moscow, Russia</p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Telegram / WhatsApp</h2>
            <p>
              <a href='tel:+79998286620'>+7 (999) 828-66-20</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Email</h2>
            <p>
              <a href='mailto:pv9998286620@yandex.ru'>pv9998286620@yandex.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
