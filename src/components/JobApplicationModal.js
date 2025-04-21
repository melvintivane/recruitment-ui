import { Modal, ModalBody, Input, Label } from "reactstrap";

const JobApplicationModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalBody className="modal-body p-5">
        <div className="text-center mb-4">
          <h5 className="modal-title" id="staticBackdropLabel">
            Candidatar-se a esta Vaga
          </h5>
        </div>
        <div className="position-absolute end-0 top-0 p-3">
          <button
            type="button"
            onClick={toggle}
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Fechar"
          ></button>
        </div>
        <div className="mb-3">
          <Label for="nameControlInput" className="form-label">
            Nome
          </Label>
          <Input
            type="text"
            className="form-control"
            id="nameControlInput"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-3">
          <Label for="emailControlInput2" className="form-label">
            Endereço de Email
          </Label>
          <Input
            type="email"
            className="form-control"
            id="emailControlInput2"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-3">
          <Label for="messageControlTextarea" className="form-label">
            Mensagem
          </Label>
          <textarea
            className="form-control"
            id="messageControlTextarea"
            rows="4"
            placeholder="Digite sua mensagem"
          ></textarea>
        </div>
        <div className="mb-4">
          <Label className="form-label" for="inputGroupFile01">
            Carregar Currículo
          </Label>
          <Input type="file" className="form-control" id="inputGroupFile01" />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar Candidatura
        </button>
      </ModalBody>
    </Modal>
  );
};

export default JobApplicationModal;
