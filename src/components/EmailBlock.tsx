import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Block from './Block';

const EmailBlock = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      // Se o campo de email estiver vazio, exibe um toast de erro
      toast.error('Por favor, insira um email válido.');
      return; // Retorna para interromper o envio do formulário
    }

    const templateParms = {
      from_name: 'Seu Nome',
      email: email,
      message: 'Mensagem de teste',
    };

    const serviceID = 'service_d2q2kme';
    const templateID = 'template_8imgz1l';
    const userID = 'XxFKr6KxpmJ_DR8ab';

    emailjs
      .send(serviceID, templateID, templateParms, userID)
      .then(response => {
        console.log('Email enviado com sucesso!', response);
        toast.success('Email enviado com sucesso!');
        setEmail('');
      })
      .catch(error => {
        console.error('Erro ao enviar o email:', error);
        toast.error(
          'Erro ao enviar o email. Por favor, tente novamente mais tarde.',
        );
      });
  };

  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-md">
        Vamos criar algo incrível juntos! Inscreva-se agora para começarmos.
      </p>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="relative flex items-center justify-center px-4 py-2 overflow-hidden font-medium duration-300 border border-b-4 rounded-md outline-none whitespace-nowrap bg-neutral-900 text-neutral-400 border-neutral-400 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group"
        >
          <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Inscreva-se
        </button>
      </form>
      <ToastContainer position="bottom-center" />
    </Block>
  );
};

export default EmailBlock;
