import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Block from "./Block";
import EncryptButton from "./EncryptButton";
import Reveal from "./Reveal";

const EmailBlock = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      // Se o campo de email estiver vazio, exibe um toast de erro
      toast.error("Por favor, insira um email válido.");
      return; // Retorna para interromper o envio do formulário
    }

    const templateParms = {
      from_name: "Seu Nome",
      email: email,
      message: "Mensagem de teste",
    };

    const serviceID = "service_d2q2kme";
    const templateID = "template_8imgz1l";
    const userID = "XxFKr6KxpmJ_DR8ab";

    emailjs
      .send(serviceID, templateID, templateParms, userID)
      .then((response) => {
        console.log("Email enviado com sucesso!", response);
        toast.success("Email enviado com sucesso!");
        setEmail("");
      })
      .catch((error) => {
        console.error("Erro ao enviar o email:", error);
        toast.error(
          "Erro ao enviar o email. Por favor, tente novamente mais tarde."
        );
      });
  };

  return (
    <Block className="col-span-12 md:col-span-9">
      <Reveal>
        <div>
          <p className="mb-3 text-md">
            Vamos criar algo incrível juntos! Inscreva-se agora para começarmos.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-2 md:flex-row"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full mb-1 md:mb-0 rounded border border-cyan-900 bg-zinc-700 px-3 py-1.5 transition-colors focus:border-cyan-300 focus:outline-0"
            />
            <EncryptButton />
          </form>
        </div>
      </Reveal>

      <ToastContainer position="bottom-center" />
    </Block>
  );
};

export default EmailBlock;
