import DeepSpace from "../DeepSpace";
import GradientGlow from "../GradientGlow";
import Nebula from "../Nebula";
import StarField from "../StarField";

export default function Universe() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <DeepSpace />

      <Nebula />

      <GradientGlow />

      <StarField />
    </div>
  );
}