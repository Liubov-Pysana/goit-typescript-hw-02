import React from 'react';
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
    handleLoadMore: () => void;
}

export default function LoadMoreBtn({ handleLoadMore }: LoadMoreBtnProps) {
    return (
        <button className={styles.button} onClick={handleLoadMore}>
            Load more
        </button>
    );
}
