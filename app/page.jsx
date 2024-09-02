import Form from "@components/Form";
import Hero from "@components/Hero";
import Manuscripts from "@components/Manuscripts";

// export const experimental_ppr = true;
// export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main className="w-full flex flex-col p-2">
      <Hero />
      <Form />
      <Manuscripts />
    </main>
  );
}
