"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { relative } from "path";

const schema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  password: z
  .string()
  .min(6, "A senha deve ter pelo menos 6 caracteres")
  .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
  .regex(/[0-9]/, "A senha deve conter pelo menos um número"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"], // mostra o erro no campo certo
});
type FormValues = z.infer<typeof schema>;

export default function FormEntrar() {
    const [showPassword, setShowPassword] = useState(false);

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm<FormValues>({
    resolver: zodResolver(schema),
    });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
        <div >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-80 bg-white p-6 rounded-xl shadow-md"
                >
                <h2 className="text-lg font-semibold">Login</h2>
                <div>
                    <input
                        {...register("email")}
                        placeholder="Email"
                         autoComplete="email"
                        className="border w-full p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-end">
                        <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className=" mb-1 text-gray-500 hover:text-gray-700"
                        >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} 
                        </button>
                        <p className=" mx-1 text-[12px]">Ocutar Senha</p>
                    </div>

                    <input
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        placeholder="Digite sua senha"
                        autoComplete="current-password"
                        className={`border w-full p-2 rounded focus:ring-2 outline-none ${
                            errors.password
                            ? "border-red-500 focus:ring-red-400"
                            : "focus:ring-blue-400 border-gray-300"
                    }`}
                    />
                        {
                            errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )
                        }
                        {/* Botão mostrar/ocultar */}

                </div>
                
               

                <button
                    type="submit"
                    className="bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
                >
                    Entrar
                </button>


            </form>
        </div>
  );
}
