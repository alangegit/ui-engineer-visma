import { useState } from "react";

import { Button, Title, Text, TextInput, Checkbox } from "../components";

export default function Submission() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    url.trim() &&
    acceptTerms;

  return (
    <>
      <section className="min-h-screen bg-slate-950 p-6 md:p-20">
        <div className="max-w-xl mx-auto">
          <div className="grid gap-2 bg-sky-100 border-b border-b-slate-900 border-dashed p-8">
            <Title>Application form</Title>
            <Text>For English speaking applicants based in Europe</Text>
          </div>
          <form id="signup-form" className=" bg-sky-50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <TextInput
                type="text"
                id="first-name"
                label="Name"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextInput
                type="text"
                id="last-name"
                label="Surname"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextInput
                type="email"
                id="email"
                label="Email"
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextInput
                type="url"
                id="url"
                label="url"
                placeholder="linkedin url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="mb-12">
              <Checkbox
                id="acceptTerms"
                label="By applying, you confirm you’re based in Europe, fluent in English, and able to start within 90 days."
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
            </div>
            <Button type="submit" disabled={!isFormValid}>
              Submit application
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
