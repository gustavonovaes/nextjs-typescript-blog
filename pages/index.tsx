import { NextPageContext } from "next";
import Link from "next/link";

import { getShows } from "../services/TVMaze";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BlogPost from "../components/BlogPost";

import { Post } from "../interfaces";

import parseShowToPost from "../utils/parseShowToPost";
import { unique } from "../utils/unique";

interface IndexProps {
  search: string;
  posts: Post[];
}

function Index({ search, posts }: IndexProps) {
  const categories = unique(posts.map(p => p.category));
  const tags = unique(posts.map(p => p.tags).flat());
  const topPosts = posts.sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <Layout title="Home">
      <Header
        title="NextJS - Blog from TvMaze API"
        subtitle="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
      />

      <main className="main-content">
        <section>
          <div className="container">
            <div className="post-content">

              {!posts.length && (
                <div>
                  <p>No results for search: <strong>{search}</strong> =/</p>

                  <br />
                  <p>Try something else, like <Link href="?S=Breaking+Bad"><a>Breaking Bad</a></Link></p>
                </div>
              )}
              {posts.map(post => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>
            <div className="sidebar-content">
              <Sidebar
                search={search}
                categories={categories}
                tags={tags}
                topPosts={topPosts}
              />
            </div>
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
          padding: 2rem 0;

          background-color: #fafbfb;
        }
        
        @media (min-width: 992px) {
          .main-content section {
            padding: 7rem 0;
          }
        }

        .main-content .container {
          display: flex;
          flex-direction: column-reverse;
        }

        .post-content {
          display: flex;
          flex-wrap: wrap;

          margin: -15px;
          padding: 0 15px;
        }

        .sidebar-content {
          display: flex;
          flex-wrap: wrap;
          padding: 0 15px;
        }

        @media (min-width: 992px) {
          .main-content .container {
            flex-direction: row;
          }

          .post-content {
            flex: 0 0 66%;
          }

          .post-content > * {
            min-width: 50%;
          }

          .sidebar-content {
            flex: 0 0 33%;
          }
        }
      `}</style>
    </Layout>
  );
}

Index.getInitialProps = async (context: NextPageContext) => {
  const search = context.query?.S || "";

  const shows = search.length
    ? await getShows(search.toString())
    : await getShows("Batman");

  const posts = shows.map(parseShowToPost);

  return { search, posts };
};

export default Index;
