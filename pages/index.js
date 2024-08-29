// pages/index.js
import Spinner from '../components/Spinner';
import styles from '../components/Spinner.module.css';

export default function Home() {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner />
    </div>
  );
}
