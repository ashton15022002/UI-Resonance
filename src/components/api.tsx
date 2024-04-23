export const BASE: string = "http://13.54.181.2:8000/";

interface Artist {
	name: string;
	img: string;
	id: string;
	content: string;
}

export interface Data {
	genre: string;
	mood: string;
	color: string;
	characteristics: string[];
	artists: Artist[];
	tracks: {
		id: string;
		name: string;
		artist: string;
		duration: string;
	}[];
}

const getBody = (data: any) => {
	return {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};
};

export const fetchJson = async (url: string, data: any) => {
	const response = await fetch(url, getBody(data));
	return response.json();
};

export const fetchData = async (description: string) => {
	const analysis = await fetchJson(BASE + "analysis", {
		description: description,
	});

	const artists = await fetchJson(BASE + "artist", {
		names: analysis.artists,
	});

	analysis.artists = artists.map((artist: any, index: any) => ({
		...artist,
		content: analysis.content[index],
	}));
	delete analysis.content;

	analysis.tracks = await fetchJson(BASE + "recommendation", {
		ids: analysis.artists.map((artist: any) => artist.id),
	});

	return analysis;
};


// Test
const description = "Korean Soft Indie";
fetchData(description)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });