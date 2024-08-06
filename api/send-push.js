export default async function handler(req, res) {
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: req.body, // ส่ง body ที่รับมาจากคำขอของไคลเอนต์
    });

    const data = await response.json();
    res.status(response.status).json(data);
}
