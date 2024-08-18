import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "Wc2fQQu_VfDgC39QNbmX0JouwDxAWt_sCt8wG7GXmZ4";

// Define the types for the API response
interface UnsplashApiResponse {
    results: {
        id: string;
        urls: {
            small: string;
        };
        alt_description: string;
    }[];
}

// Define the type for the transformed image data
interface ImageData {
    id: string;
    url: string;
    alt_description: string;
}

export const fetchImages = async (query: string, currentPage: number): Promise<ImageData[]> => {
    try {
        const res = await axios.get<UnsplashApiResponse>('/search/photos', {
            params: {
                query: query,
                page: currentPage,
                per_page: 10,
            },
            headers: {
                Authorization: `Client-ID ${API_KEY}`,
            },
        });

        console.log(res.data);

        return res.data.results.map((image) => ({
            id: image.id,
            url: image.urls.small,
            alt_description: image.alt_description || "Image",
        }));
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
