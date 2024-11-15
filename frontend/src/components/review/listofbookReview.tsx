import { useGetBooksQuery } from "../../api/book/query";
import { UpdateReviewBook } from "./updateReview";


export function ListReviewsUpdate() {
  const { data, isLoading, isError, error } = useGetBooksQuery();

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
          className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div>
              <UpdateReviewBook book={book} />
          </div>
          <div className="mt-4">
            <p className="font-bold text-lg mb-2">{book.title}</p>
            <p className="text-sm italic mb-1">Author: {book.author}</p>
            <p className="text-sm italic mb-3">Genre: {book.genre}</p>
            <p className="text-gray-700">{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
