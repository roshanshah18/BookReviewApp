import {  useUpdateBookMutation } from "../../api/book/query";
import { errorToast, successToast } from "../toaster";
import { MdDelete } from "react-icons/md";
import {z} from "zod"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const updateBookSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    genre: z.string().min(1, "Genre is required"),
    description: z.string(),
  })

  export function UpdateBook() {
    const [open, setOpen] = useState(false);
  
    const openModal = () => {
      setOpen(true);
    };
  
    const closeModal = () => {
      setOpen(false);
    };
  
    return (
      <div className="max-w-3xl">
        <button onClick={openModal} className="bg-[#17191e] text-white rounded-md w-28 ml-4">
         
        </button>
        <UpdateBookModal open={open} closeModal={closeModal} />
      </div>
    );}

    export function UpdateBookModal({
        open,
        closeModal,
      }: {
        open: boolean;
        closeModal: () => void;
      }) {
        const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm({
          mode: "all",
          defaultValues: {
            title: "",
            author: "",
            genre: "",
            description: "",
          },
          resolver: zodResolver(createBookSchema),
        });

        const updateBookMutation= useUpdateBookMutation()
  const onSubmit: SubmitHandler<z.infer<typeof updateBookSchema>> = (data) => {
    try {
      updateBookMutation.mutateAsync(
        {
        bookId: data.bookId,
          title: data.title,
          author: data.author,
          genre: data.genre,
          description:data.description
        },
        {
          onSuccess(data) {
            successToast(data.message);
            reset();
            
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

export function DeleteBooks({ bookId }: { bookId: string }) {
  const deleteBookMutation = useBookMutation();

  const deleteBook = async () => {

    try {
      await deleteBookMutation.mutateAsync(
        {
          bookId: bookId,
        },
        {
          onSuccess(data) {
            successToast(data.message);
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
      <button onClick={deleteBook}>
        <MdDelete />
      </button>
    </>
  );
}
      }
