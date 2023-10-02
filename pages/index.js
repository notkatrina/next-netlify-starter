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
        <h3 >Welcome to my Pet Page!" <h3/>
        <p className="description">
      I love dogs. 
        </p>
         <img src="/dawg.png" alt="Netlify Logo"  />
      </main>

      <Footer />
    </div>
  )
}
