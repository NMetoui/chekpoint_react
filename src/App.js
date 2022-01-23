import logo from "./logo.svg";
import "./App.css";
import { Button, Form, FormControl, InputGroup, h1 } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Formulaire de participation</h1>
          <Form.Label className="l1" htmlFor="basic-url">
            Contact
          </Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Prénom"
              aria-label="Prénom"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Nom de famille"
              aria-label="Nom de famille"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Numéro de Mobile"
              aria-label="Numéro de Mobile"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <Form.Label className="l1" htmlFor="basic-url">
            Information Personnelle
          </Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Age"
              aria-label="Age"
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          <Form.Select aria-label="Default select example">
            <option>Sexe</option>
            <option value="1">Femme</option>
            <option value="2">Homme</option>
          </Form.Select>
          <Form.Label className="l1" htmlFor="basic-url">
            Pourquoi voulez-vous vous impliquer dans l'organisation ?
          </Form.Label>
          <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Form.Label className="l1" htmlFor="basic-url">
            Choisissez vos activités
          </Form.Label>
          <Form className="act">
            <Form.Check type="switch" id="custom-switch" label="Social" />
            <Form.Check type="switch" id="custom-switch" label="Economie" />
            <Form.Check type="switch" id="custom-switch" label="Sport" />
          </Form>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
