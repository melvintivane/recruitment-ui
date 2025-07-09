import { useState, useRef } from "react";
import { Modal, ModalBody, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import { applyToVacancy } from "../services/jobApplicationService";
import { useAuth } from "../hooks/useAuth";

const JobApplicationModal = ({ jobId, isOpen, toggle }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setError("CV é obrigatório");
      return;
    }

    if (!user?.id) {
      setError("Usuário não autenticado");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();

      // Cria o objeto DTO que o backend espera
      const applicationDto = {
        candidateId: user.id,
        message: message,
        // outros campos necessários podem ser adicionados aqui
      };

      // Adiciona o DTO como JSON stringify
      formData.append(
        "dto",
        new Blob([JSON.stringify(applicationDto)], {
          type: "application/json",
        })
      );

      // Adiciona o arquivo
      formData.append("cvFile", resumeFile);

      await applyToVacancy(jobId, formData);

      // Fecha o modal e reseta o formulário após sucesso
      toggle();
      setMessage("");
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Opcional: mostrar mensagem de sucesso
      toast.success("Candidatura enviada com sucesso!");
    } catch (err) {
      setError(err.message || "Erro ao enviar candidatura");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validação básica do arquivo
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        setError("Por favor, envie um arquivo PDF ou DOC válido");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // 5MB
        setError("O arquivo é muito grande (máximo 5MB)");
        return;
      }
      setResumeFile(file);
      setError(null);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <form onSubmit={handleSubmit}>
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

          {error && <div className="alert alert-danger mb-3">{error}</div>}

          <div className="mb-3">
            <Label for="messageControlTextarea" className="form-label">
              Mensagem para o recrutador (opcional)
            </Label>
            <textarea
              className="form-control"
              id="messageControlTextarea"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem aqui..."
            ></textarea>
          </div>

          <div className="mb-4">
            <Label className="form-label" for="inputGroupFile01">
              Carregar Currículo (obrigatório)
            </Label>
            <Input
              type="file"
              className="form-control"
              id="inputGroupFile01"
              onChange={handleFileChange}
              ref={fileInputRef}
              accept=".pdf,.doc,.docx"
              required
            />
            <small className="text-muted">
              Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)
            </small>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Enviando...
              </>
            ) : (
              "Enviar Candidatura"
            )}
          </button>
        </ModalBody>
      </form>
    </Modal>
  );
};

export default JobApplicationModal;
