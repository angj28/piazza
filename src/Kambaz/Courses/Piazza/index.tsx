import { useParams } from "react-router";

export default function Piazza({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  // const course = courses.find((course) => course._id === cid);
  return <div>Piazza for {cid}</div>;
}
