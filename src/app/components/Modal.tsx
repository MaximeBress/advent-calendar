import { Modal as ModalComponent } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import React, {PropsWithChildren} from "react";

type ModalProps = {
    open: boolean;
    onCloseModal: () => void;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ open, onCloseModal, children }) => {
    return (
        <ModalComponent
            open={open}
            onClose={onCloseModal}
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
            }}
        >
            {children}
        </ModalComponent>
    )
}

export { Modal };
