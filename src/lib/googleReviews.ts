import axios from "axios";

export interface Review {
    author_name: string;
    rating: number;
    text: string;
}

export const fetchGoogleReviews = async (): Promise<Review[]> => {
    try {
        const response = await axios.get("/api/reviews");
        return response.data;
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        return [];
    }
};
