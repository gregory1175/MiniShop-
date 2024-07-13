import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps {
    error: string;
}
export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className={styles.error}>{error}</p> 
    )
}