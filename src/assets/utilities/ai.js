export async function askChatGPT(prompt) {
  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      input: prompt,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  const data = await res.json();

  const text = data.output?.[0]?.content?.find(
    (c) => c.type === "output_text"
  )?.text;

  return text;
}
