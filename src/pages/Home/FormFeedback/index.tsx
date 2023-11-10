import { useState } from "react";
import { Input } from "../../../components/Input";
import { TextArea } from "../../../components/TextArea";

import { Title } from "./styles";
import { FormGroup } from "../../../components/FormGroup";
import { Rating } from "../../../components/Rating";
import { Button } from "../../../components/Button";

export function FormFeedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nota, setNota] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmitForm(e:any) {
    e.preventDefault()
    console.log({
      status: 'Form enviado',
      dados: {
        name,
        message,
        nota
      }
    })
  }


  return(
    <div>
      <header>
        <Title className="title">Deixa seu feedback</Title>
      </header>
      <main id="form">
        <form noValidate aria-label="formulário de feedback" onSubmit={handleSubmitForm}>
          <FormGroup>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              spellCheck="false" 
              label="Seu nome:"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup aria-label="nota de 1 a 5">
            <Rating label="Sua nota:" value={nota} setValue={setNota} />
          </FormGroup>
          <FormGroup>
            <TextArea 
              label="Sua mensagem:"
              id="message" 
              name="menssage" 
              spellCheck="false" 
              onChange={(e) => setMessage(e.target.value)} 
              value={message} 
            />
          </FormGroup>
          <Button id="sendFeedback" type="submit" className="btn" aria-label="Enviar pesquisa">Enviar</Button>
        </form>
      </main>
    </div>
  )
}