import Link from "next/link";
import { Post } from "../interfaces";

function BlogPost({ id, title, category, image }: Post) {
  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="post-header">
            <div
              className="post-cover"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Link href={`/post/[id]`} as={`/post/${id}`}>
              <a>
                <img src={image} alt="Post Image" />
              </a>
            </Link>
          </div>

          <div className="post-description">
            <p className="post-category">{category}</p>
            <h5 className="post-title">
              <Link href={`/post/[id]`} as={`/post/${id}`}>
                <a>{title}</a>
              </Link>
            </h5>
          </div>
        </div>
      </div>
      <style jsx>{`
        .post-container {
          padding: 15px;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
        }

        @media (min-width: 992px) {
          .post-container {
            width: 50%;
          }
        }

        .post {
          display: flex;
          flex-direction: column;

          min-width: 0;
          margin-bottom: 2rem;

          word-wrap: break-word;

          background-color: #fff;
          background-clip: border-box;
          border: 0 solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;

          transition: 0.5s;
        }

        .post:hover {
          box-shadow: 0 0 36px rgba(0, 0, 0, 0.06);
        }
      
        .post-header {
          height: 25vh;
          position: relative;
          overflow: hidden;

          text-align: center;
        }

        .post-cover {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;

          margin: -10px;
          background-repeat: no-repeat 
          background-position: center center; 
          background-size: cover;

          filter: blur(8px);
        }

        .post-header a {
          width: 100%;
        }

        .post-header img {
          width: auto;
          height: 100%;
          position: relative;
        }

        .post-description {
          text-align: center;
          padding: 2rem;
        }

        .post-category {
          letter-spacing: 2px;
          color: #677279;
          font-size: 0.8em;
          text-transform: uppercase;
        }

        .post-title {
          letter-spacing: .5px;
          margin: 2rem 0 0;
          font-size: 1.15rem;
        }
        .post-title a {
          color: #191919;
        }
      `}</style>
    </>
  );
}

export default BlogPost;
