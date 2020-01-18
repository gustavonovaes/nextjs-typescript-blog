import { Post } from "../interfaces";
import Link from "next/link";

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({
  post: { title, image, category }
}: PostHeaderProps) {
  return (
    <>
      <nav>
        <div className="container">
          <Link href="/">
            <a href="/">
              <img src="/img/logo-light.png" alt="logo" />
            </a>
          </Link>
        </div>
      </nav>

      <header>
        <div
          className="cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="container">
          <div className="title-container">
            <p className="category">{category}</p>
            <h1 className="title">{title}</h1>
          </div>

          <div>
            <a className="scroll-down" href="#section-content"></a>
          </div>
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
          padding: 20px 0;

          min-height: 56px;
        }

        @media (min-width: 992px) {
          nav {
            padding: 0;
          }
        }

        header {
          position: relative;
          height: 100vh;
          padding: 4rem;
          text-align: center;
        }

        header .container {
          display: flex;
          flex-grow: 1;
          justify-content: space-between;
          height: 100%;
        }

        .cover {
          z-index: -2;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .cover:after {
          content: "";
          z-index: -1;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          background: rgba(0, 0, 0, 0.75);
        }

        header .container {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        .title-container {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
          padding-bottom: 5rem;
        }

        .category {
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, .85);
          font-weight: 400;
        }

        .title {
          color: #fff;
          font-size: 3em;
          font-weight: 200;

          margin-top: 4rem;
        }

        .scroll-down {
          display: inline-block;

          width: 24px;
          height: 24px;

          margin: 0 5px;

          border-left: 1px solid #000;
          border-bottom: 1px solid #000;
          border-color: rgba(255, 255, 255, 0.85);

          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      `}</style>

      <style jsx global>{`
        .scroll-down {
          -webkit-animation: scrollDown 2s infinite;
          animation: scrollDown 2s infinite;
        }
      `}</style>
    </>
  );
}
