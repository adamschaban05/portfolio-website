import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = { title: "About — Adam Schaban" };

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
      <Footer />
    </main>
  );
}
