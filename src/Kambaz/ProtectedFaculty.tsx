import { useSelector } from "react-redux";
export default function ProtectedFaculty({
  studentAccess,
  children,
}: {
  studentAccess: any;
  children: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role == "FACULTY") {
    return children;
  } else {
    return studentAccess;
  }
}
