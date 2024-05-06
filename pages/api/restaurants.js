import axios from 'axios';

export default async (req, res) => {
    try {
        const { lat, lng, dish } = req.query;
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
            params: {
                location: `${lat},${lng}`,
                radius: 5000,
                type: 'restaurant',
                keyword: dish,
                key: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY
            }
        });
        res.status(200).json(data.results.slice(0, 3));
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
};
