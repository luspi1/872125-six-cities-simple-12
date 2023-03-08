import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { Helmet } from 'react-helmet-async';
const NotFound: FC = () => (
  <main className={styles.notFound}>
    <Helmet>
      <title>Страница не найдена</title>
    </Helmet>
    <h1>
      <span>404</span> <br/> Страница не найдена &#128533;
    </h1>
    <img src="img/cat.jpg" alt="not found"/>
    <Link to="/">
      На главную
    </Link>
  </main>
);

export default NotFound;
