import Nebula from "./Nebula";
import Stars from "./Stars";

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020617]">
      <Nebula />

      <Stars />
    </div>
  );
}