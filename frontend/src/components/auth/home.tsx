import { useGetBooksHome } from "../../api/book/query";
import { HomeReviewBook } from "../review/homeReview";

export function Homebooks() {
  const { data, isLoading, isError, error } = useGetBooksHome();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-4">
    {data?.data.map((book) => (
      <div
        key={book._id}
        className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-96"
      >
        <div>
          <p className="font-bold text-lg mb-2">{book.title}</p>
          <p className="text-sm italic mb-1">Author: {book.author}</p>
          <p className="text-sm italic mb-3">Genre: {book.genre}</p>
          <p className="text-gray-700">{book.description}</p>
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 ">
        
          <button>
          
            <HomeReviewBook bookId={book._id}/>
          </button>
        </div>
      </div>
    ))}
  </div>
  
  );
}
