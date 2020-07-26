import Link from "./Link";
import Head from "next/head";

export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="NextJS, Front-End developer, Learing project" />
        <meta name='description' content='this is my learing NextJs project' />
        <meta charSet='utf-8' />
      </Head>
      <nav>
        <ul>
          <li>
            <Link activeClassName={'active'} href={'/'} ><a>Home</a></Link>
          </li>
          <li>
            <Link activeClassName={'active'} href={'/users'} ><a>Users</a></Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 0 40px;
          width: 100%;
          background: darkblue;
          height: 60px;
        }
        ul {
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
          height: 100%;
        }
        li {
          height: 100%;
          border-right: 1px solid #fff;
        }
        a {
          display: block;
          height: 100%;
          padding: 0 20px;
          line-height: 60px;
          text-decoration: none;
          color: #fff;
          transition: 0.2s;
        }
        a:hover, a:focus, a.active {
          background: blue;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        }
        
        * {
          box-sizing: border-box;
        }
        main {
          padding-top: 60px;
        }
      `}</style>
    </>
  )
}