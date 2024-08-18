import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface Image {
    id: string;
    url: string;
    alt_description?: string;
}

interface ImageGalleryProps {
    images: Image[];
    onImageClick: (url: string, altDescription: string) => void;
}

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
    if (!images || images.length === 0) {
        return <p>No images found.</p>;
    }

    return (
        <ul className={styles.imageGallery}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onImageClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}

// return (
//     <ul className={styles.imageGallery}>
//         {images.map((image, index) => (
//             <li key={`${image.id}-${index}`}>
//                 <ImageCard image={image} onImageClick={onImageClick} />
//             </li>
//         ))}
//     </ul>
// );