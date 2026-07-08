import { useState } from "react";
import { DATA } from "../constants/portfolio.jsx";
import { SectionLabel } from "./UI.jsx";

export default function BucketListCard() {
  const [checked, setChecked] = useState(DATA.bucketList.map((b) => b.done));
  const toggle = (i) => setChecked((v) => v.map((c, j) => (j === i ? !c : c)));
  const done = checked.filter(Boolean).length;

  return (
    <div className="card c4">
      <SectionLabel label="MISSION.LOG" />

      {/* Progress Bar */}
      <div
        style={{
          dislay: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span className="fm" style></span>
      </div>
    </div>
  );
}
