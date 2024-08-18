import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import styles from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchImages } from '../unsplash'; 

import toast from "react-hot-toast";

interface ImageData {
    id: string;
    url: string;
    alt_description: string;
}

export default function App() {
    const [topic, setTopic] = useState<string>("");
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalImageUrl, setModalImageUrl] = useState<string>("");
    const [modalAltDescription, setModalAltDescription] = useState<string>("");

    const handleSearch = (newTopic: string) => {
        console.log("Searching for:", newTopic);
        setTopic(newTopic);
        setImages([]);
        setPage(1);
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const openModal = (imageUrl: string, altDescription: string) => {
        setModalImageUrl(imageUrl);
        setModalAltDescription(altDescription);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        if (topic === "") {
            return;
        }

        async function getImages() {
            try {
                setLoading(true);
                setError("");
                const data = await fetchImages(topic, page);
                console.log("data:", data);
                setImages((prevImages) => [...prevImages, ...data]);
            } catch (error) {
                toast.error("Something went wrong, reload page", { position: "top-left" });
                setError("An error occurred while fetching images.");
            } finally {
                setLoading(false);
            }
        }
        getImages();
    }, [page, topic]);

    return (
        <div className={styles.container}>
            <SearchBar onSubmit={handleSearch} />
            {error ? (
                <ErrorMessage message={error} />
            ) : (
                <>
                    {images && <ImageGallery images={images} onImageClick={openModal} />}
                    {images && images.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
                </>
            )}
            <Loader loading={loading} />
            <Toaster />
            <ImageModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                imageUrl={modalImageUrl}
                altDescription={modalAltDescription}
            />
        </div>
    );
}
