import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';

export function FormContact() {
  return (
    <section>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </section>
  );
}
