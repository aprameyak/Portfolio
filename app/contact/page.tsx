export const metadata = {
  title: 'Contact',
  description: 'Get in touch',
};

export default function ContactPage() {
  return (
    <main className="soft-page pt-24 p-6">
      <div className="mx-auto max-w-xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Contact</h1>
        </header>

        <ContactModal />

        <section className="mt-8 rounded-xl border border-primary/10 bg-surface p-6 shadow-md shadow-primary/10 text-center">
          <p>
            <span className="text-text-muted">Email</span>
            <br />
            <a href="mailto:aprameyakannan@gmail.com" className="text-primary-light hover:underline">aprameyakannan@gmail.com</a>
          </p>
          <p className="mt-3">
            <span className="text-text-muted">Location</span>
            <br />Plainsboro, NJ
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <a href="https://github.com/aprameyak" target="_blank" rel="noreferrer" className="text-primary-light hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/aprameyak" target="_blank" rel="noreferrer" className="text-primary-light hover:underline">LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
}

import ContactModal from './ContactModal';


