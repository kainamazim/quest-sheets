"use client";

import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return <Button onClick={() => signOut()}>{"Sign Out"}</Button>;
};

export default SignOutButton;
