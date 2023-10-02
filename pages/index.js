import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Pet Page!" />
        <p className="description">
      I love dogs. 
        </p>
         <img src="/dawg.png" alt="Netlify Logo" className={styles.logo} />
      </main>

      <Footer />
    </div>
  )
}
