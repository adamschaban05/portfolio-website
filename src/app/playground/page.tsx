import Playground from "@/components/Playground";
import Footer from "@/components/Footer";

export const metadata = { title: "Playground — Adam Schaban" };

export default function PlaygroundPage() {
  return (
    <main className="pt-16">
      <Playground />
      <Footer />
    </main>
  );
}
