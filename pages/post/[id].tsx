import { NextPageContext } from "next";
import { useRouter } from "next/router";

import Disqus from "disqus-react";

import { getShow } from "../../services/TVMaze";
import Layout from "../../components/Layout";
import { Post as PostInterface } from "../../interfaces";
import parseShowToPost from "../../utils/parseShowToPost";
import PostHeader from "../../components/PostHeader";

function Post(post: PostInterface) {
  const router = useRouter();

  const disqusShortname = "saas-blog-d3gnehew2j";
  const disqusConfig = {
    url: `http://localhost:3000/${router.asPath}`,
    identifier: post.id.toString(),
    title: post.title
  };

  return (
    <Layout title={post.title}>
      <PostHeader post={post} />

      <main className="main-content">
        <section id="section-content">
          <div className="container">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            <div className="tags">
              {post.tags.map(tag => (
                <a
                  key={tag}
                  href="#"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray comments">
          <div className="container">
            <hr />

            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </section>
      </main>

      <style jsx>{`
        .main-content section {
          position: relative;

          border-bottom: none;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;

          margin: 0 auto;

          padding-top: 4rem ;
        }

        .post-content {
          font-size: 16px;
          line-height: 1.5em;
        }

        .bg-gray {
          background-color: #fafbfb;
        }

        .main-content .container {
          display: flex;
          flex-direction: column;
        }

        .tags {
          padding-top: 3rem;
          margin: -4px;
        }

        .tags a {
          display: inline-block;
          margin: 4px;

          font-size: .85rem;
          padding: 0.5em;
          border-radius: 0.125rem;

          margin-left: 0.25rem;
          margin-top: 0.25rem;

          color: #707070;
          background-color: #e9ecf0;
        }

        @media (min-width: 992px) {
          .main-content section {
            padding: 7rem 0;
          }
   
          .main-content .container {
            padding: 0 7rem;
          }

          .post-content {
            font-size: 18px;
          }

          .comments .container {
            padding: 0 10rem;
          }
        }
      `}</style>
    </Layout>
  );
}

Post.getInitialProps = async (context: NextPageContext) => {
  const id = Number(context.query.id);
  const show = await getShow(id);
  return parseShowToPost(show);
};

export default Post;
