import React from 'react';
import styles from "./ImageCard.module.css";

interface Image {
    url: string;
    alt_description?: string;
}

interface ImageCardProps {
    image: Image;
    onImageClick: (url: string, altDescription: string) => void;
}

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
    return (
        <div className={styles.imageCard}>
            <img
                onClick={() => onImageClick(image.url, image.alt_description || "Image")}
                src={image.url}
                alt={image.alt_description || "Image"}
            />
        </div>
    );
}
