
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";


export default function Home() {
  return (
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 bg-slate-200 gap-4">
  <Mission />
  <Vision />
</div>



    </>
  );
}
