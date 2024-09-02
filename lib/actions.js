"use server";
import collection from "@utils/texts";
import { revalidatePath } from "next/cache";

export const addManuscript = async (formData) => {
  const manuscript = formData.get("manuscript");
  try {
    await collection.insertOne({
      text: manuscript,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.log("error", error);
  }

  revalidatePath("/", "layout");
};

export const getAllManuscripts = async () => {
  try {
    const manuscripts = await collection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return manuscripts;
  } catch (error) {
    console.log(error)
  }

}
