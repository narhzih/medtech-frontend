import Hero from "@/components/layout/landing/Hero/Hero";
import DoctorsSection from "@/components/layout/landing/work/DoctorsSection";
import PatientsSection from "@/components/layout/landing/work/PatientsSection";
import AdminSection from "@/components/layout/landing/work/AdminSection";
import ManagementSection from "@/components/layout/landing/work/ManagementSection";

export default function Index() {
  return (
    <>
      <Hero />
      <PatientsSection />
      <DoctorsSection />
      <AdminSection />
      <ManagementSection />
    </>
  );
}
