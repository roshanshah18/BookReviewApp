import { useState } from "react";
import { errorToast, successToast } from "../toaster";
import { GoCodeReview } from "react-icons/go";
import { UseaddReviewBookMutation } from "../../api/review/query";

export function UpdateReviewBook({ book }: { book: { _id: string, rating:number,reviewText:string} }) {
  const addReviewMutation = UseaddReviewBookMutation();
  const [isReviewing, setIsReviewing] = useState(false);
  const [formData, setFormData] = useState({
    rating: 0, 
    reviewText: "",
  });

 

  const addReview = async () => {
    if (formData.rating < 1 || formData.rating > 5) {
      errorToast("Please provide a rating between 1 and 5");
      return;
    }

    try {
      await addReviewMutation.mutateAsync(
        {
          bookId: book._id,
          ...formData,
        },
        {
          onSuccess(data) {
            successToast(data.message);
            setIsReviewing(false);
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
    <div className="flex gap-10">
    {/* <button onClick={() => setIsReviewing(true)} className="flex items-center gap-1 right-0">
        <span>VeiwReviews</span>
        <GoCodeReview />
      </button> */}

      <button onClick={() => setIsReviewing(true)} className="flex items-center gap-1 right-0">
        <span>EditReviews</span>
        <GoCodeReview />
      </button>
    </div>
    

      {isReviewing && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50"
          aria-labelledby="review-book-modal"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 id="review-book-modal" className="text-xl mb-4">
              Edit Review
            </h2>
            <label className="block mb-2">Rating (1 to 5)</label>
            <input
              type="number"
              value={formData.rating}
              min="1"
              max="5"
              onChange={(e) => setFormData({ ...formData, rating: +e.target.value })}
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Review</label>
            <textarea
              value={formData.reviewText}
              onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
              className="border rounded-lg w-full p-2 mb-4"
              placeholder="Write your review here"
            />
            <button
              onClick={addReview}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
             Update
            </button>
            <button
              onClick={() => setIsReviewing(false)}
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
