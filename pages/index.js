import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Release o&apos;clock</title>
        <meta name="description" content="Release o'clock website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Comming soon.
        </h1>

        <div className={styles.grid}>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Release o&apos;clock</p>
      </footer>
    </div>
  )
}
