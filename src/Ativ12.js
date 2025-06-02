// src/Ativ12.js
import React, { useState } from 'react';
import FormQuiz from './FormQuiz';
import FormTicket from './FormTicket';
import Accordion from './Accordion';
import ContactList from './ContactList';
import Chat from './Chat';

export default function Ativ12() {
  // quando o usuário clica num contato, guardamos o e-mail (ou ID) para passar ao <Chat>
  const [emailSelecionado, setEmailSelecionado] = useState(null);

  return (
    <div className="container mt-4">
      <h1>Atividade – Gerenciamento de Estado</h1>

      <section className="mb-5">
        <h2>1) Formulário de Quiz</h2>
        <FormQuiz />
      </section>

      <section className="mb-5">
        <h2>2) Formulário de Ticket</h2>
        <FormTicket />
      </section>

      <section className="mb-5">
        <h2>3) Accordion</h2>
        <Accordion />
      </section>

      <section className="mb-5">
        <h2>4) Lista de Contatos & Chat</h2>
        <div className="row">
          <div className="col-md-4">
            <ContactList onSelectEmail={setEmailSelecionado} selectedEmail={emailSelecionado} />
          </div>
          <div className="col-md-8">
            {emailSelecionado ? (
              // forçamos recriação de <Chat> sempre que o email mudar (key={emailSelecionado})
              <Chat key={emailSelecionado} email={emailSelecionado} />
            ) : (
              <p className="text-muted">Selecione um contato para iniciar o chat.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
