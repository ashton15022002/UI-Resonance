import React from "react";
import "./MoodGrid.css";


interface MoodGridProps {
  onDiagnoseSelect: (text: string) => void;
}

const MoodGrid: React.FC<MoodGridProps> = ({
  onDiagnoseSelect: handleDiagnoseSelect,
}) => {
  return (
    <div className="container-grid">
      <div className="mood" onClick={() => handleDiagnoseSelect("Upbeat")}>Upbeat</div>
      <div className="mood" onClick={() => handleDiagnoseSelect("Ambient")}>Ambient</div>
      <div className="mood" onClick={() => handleDiagnoseSelect("Anxious")}>Anxious</div>
      <div className="mood" onClick={() => handleDiagnoseSelect("Calm")}>Calm</div>
      <div className="mood" onClick={() => handleDiagnoseSelect("Chill")}>Chill</div>
      <div className="mood" onClick={() => handleDiagnoseSelect("Energetic")}>Energetic</div>
      <div className="mood" onClick={() => handleDiagnoseSelect("Happy")}>Happy</div>
      <div className="mood" onClick={() => handleDiagnoseSelect("Sad")}>Sad</div>
    </div>
  );
};

export default MoodGrid;
