import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_wrap">
          <h1>Каталог фильмов</h1>
          <div className="header_app">
            <form action="submit">
              <input type="text" placeholder="Поиск" />
              <button class="header_btn_filter">
                <i class="fa fa-bars"></i> Фильтр
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
