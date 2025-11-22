import { useState } from "react";

import { Button, Title, Text, TextInput, Checkbox } from "../components";

export default function Submission() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <>
      <section className="bg-slate-950 min-h-screen p-6 md:p-20">
        <div className="max-w-xl mx-auto">
          <div className="grid gap-2 bg-sky-100 border-b border-b-slate-900 border-dashed p-8 rounded-t-sm">
            <Title>Application form</Title>
            <Text>For English speaking applicants based in Europe</Text>
          </div>
          <form
            id="signup-form"
            className=" bg-sky-50 rounded-b-sm shadow-md p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <TextInput
                id="first-name"
                label="Name"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextInput
                id="last-name"
                label="Surname"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextInput
                id="email"
                label="Email"
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextInput
                id="profile"
                label="profile"
                placeholder="linkedin url"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              />
            </div>
            <div className="mb-12">
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
        </div>
      </section>
    </>
  );
}
