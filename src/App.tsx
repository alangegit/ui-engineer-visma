import { useState } from "react";

import Title from "./components/Title";
import Text from "./components/Text";
import SubTitle from "./components/SubTitle";
import Card from "./components/Card";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

import "./index.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <>
      <section className="bg-indigo-950 min-h-screen p-20">
        <Card>
          <form id="signup-form">
            <div className="grid gap-2 mb-6">
              <Title>Application form</Title>
              <Text>
                Now receiving English speaking applicants based in Europe
              </Text>
            </div>
            <div className="mb-2">
              <SubTitle>Input your information</SubTitle>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                id="first-name"
                label="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextInput
                id="last-name"
                label="Surname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-8">
              <TextInput
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Checkbox
                id="acceptTerms"
                label="By submitting this application you acknowledge that you are based in Europe, fluent in English and available to start within 90 days"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
            </div>
            <Button type="submit" disabled>
              Submit application
            </Button>
          </form>
        </Card>
      </section>
    </>
  );
}

export default App;
