import WorkTable from "@/components/WorkTable";
import Footer from "@/components/Footer";

export const metadata = { title: "Work — Adam Schaban" };

export default function WorkPage() {
  return (
    <main className="pt-16">
      <WorkTable />
      <Footer />
    </main>
  );
}
