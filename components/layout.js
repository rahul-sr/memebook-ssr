import Head from 'next/head'
import { useRouter } from "next/router";

export default function Layout({ children, home }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Memebook.site - Where the fun never ends"
        />
        <meta name="keywords" content="Memes, Memebook, Funny, Viral"></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>Memebook</title>
        <script data-ad-client="ca-pub-6223473093447406" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" aria-label="Navigation bar" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <a href='/'>
              <img className="logo" alt="memebook logo" src="/logo.png" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className={router.pathname == "/india" ? "active" : ""}><a href="/india">India</a></li>
              <li className={router.pathname == "/coronavirus" ? "active" : ""}><a href="/coronavirus">Coronavirus</a></li>
              <li className={router.pathname == "/animals" ? "active" : ""}><a href="/animals">Animals</a></li>
              <li className={router.pathname == "/anime" ? "active" : ""}><a href="/anime">Anime</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
