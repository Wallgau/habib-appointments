import type { NextPage } from 'next'
import Home from './home';
import styles from '../styles/Home.module.css'

const App: NextPage = () => {
  return (
    <div className={styles.container}>
     <Home />
    </div>
  )
}

export default App;
