import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addReview,
  // getReviewById,
  // TGetReviewByIdInput,
  TReviewUserInput,
  TReviewUserOutput,
  TUpdateReviewBookInput,
  TUpdateReviewBookOutput,
  updateReviewBook,
} from "./fetch";
// import { TGetBookByIdOutput } from "../book/fetch";

export function UseaddReviewBookMutation() {
  const queryClient = useQueryClient();
  return useMutation<TReviewUserOutput, Error, TReviewUserInput>({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review"] });
    },
  });
}

// export function UseGetReviewByIdQuery(id: string) {
//   return useQuery<TGetBookByIdOutput, Error, TGetReviewByIdInput>({
//     queryKey: ["books", id],
//     queryFn: () => getReviewById({ bookId: id }),
//   });
// }

export function useUpdateReviewBookMutation() {
  const queryClient = useQueryClient();
  return useMutation<TUpdateReviewBookOutput, Error, TUpdateReviewBookInput>({
    mutationFn: updateReviewBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}
