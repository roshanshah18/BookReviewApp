import { useGetBooksQuery } from "../../api/book/query";
import { DeleteBooks } from "./delete-book";
import { UpdateBook } from "./update-book";

export function ListBooks() {
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
          className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-96"
         
        >
          <div className="flex text-xl pl-52 gap-2">
            <button>
              <UpdateBook book={book} />
            </button>

            <DeleteBooks bookId={book._id} />
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
