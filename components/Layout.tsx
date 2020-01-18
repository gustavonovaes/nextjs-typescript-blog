import { ReactNode } from "react";
import Head from "next/head";

import {
  FaFacebook,
  FaTwitter,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram
} from "react-icons/fa";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}
export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {children}

      <footer className="footer">
        <div className="container">
          <a href="/">
            <img src="/img/logo.png" alt="logo" />
          </a>

          <nav>
            <a href="#">
              Link A
            </a>
            <a href="#">
              Link B
            </a>
            <a href="#">
              Link C
            </a>
          </nav>

          <div className="social">
            <a href="#" aria-label="Facebook">
              <FaFacebookSquare />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitterSquare />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`

        footer {
          padding: 1.25rem 0;
          border-top: 1px solid #f1f2f3;
          font-size: .85rem;
        }
        footer .container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        footer nav {
          display: flex;
          justify-content: center;
          flex-direction: row;
          flex-grow: 1;
        }

        footer nav a {
          display: block;
          padding: 0.5rem 1rem;
          color: #707070;
          font-weight: 400;
        }

        footer .social a {
          display: inline-block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          margin-right: 4px;
          margin-bottom: 4px;
          text-align: center;
          color: inherit;
          font-size: 1rem;
          border-radius: 3px;
          opacity: 0.8;
          -webkit-transition: 0.4s ease-out;
          transition: 0.4s ease-out;
        }

        footer .social a:hover {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
