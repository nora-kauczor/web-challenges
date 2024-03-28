import { Counter } from "./Counter.js";
export default function ColoredNumber({ count }) {
  return (
    <h2 style={{ color: `hsl(${230 - (count / 100) * 230}deg 100% 50%)` }}>
      {count}
    </h2>
  );
}
// change "value" into "count"
