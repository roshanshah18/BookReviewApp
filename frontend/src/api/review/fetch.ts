import { env } from "../../config";

export type TReview = {
  bookId: string;
  rating: number;
  reviewText: string;
  reviewId: string;
};

export type TReviewUserOutput = {
  message: string;
  isSuccess: boolean;
  data: { rating: number; reviewText: string };
};

export type TReviewUserInput = {
  bookId: string;
  rating: number;
  reviewText: string;
};

export async function addReview(
  input: TReviewUserInput
): Promise<TReviewUserOutput> {
  const res = await fetch(`${env.BACKEND_URL}/api/review/${input.bookId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export type TGetReviewByIdInput = {
  bookId: string;
  reviewId: string;
};

export type TGetReviewByIdOutput = {
  message: string;
  isSuccess: boolean;
  data: TReview;
};

export async function getReviewById(
  input: TGetReviewByIdInput
): Promise<TGetReviewByIdOutput> {
  const res = await fetch(`${env.BACKEND_URL}/api/review/${input.bookId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export type TUpdateReviewBookInput = {
  bookId: string;
  rating: number;
  reviewText: string;
};

export type TUpdateReviewBookOutput = {
  message: string;
  isSuccess: boolean;
  data: TReview;
};

export async function updateReviewBook(
  input: TUpdateReviewBookInput
): Promise<TUpdateReviewBookOutput> {
  const res = await fetch(
    `${env.BACKEND_URL}/api/review/update/${input.bookId}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export type TGetBookReviewByIdInput = {
  bookId: string;
};

export type TGetBookReviewByIdOutput = {
  message: string;
  isSuccess: boolean;
  data: TReview;
};

export async function getBookReviewById(
  input: TGetBookReviewByIdInput
): Promise<TGetBookReviewByIdOutput> {
  const res = await fetch(`${env.BACKEND_URL}/api/books/${input.bookId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
