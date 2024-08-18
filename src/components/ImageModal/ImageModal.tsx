import React from 'react';
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
    isOpen: boolean;
    closeModal: () => void;
    imageUrl: string;
    altDescription: string;
}

export default function ImageModal({ isOpen, closeModal, imageUrl, altDescription }: ImageModalProps) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={styles.content}
                overlayClassName={styles.overlay}
                contentLabel="Image Modal"
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
            >
                <img src={imageUrl} alt={altDescription} className={styles.image} />
            </Modal>
        </div>
    );
}
