import { askChatGPT } from "./ai";

export async function getMovieByAI(userPrompt, retries = 1) {
  const prompt = `
You are a movie recommendation engine.

Analyze the user's request and infer their preferences.
If the user mentions specific movies, franchises, or series,
treat them ONLY as references for taste and style.

IMPORTANT:

- Do NOT recommend movies from the same direct franchise or series
  that the user mentioned.
- Choose a DIFFERENT movie that matches a similar vibe, genre,
  or audience level.

Choose ONE well-known, mainstream movie
that best matches the inferred preferences.

Return the result STRICTLY as a valid JSON object with the following structure:

{
  "title": "Movie Title",
  "releaseYear": 2000
}

Rules:
- Return ONLY valid JSON.
- Do NOT include explanations, comments, or extra text.
- Do NOT include markdown or code blocks.
- The movie must be widely recognized (not obscure or experimental).
- If multiple movies fit, choose the most popular and well-known one.

User request:
${userPrompt}
`;

  try {
    const result = await askChatGPT(prompt);

    if (!result) {
      throw new Error("Empty AI response");
    }

    const movie = JSON.parse(result);

    if (!movie.title || typeof movie.releaseYear !== "number") {
      throw new Error("Invalid movie JSON structure");
    }

    return movie;
  } catch (err) {
    if (retries > 0) {
      return getMovieByAI(userPrompt, retries - 1);
    }

    throw new Error(
      `Failed to get a valid movie JSON for prompt: "${userPrompt}"`
    );
  }
}

export function getGenreNameByID(id) {
  return genres[id] || "Unknown";
}

const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
