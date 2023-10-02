import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        
      </Head>

         <main>
        <Header title="Welcome to my Pet Page!" />
        <p className="description">
          I like Doggos 2
        </p>

         <img src="/dawg.png" alt="floof" />
      </main>

      <Footer />
    </div>
  )
}
