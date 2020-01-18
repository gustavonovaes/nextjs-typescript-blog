import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  search: string;
}

function Search({ search: initialSearch }: SearchProps) {
  const [search, setSearch] = useState<string>(initialSearch);

  return (
    <>
      <form className="form-search" action="" method="GET">
        <label>
          <h6 className="sidebar-title">Search</h6>

          <div className="input-search">

            <input
              id="search"
              type="text"
              name="S"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search"
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>
        </label>
      </form>
      <style jsx>{`
        .form-search {
          position: relative;
        }

        .input-search input {
          height: 50px;
          padding: 0.5rem;
          font-size: 0.95rem;
          line-height: 1.9;
          color: #656565;
          text-align: left;
          font-weight: 300;

          border: 1px solid #eaeff4;

          position: relative;
          flex: 1 1 auto;
          width: 100%;
          margin-bottom: 0;
        }

        .input-search {
          position: relative;
        }

        .input-search .search-icon {
          position: absolute;
          right: 1rem;
          top: 0;
          bottom: 0;

          display: flex;
          align-items: center;

          z-index: 1;
        }

        .input-search input::placeholder {
          color: #999;
        }
      `}</style>
    </>
  );
}

interface SidebarProps {
  search: string;
  categories: string[];
  tags: string[];
  topPosts: {
    title: string;
    image: string;
  }[];
}

function Sidebar({ search, categories, tags, topPosts }: SidebarProps) {
  return (
    <>
      <div className="sidebar">
        <Search search={search} />

        <hr />

        <h6 className="sidebar-title">Categories</h6>
        <div className="sidebar-categories">
          {categories.map(category => (
            <a key={category} href="">{category}</a>
          ))}
        </div>

        <hr />

        <h6 className="sidebar-title">Top posts</h6>

        <div className="sidebar-top-posts">
          {topPosts.map(post => (
            <a
              key={post.title}
              href="#"
            >
              <img
                src={post.image}
                alt="Post logo"
              />
              <p>{post.title}</p>
            </a>
          ))}
        </div>

        <hr />

        <h6 className="sidebar-title">Tags</h6>
        <div className="sidebar-tags">
          {tags.map(tag => (
            <a key={tag} href="#">
              {tag}
            </a>
          ))}
        </div>

        <hr />

        <h6 className="sidebar-title">About</h6>
        <p className="sidebar-about">
          Think about how webapps are created with PHP. You create some files,
          write PHP code, then simply deploy it. We don't have to worry about
          routing much, and the app is rendered on the server by default.
        </p>
      </div>
      <style jsx>{`
        .sidebar {
          display: flex;
          flex-direction: column;

          padding-bottom: 2rem;
        }

        @media (min-width: 992px) {
          .sidebar {
            padding: 0;
          }
        }

        .sidebar-categories {
          display: flex;
          flex-wrap: wrap;
        }
        
        .sidebar-categories a {
          font-size: 0.85rem;

          width: 50%;
        }

        .sidebar-top-posts {
        }

        .sidebar-top-posts img {
          width: 65px;
          margin-right: 1rem;
          border-radius: 0.25rem;
        }

        .sidebar-top-posts a {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
        }

        .sidebar-tags {
          display: flex;
          flex-wrap: wrap;
        }

        .sidebar-tags a {
          display: inline-block;
          padding: 0.5em;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: 0.125rem;

          margin-left: 0.25rem;
          margin-top: 0.25rem;

          color: #656565;
          background-color: #e9ecf0;
        }

        .sidebar-about {
          font-size: 0.75rem;
        }

        .sidebar hr {
          border-top-color: rgba(117, 117, 117, 0.09);
          margin-top: 30px;
          margin-bottom: 30px;
          border-top-style: solid;

          box-sizing: content-box;
          height: 0;
          border: none;
        }

        .sidebar a {
          color: #656565;
        }
      `}</style>

      <style jsx global>{`
        .sidebar-title {
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.85em;
          margin-bottom: 1rem;
          
          color: #656565;
        }
      `}</style>
    </>
  );
}

export default Sidebar;
