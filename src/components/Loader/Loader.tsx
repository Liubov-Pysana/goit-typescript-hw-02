
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
                    width="96"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            )}
        </div>
    );
}
