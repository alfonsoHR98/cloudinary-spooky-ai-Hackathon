"use client";
import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div>
      <button
        onClick={() =>
          signIn("github", {
            redirectTo: "/",
          })
        }
      >
        Sign in
      </button>
    </div>
  );
}

export default Login;
