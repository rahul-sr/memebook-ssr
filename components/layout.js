import Head from 'next/head';
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
        <meta name="theme-color" content="#317EFB"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="https://meme-api.herokuapp.com"/>
        <title>Memebook</title>
        <link rel='manifest' href='/manifest.json'></link>
        <script type="module" src="/pwabuilder-sw-register.js"></script>
        <script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script async src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
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
