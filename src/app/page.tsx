"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  
  return (
    <Button variant="destructive">Helllo </Button>
  );
}
