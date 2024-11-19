import { useState } from "react";
import { useUpdateBookMutation } from "../../api/book/query"; // Mutation hook for updating the book
import { errorToast, successToast } from "../toaster";
import { FiEdit } from "react-icons/fi";

export function UpdateBook({ book }: { book: { _id: string, title: string, author: string, genre: string, description: string } }) {
  const updateBookMutation = useUpdateBookMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
   
    title: book.title,
    author: book.author,
    genre: book.genre,
    description: book.description,
  });

  const updateBook = async () => {
    try {
      await updateBookMutation.mutateAsync(
        {
          bookId: book._id,
          ...formData,
        },
        {
          onSuccess(data) {
            successToast(data.message);
            setIsEditing(false); 
          },
          onError(error) {
            console.error("error", error);
            errorToast(error.message);
          },
        }
      );
    } catch (error) {
      console.error("error", error);
      errorToast("Something went wrong");
    }
  };

  return (
    <>
      <button onClick={() => setIsEditing(true)}>
        <FiEdit />
      </button>

      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h2 className="text-xl mb-4">Edit Book</h2>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Author</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Genre</label>
            <input
              type="text"
              value={formData.genre}
              onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border rounded-lg w-full p-2 mb-4"
            />
            <button
              onClick={updateBook}
              className="bg-black text-white px-4 py-2 rounded-lg mr-2"
            >
              Update
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
