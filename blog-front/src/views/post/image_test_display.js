import axios from "axios";
import {useEffect, useState} from "react";

function ImageDisplay(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                setLoading(true);
                // Fetch the image from your API
                const response = await fetch(`http://localhost:10000/image/3`,{
                    // Adding these specific headers to handle CORS properly
                    headers: {
                        'Accept': 'image/jpeg',
                        'Origin': 'http://localhost:3000'
                    },
                    // Instead of no-cors, we use cors mode but with proper configuration
                    mode: 'cors',
                    credentials: 'include'
                });

                if (!response.ok) {
                    throw new Error('Failed to load image');
                }

                // Create a blob URL from the image data
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
                setError(null);
                console.log(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();

        // Cleanup: revoke the blob URL when component unmounts
        return () => {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, []);

    if (loading) {
        return (
            <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                Loading image...
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full p-4 bg-red-100 text-red-700 rounded-lg">
                Error loading image: {error}
            </div>
        );
    }

    return (
        <img
            src={imageUrl}
            alt={`Post ${3} image`}
            className="w-full h-auto rounded-lg shadow-md transition-opacity duration-300"
            onLoad={() => {
                // Add any animations or effects when image loads
            }}
            onError={() => setError('Failed to display image')}
        />
    );
};

export default ImageDisplay;