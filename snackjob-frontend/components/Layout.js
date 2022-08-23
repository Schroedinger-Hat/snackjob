import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Snackjob - The job title generator</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Snackjob is a job title generator for any kind of business, positions and domains. Don't be afraid to be the one that is leading the trend" />
        <meta property="og:title" content="Snackjob - The job title generator" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jobs.schrodinger-hat.it/" />
        <meta property="og:site_name" content="jobs.schrodinger-hat.it" />
        <meta property="og:description" content="Snackjob is a job title generator for any kind of business, positions and domains." />
        <meta name="twitter:widgets:csp" content="on" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://twitter.com/schrodinger_hat" />
        <meta name="twitter:domain" content="jobs.schrodinger-hat" />
        <meta name="twitter:title" content="Snackjob - The job title generator" />
        <meta name="twitter:description" content="Snackjob is a job title generator for any kind of business, positions and domains." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175469686-3"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-175469686-3');`}
        </script>

      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}