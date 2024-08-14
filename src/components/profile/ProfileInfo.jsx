import { useProfile } from "../../hooks/useProfile";

export default function ProfileInfo() {
  const { state } = useProfile();
  return <div>Profile Info</div>;
}
