import axios from 'axios';

export const handleUserRequests = async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://user-service:3000${req.originalUrl}`,
            data: req.body,
            headers: req.headers,
        });
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};