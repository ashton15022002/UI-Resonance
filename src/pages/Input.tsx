import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import "../assets/css/Input.css";
import ScrollReveal from "scrollreveal";
import GenreGrid from "../components/GenreGrid";
import TextInput from "../components/TextInput/TextInput";
import MoodGrid from "../components/MoodGrid/MoodGrid";

const Input = () => {
  const [values, setValues] = useState({
    danceability: 50,
    energy: 50,
    instrumentalness: 50,
    loudness: -30,
    valence: 50,
    notes: "",
  });
  const navigate = useNavigate();

  const handleSliderChange = (name) => (value) => {
    setValues({ ...values, [name]: value });
  };

  const handleTextareaChange = (e) => {
    setValues({ ...values, notes: e.target.value });
  };

  const handleSubmit = () => {
    navigate("/diagnose", {
      state: { values },
    });
    console.log(values);
  };
  const sr = ScrollReveal({
    duration: 3000,
  });
  useEffect(() => {
    sr.reveal(`.container`, { origin: "top", delay: 100 });
    sr.reveal(`.slider-container`, { origin: "bottom", delay: 200 });
    sr.reveal(`.submit-container`, { delay: 400 });
  }
  , []);


  return (
    <div className="input-page">
      <section className="container">
        <div className="title">
          <h2>Pick a genre from our popular diagnoses</h2>
        </div>
        <GenreGrid onDiagnoseSelect={function (text: string): void {
          throw new Error("Function not implemented.");
        } } />
        {/* <div className="btn-group">
          <button className="btn-primary">Pop Punk</button>
          <button className="btn-primary">Korean Soft Indie</button>
          <button className="btn-primary">R&B</button>
          <button className="btn-primary">Lo-fi</button>
          <button className="btn-primary">Rap Hip-hop</button>
          <button className="btn-primary">Disney Soundtracks</button>
          <button className="btn-primary">EDM</button>
          <button className="btn-primary">Mandopop</button>
        </div> */}
        <div className="title">
          <h3>Or choose a mood and custom your own preference</h3>
          <br></br>
        </div>
        <MoodGrid onDiagnoseSelect={function (text: string): void {
          throw new Error("Function not implemented.");
        } } />
        {/* <div className="btn-group">
          <button className="btn-secondary">Upbeat</button>
          <button className="btn-secondary">Ambient</button>
          <button className="btn-secondary">Anxious</button>
          <button className="btn-secondary">Inspiring</button>
        </div> */}
      </section>
      <section className="slider-container">
        <Slider
          name="Danceability"
          description="Danceability describes how suitable a track is for dancing based on a combination of musical elements."
          onSliderChange={handleSliderChange("danceability")}
          value={values.danceability}
          min={0}
          max={100}
        />
        <Slider
          name="Energy"
          description="Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity."
          onSliderChange={handleSliderChange("energy")}
          value={values.energy}
          min={0}
          max={100}
        />
        <Slider
          name="Instrumentalness"
          description="Predicts whether a track contains no vocals. 'Ooh' and 'Aah' sounds are treated as instrumental in this context."
          onSliderChange={handleSliderChange("instrumentalness")}
          value={values.instrumentalness}
          min={0}
          max={100}
        />
        <Slider
          name="Loudness"
          description="The overall loudness of a track in decibels (dB)."
          onSliderChange={handleSliderChange("loudness")}
          value={values.loudness}
          min={-60}
          max={0}
        />
        <Slider
          name="Valence"
          description="A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track."
          onSliderChange={handleSliderChange("valence")}
          value={values.valence}
          min={0}
          max={100}
        />
        <div className="note">
          <TextInput
            label="Notes"
            placeholder="E.g. Some soft chill Korean indie"
            value={values.notes}
            onChange={handleTextareaChange}
          />
          {/* <div className="label-container">
            <label htmlFor="notes">Notes</label>
          </div>
          <div className="input-container">
            <textarea
              id="notes"
              name="notes"
              placeholder="E.g. Some soft chill Korean indie"
            ></textarea>
          </div> */}
        </div>
      </section>

      <section className="submit-container">
        <button className="btn-submit" onClick={handleSubmit}>
          Give me new songs!
        </button>
      </section>
    </div>
  );
};

export default Input;
