import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = ({ global }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{global.data.attributes.siteName}</title>
        <meta name="description" content="Release o'clock website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {global.data.attributes.siteName}
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

export default Home