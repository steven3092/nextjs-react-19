"use client";
import { FormEvent } from "react";
import { usePostUsers } from "../use-post-users/use-post-users";

export const useAddUsers = () => {
  const { createUserMutation } = usePostUsers();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    const form = document?.getElementById("userForm") as HTMLFormElement;
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    await createUserMutation.mutateAsync(formData, {
      onSuccess: () => {
        console.log("User created");
        form?.reset();
      },
    });
  };

  return {
    handleSubmitForm,
  };
};
