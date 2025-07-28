import React from 'react'
import './style/style.css';

const header = () => {
  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">ホーム</a>
            </li>
            <li>
              <a href="#">ログイン</a>
            </li>
            <li>
              <a href="#">記事</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default header