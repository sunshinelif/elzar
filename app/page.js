import Jumbotron from "@/components/Jumbotron";
import Vision from "@/components/Vision";
import AboutContent from "@/components/AboutContent";
import ContactForm from "@/components/ContactForm";
import Visionandmission from "@/components/Visionandmission"

export default function Home() {
  return (
    <>
      <Jumbotron />
      <AboutContent />
      <Visionandmission/>
      <ContactForm />
    </>
  );
}
