export default function BlogItem({ post }) {
  const redirectToHashnode = () => {
    window.open("https://blog.danielcranney.com/" + post.slug, "_blank");
  };

  const getDateAdded = () => {
    let d = new Date(post.dateAdded);
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${mo} ${da}, ${ye}`;
  };

  const formattedDate = getDateAdded();

  return (
    <div
      className="flex flex-col rounded-sm bg-mid p-4 gap-y-3 group border-2 border-mid hover:border-brand cursor-pointer transition-all duration-150 ease-in-out relative"
      onClick={redirectToHashnode}
    >
      <img src={post.coverImage} className="img-fluid" />
      <div className="flex flex-col px-2 gap-y-1.5">
        <h3 className="mb-0 text-lg">{post.title}</h3>
        <h6 className="mb-0 text-sm font-semibold font-body">
          {formattedDate}
        </h6>
        <p className="mb-0">{post.brief.substr(0, 150)}...</p>
      </div>
      <div className="w-full h-full absolute bg-dark/80 opacity-0 group-hover:opacity-100 top-0 left-0 z-50 transition-all duration-150 ease-in-out">
        <div className="flex w-full h-full items-center justify-center">
          <div className="btn-sm btn-brand rounded-sm flex items-center gap-x-1.5">
            <p className="mb-0 text-white">Open</p>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
