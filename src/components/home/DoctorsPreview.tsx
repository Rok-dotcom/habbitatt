import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { doctors } from "../../data/mockData";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import DoctorCard from "./DoctorCard";

export default function DoctorsPreview() {
  return (
    <section className="container-page py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading align="left" eyebrow="Meet the team" title="Doctors people actually trust" />
        <Link to="/doctors" className="shrink-0">
          <Button variant="outline" icon={<ArrowRight size={16} />}>View all doctors</Button>
        </Link>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.slice(0, 3).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
