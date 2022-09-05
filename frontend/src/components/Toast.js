import { Toast as ToastComponent } from 'react-bootstrap';
import styles from "./styles.module.scss";

function Toast({ message, onClose }) {
  return (
    <ToastComponent animation={true} className={`${styles.toast} bg-warning`} onClose={onClose}>
      <ToastComponent.Header className={styles.toast_header}>
        <strong className="me-auto"></strong>
      </ToastComponent.Header>
      <ToastComponent.Body>{message}</ToastComponent.Body>
    </ToastComponent>
  );
}

export default Toast;