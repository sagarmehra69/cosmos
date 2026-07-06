import DeepSpace from "../DeepSpace";
import GradientGlow from "../GradientGlow";

export default function Universe() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <DeepSpace />

      <GradientGlow />

    </div>
  );
}