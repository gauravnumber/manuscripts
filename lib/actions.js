"use server";
import { revalidatePath } from "next/cache";

export const addManuscript = async (text) => {
  const res = await fetch(`${process.env.SITE_URL}/api/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, createdAt: new Date() }),
  });

  if (!res.ok) console.log("response not ok");

  revalidatePath("/", "layout");
};
