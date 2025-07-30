import React from 'react'
import '../style/style.css';
import { Link } from 'react-router-dom';

export const header = () => {
  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/login">ログイン</Link>
          </li>
          <li>
            <Link to="#">記事</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header