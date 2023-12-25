"use client";

import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";

const inputsSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  message: z.string().min(1),
});

type Inputs = z.infer<typeof inputsSchema>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(inputsSchema),
  });

  const [state, submit] = useFormspree("xzblblda");

  const onSubmit: SubmitHandler<Inputs> = async (inputs, e) => {
    submit(e);
    reset();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-4" autoComplete="off" noValidate>
      <div className="flex flex-col">
        <label htmlFor="contact-name" className="mb-4">
          Nombre
        </label>
        <input
          id="contact-name"
          placeholder="Jhon Doe"
          className={
            errors.name
              ? "bg-bunker-900/50 p-2 h-10 rounded-lg focus:outline-red-400 border border-red-400 text-red-400"
              : "bg-bunker-900/50 p-2 h-10 rounded-lg focus:outline-red-300/50"
          }
          {...register("name")}
        />
        {errors.name ? <p className="e mt-2 text-red-400 text-sm">Asegurese de que este campo es válido</p> : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="contact-email" className="mb-4">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          placeholder="example@example.com"
          className={
            errors.email
              ? "bg-bunker-900/50 p-2 h-10 rounded-lg focus:outline-red-400 border border-red-400 text-red-400"
              : "bg-bunker-900/50 p-2 h-10 rounded-lg focus:outline-red-300/50"
          }
          {...register("email")}
        />
        {errors.email ? <p className="e mt-2 text-red-400 text-sm">Asegurese de que este campo es válido</p> : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="contact-message" className="mb-4">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          placeholder="Escriba su mensaje"
          className={
            errors.message
              ? "bg-bunker-900/50 p-2 h-40 resize-none rounded-lg focus:outline-red-400 border border-red-400 text-red-400"
              : "bg-bunker-900/50 p-2 h-40 resize-none rounded-lg focus:outline-red-300/50"
          }
          {...register("message")}
        />
        {errors.message ? <p className="e mt-2 text-red-400 text-sm">Asegurese de que este campo es válido</p> : null}
      </div>
      <input
        value="Enviar"
        type="submit"
        className="bg-red-300 p-2 cursor-pointer rounded-lg font-bold text-bunker-950 hover:bg-red-400/80"
      />
      {sent ? <p className="text-green-400">Mensaje enviado con éxito</p> : null}
    </form>
  );
}
