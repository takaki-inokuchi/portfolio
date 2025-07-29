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
              <link to ="/">ホーム</link>
            </li>
            <li>
              <link to = "/login">ログイン</link>
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