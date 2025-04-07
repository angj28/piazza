import { useParams } from "react-router";

export default function Quizzes({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  // const course = courses.find((course) => course._id === cid);
  return <div>Quizzes for {cid}</div>;
}
