import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styles from "./Loader.module.css";

interface LoaderProps {
    loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
    return (
        <div className={styles.loader}>
            {loading && (
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="black"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            )}
        </div>
    );
}
