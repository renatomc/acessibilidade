import { useState } from "react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { MainContainer } from "./styles";
import { FormFeedback } from "./FormFeedback";

export function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return  (
    <MainContainer>
      <Button onClick={() => {
        setIsOpenModal(true)
      }}>
        Abrir Modal
      </Button>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <FormFeedback />
      </Modal>
    </MainContainer>
  )
}