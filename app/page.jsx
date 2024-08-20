import Form from "@components/Form";
import Hero from "@components/Hero";
import Manuscripts from "@components/Manuscripts";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <main className="w-full flex flex-col p-2">
      <Hero />
      <Form />
      <Manuscripts />
    </main>
  );
}
