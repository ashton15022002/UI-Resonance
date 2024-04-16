import { Fragment, useRef } from "react";
import { useScreenshot } from "use-react-screenshot";

import "./Receipt.css";
interface ReceiptProps {
	genre: string;
	mood: string;
	characteristics: string[];
	artists: {
		name: string;
	}[];
	tracks: { id: string; name: string; artist: string; duration: string }[];
	playlist: { name: string; external_urls: { spotify: string } };
}

const secondsToDurationText = (seconds: number) => {
	const hours = Math.floor(seconds / 3600);
	let remainingSeconds = seconds % 3600;
	const mins = Math.floor(remainingSeconds / 60)
		.toString()
		.padStart(2, "0");
	const secs = (remainingSeconds % 60).toString().padStart(2, "0");

	if (hours > 0) {
		return `${hours}:${mins}:${secs}`;
	} else {
		return `${mins}:${secs}`;
	}
};

const Receipt: React.FC<ReceiptProps> = ({
	genre,
	mood,
	characteristics,
	artists,
	tracks,
	playlist,
}) => {
	const [image, takeScreenshot] = useScreenshot();
	const receiptRef = useRef(null);

	const downloadReceipt = async () => {
		await takeScreenshot(receiptRef.current);
		const a = document.createElement("a");
		a.href = image;
		a.download = "your_receipt.png";
		a.click();
	};

	const totalDurationSecs = tracks
		.map((track) => {
			const [mins, secs] = track.duration.split(":");
			return parseInt(mins) * 60 + parseInt(secs);
		})
		.reduce((total, trackDuration) => total + trackDuration, 0);

	return (
		<div>
			<div className="receipt__container large-gap" ref={receiptRef}>
				<h1 className="receipt__heading large-gap">Resonance</h1>
				<div>
					<p>GENRE: {genre}</p>
					<p>MOOD: {mood}</p>
					<p>
						ARTISTS:{" "}
						{artists.map((artist) => artist.name).join(", ")}
					</p>
				</div>
				<p className="receipt__characteristics">{characteristics}</p>

				<p className="small-gap">
					ALBUM:{" "}
					<a
						className="receipt__link"
						target="_blank"
						href={playlist.external_urls.spotify}
					>
						{playlist.name}
					</a>
				</p>

				<p className="small-gap">PRESCRIPTION:</p>
				<div>
					<div className="receipt__playlist">
						<p className="receipt__playlist-header">QTY</p>
						<p className="receipt__playlist-header receipt__playlist-item">
							ITEM
						</p>
						<p className="receipt__playlist-header">AMT</p>
						{tracks.map((track, i) => (
							<Fragment key={i}>
								<p className="">{i}</p>
								<p className="receipt__playlist-item">
									{track.name + " - " + track.artist}
								</p>
								<p className="">{track.duration}</p>
							</Fragment>
						))}
					</div>

					<div className="receipt__summary-container large-gap">
						<div className="receipt__summary-row">
							<p>TREATMENTS:</p>
							<p>{tracks.length}</p>
						</div>
						<div className="receipt__summary-row">
							<p>SESSION DURATION:</p>
							<p>{secondsToDurationText(totalDurationSecs)}</p>
						</div>
					</div>
				</div>

				<p className="large-gap">
					CARD NAME: **** **** **** {new Date().getFullYear()}
				</p>

				<div className="receipt__thank-you">
					<p>THANK YOU FOR VISITING</p>
				</div>
			</div>
			<div className="actions-container">
				<button
					className="receipt__download-button"
					onClick={downloadReceipt}
				>
					Download Receipt
				</button>
				<a className="receipt__download-button" href="/input">
					New Diagnosis
				</a>
			</div>
		</div>
	);
};

export default Receipt;
