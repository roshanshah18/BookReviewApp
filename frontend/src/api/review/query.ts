import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addReview,
  getBookReviewById,
  TGetBookReviewByIdInput,
  TGetBookReviewByIdOutput,
  TReviewUserInput,
  TReviewUserOutput,
  TUpdateReviewBookInput,
  TUpdateReviewBookOutput,
  updateReviewBook,
} from "./fetch";

export function UseaddReviewBookMutation() {
  const queryClient = useQueryClient();
  return useMutation<TReviewUserOutput, Error, TReviewUserInput>({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review"] });
    },
  });
}

export function UseGetReviewBookByIdQuery(id: string) {
  return useQuery<TGetBookReviewByIdOutput, Error, TGetBookReviewByIdInput>({
    queryKey: ["books", id],
    queryFn: () => getBookReviewById({ bookId: id }),
  });
}

export function useUpdateReviewBookMutation() {
  const queryClient = useQueryClient();
  return useMutation<TUpdateReviewBookOutput, Error, TUpdateReviewBookInput>({
    mutationFn: updateReviewBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}
