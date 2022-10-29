import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fashion Store</title>
        <meta name="description" content="Tienda de Ropa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="#">Fashion Store</a>
        </h1>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Camisas &rarr;</h2>
            <p>Encuentra tu producto favorito</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Chaquetas &rarr;</h2>
            <p>Lo mejor de invierno</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Pantalones &rarr;</h2>
            <p>Descubra zapatos para su proxima aventura</p>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Shorts &rarr;</h2>
            <p>
              Ropa perfecta para la playa
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho con ❤ por c0der97
        </a>
      </footer>
    </div>
  )
}
