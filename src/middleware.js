"use client";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { signOut } from "next-auth/react";

export async function middleware(req) {
  const session = await auth();

  const dateNow = new Date();
  const dateExpire = new Date(session?.expires);

  if (dateNow > dateExpire) {
    signOut();
  }

  if (session === null && req.url !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
