export default async function handler(req: any, res: any) {
    try {
        const response = await fetch('http://localhost:3000/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API error: ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error: any) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
}
