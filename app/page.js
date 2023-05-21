'use client';
import styles from './page.module.css'
import ResponsiveAppBar from './navbar.js'

export default function Home() {
  return (
    <main className={styles.main}>
      <ResponsiveAppBar></ResponsiveAppBar>
    </main>
  )
}
