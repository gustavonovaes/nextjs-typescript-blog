import Link from "next/link";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <nav>
        <div className="container">
          <Link href="/">
            <a href="/">
              <img src="/img/logo.png" alt="logo" />
            </a>
          </Link>
        </div>
      </nav>

      <header>
        <div className="container">
          <h1 className="title">{title}</h1>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      </header>

      <style jsx>{`
        nav {
          position: absolute;
          top: 2rem;
          left: 0;
          right: 0;
          z-index: 1000;

          transition: transform 0.3s ease-out, background-color 0.3s ease-out,
            -webkit-transform 0.3s ease-out;

          height: 56px;
        }

        @media (min-width: 992px) {
          nav {
            padding: 0;
          }
        }

        header {
          position: relative;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: linear-gradient(
            -225deg,
            #5d9fff 0%,
            #b8dcff 48%,
            #6bbbff 100%
          );

          padding: calc(4rem + 56px) 0 4rem;  

          color: white;
          text-align: center;
        }

        @media (min-width: 992px) {
          header {
            padding: 7rem 0; 
          }
        }

        .title {
          letter-spacing: 1px;
          text-shadow: 0px 0px 4px rgba(0,0,0,0.175);

          font-weight: 300;
        }

        .subtitle {
          font-size: 1.2rem;

          margin-top: 2rem;

          text-shadow: 0px 0px 4px rgba(0,0,0,0.075);
        }
      `}</style>
    </>
  );
}
