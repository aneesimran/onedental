import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const PLACE_ID = process.env.NEXT_PUBLIC_PLACE_ID;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json`,
            {
                params: {
                    place_id: PLACE_ID,
                    key: API_KEY,
                    fields: "reviews",
                },
            }
        );
        res.status(200).json(response.data.result.reviews);
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        res.status(500).json({ error: "Error fetching Google Reviews" });
    }
}
