import Header from './header'
import Login from './login'
import Footer from './footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Header />
        <Login />
        <Footer />
    </div>

  )
}