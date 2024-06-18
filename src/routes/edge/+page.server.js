export const config = {
	runtime: 'edge'
};

export function load() {
	const generatedAt = new Date().toLocaleString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		fractionalSecondDigits: 3 // for milliseconds
	});

	/* return {
		generatedAt
	}; */

  const result = await fetch(
    'https://api.vercel.com/v1/backoffice/getToken/rickyrauch@gmail.com',
  );

  const data = await result.json();

  return response.json({ datetime: data });
}

