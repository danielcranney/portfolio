import BlogItem from "./BlogItem";

export default function BlogList({ publications }) {
  let posts = publications.data.user.publication.posts;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      {posts.map((post, index) => {
        return (
          <div key={index} className="flex">
            <BlogItem post={post} />
          </div>
        );
      })}
    </div>
  );
}
