import styles from './Modal.module.scss'

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void 
}
export function Modal({children, title, onClose}: ModalProps) {

 return (
    <>
    <div className={styles.background} onClick={onClose}> </div>
    <div className={styles.main}> 

    <h1 className={styles.title}>{title}</h1>
    { children }
    </div>

    </>
 )
}