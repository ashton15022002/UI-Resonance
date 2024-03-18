import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "../assets/css/Input.css";

const Input = () => {
  const [values, setValues] = useState({
    danceability: 50,
    energy: 50,
    instrumentalness: 50,
    loudness: 50,
    valence: 50,
    notes: "",
  });

  const handleSliderChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e) => {
    setValues({ ...values, notes: e.target.value });
  };

  const handleSubmit = () => {
    // Submit handler logic
    console.log(values);
  };

  return (
    <div className="input-page">
      <div className="input-container">
        <div className="container">
          <h2>Pick a genre from our popular diagnoses</h2>
          <br></br>
          <div
            className="btn-group"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary">Pop Punk</button>
            <button className="btn-primary">Korean Soft Indie</button>
            <button className="btn-primary">R&B</button>
            <button className="btn-primary">Lo-fi</button>
            <button className="btn-primary">Rap Hip-hop</button>
            <button className="btn-primary">Disney Soundtracks</button>
            <button className="btn-primary">EDM</button>
            <button className="btn-primary">Mandopop</button>
          </div>

          <h3>Or choose a mood and custom your own preference</h3>
          <br></br>
          <div className="btn-group">
            <button className="btn-secondary">Upbeat</button>
            <button className="btn-secondary">Ambient</button>
            <button className="btn-secondary">Anxious</button>
            <button className="btn-secondary">Inspiring</button>
          </div>
        </div>
        <div className="slider-container">
          <label htmlFor="danceability">Danceability</label>
          <input
            className="slider"
            type="range"
            id="danceability"
            name="danceability"
            min="0"
            max="100"
            value={values.danceability}
            onChange={handleSliderChange}
          />
          <div className="info">
            Danceablility describes the suitable a track is for dancing on a
            comnbination of musical elements.
          </div>
          <br></br>
          <label htmlFor="energy">Energy</label>
          <input
            className="slider"
            type="range"
            id="energy"
            name="energy"
            min="0"
            max="100"
            value={values.energy}
            onChange={handleSliderChange}
          />
          <div className="info">
            Energy is a measure from 0.0 to 1.0 and represents a perceptual
            measure of intesity and activity.
          </div>
          <br></br>
          <label htmlFor="instrumentalness">Instrumentalness</label>
          <input
            className="slider"
            type="range"
            id="instrumentalness"
            name="instrumentalness"
            min="0"
            max="100"
            value={values.instrumentalness}
            onChange={handleSliderChange}
          />
          <div className="info">
            Predicts whether a track contains no vocals. "Ooh" and "Aah" sounds
            are treated as instrumental in this context.
          </div>
          <br></br>
          <label htmlFor="loudness">Loudness</label>
          <input
            className="slider"
            type="range"
            id="loudness"
            name="loudness"
            min="0"
            max="100"
            value={values.loudness}
            onChange={handleSliderChange}
          />
          <div className="info">
            Loudness is the quality of a sound that is the primary pyschological
            correlate of physical strength (amplitude).
          </div>
          <br></br>
          <label htmlFor="valence">Valence</label>
          <input
            className="slider"
            type="range"
            id="valence"
            name="valence"
            min="0"
            max="100"
            value={values.valence}
            onChange={handleSliderChange}
          />
          <div className="info">
            Valence describes the positiveness conveyed by a track. Tracks with
            high valence sound more positive, while tracks with low valence
            sound more negative.
          </div>
          <br></br>
          <br></br>

          <div className="note">
            <div className="label-container">
              <label htmlFor="notes">Notes</label>
            </div>
            <div className="input-container">
              <textarea
                id="notes"
                name="notes"
                placeholder="E.g. Some soft chill Korean indie"
              ></textarea>
              <br />
              <button className="btn-submit" onClick={handleSubmit}>
                Give me new songs!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
