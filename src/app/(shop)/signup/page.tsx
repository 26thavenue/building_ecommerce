"use client";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {z} from "zod";
import type { Database } from "@/lib/database.types";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  });

  
  return (
    <>
      <Input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      
      <Input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Input
        type="password"
        name="confirm-password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </>
  );
}