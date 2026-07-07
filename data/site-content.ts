export const siteContent = {
  professional: {
    name: "Dott.ssa Beatrice Teofilo",
    initials: "BT",
    role: "Psicologa",
    registration: "Iscrizione all'Albo: inserire numero e ordine regionale",
    location: "Via Roma 1, Rutigliano",
    city: "Rutigliano",
    phone: "+39 000 000 0000",
    email: "nome.cognome@email.it",
    online: "Colloqui in studio e online",
  },
  seo: {
    description:
      "Colloqui psicologici in studio e online per ansia, stress, difficoltà relazionali e momenti di cambiamento.",
  },
  navigation: [
    { label: "Chi sono", href: "#chi-sono" },
    { label: "Percorsi", href: "#percorsi" },
    { label: "Metodo", href: "#metodo" },
    { label: "Dove ricevo", href: "#dove" },
    { label: "Contatti", href: "#contatti" },
  ],
  hero: {
    title: "Quando qualcosa pesa, puoi parlarne in uno spazio sicuro",
    text: "Colloqui psicologici in studio e online per attraversare ansia, stress, difficoltà relazionali e momenti di cambiamento.",
    primaryCta: "Fissa un primo colloquio",
    secondaryCta: "Come si svolge il percorso",
  },
  intro: {
    title: "Accolgo la tua storia con ascolto, metodo e rispetto dei tuoi tempi",
    text: "Nel primo incontro mettiamo a fuoco cosa stai vivendo, cosa desideri comprendere e quale forma di supporto può esserti utile.",
  },
  sections: {
    help: {
      label: "Percorsi",
      title: "Puoi chiedere supporto quando senti che qualcosa merita attenzione",
      text: "Non serve arrivare con parole perfette. Possiamo partire da ciò che oggi ti pesa di più e costruire insieme un modo più chiaro per guardarlo.",
    },
    method: {
      label: "Metodo",
      title: "Un percorso chiaro fin dal primo incontro",
      text: "Prima di iniziare definiamo il motivo della richiesta, gli obiettivi possibili e il modo di lavorare più adatto alla tua situazione.",
    },
    location: {
      label: "Dove ricevo",
      title: "Colloqui in studio e online",
      text: "Ricevo in uno spazio riservato e dedicato. Quando è indicato, è possibile svolgere il percorso anche online.",
    },
    faq: {
      label: "Domande frequenti",
      title: "Prima di iniziare può essere utile chiarire qualche dubbio",
    },
    contact: {
      label: "Contatti",
      title: "Scrivimi per fissare un primo colloquio",
      text: "Puoi inviarmi un messaggio breve indicando il motivo del contatto, la preferenza tra studio e online e le fasce orarie più comode.",
    },
  },
  helpAreas: [
    {
      title: "Ansia e stress",
      text: "Quando tensione, pensieri ricorrenti o stanchezza mentale rendono le giornate più faticose.",
    },
    {
      title: "Relazioni e confini",
      text: "Per comprendere dinamiche che si ripetono, bisogni non detti e modi più chiari di stare in relazione.",
    },
    {
      title: "Autostima e scelte",
      text: "Per dare più spazio ai tuoi bisogni, riconoscere risorse e scegliere con maggiore fiducia.",
    },
    {
      title: "Cambiamenti di vita",
      text: "Quando una transizione, una perdita o un nuovo inizio richiede tempo per essere compreso.",
    },
  ],
  method: [
    {
      step: "01",
      title: "Primo colloquio",
      text: "Ascolto la tua richiesta, raccogliamo le informazioni essenziali e valutiamo se iniziare un percorso.",
    },
    {
      step: "02",
      title: "Obiettivi condivisi",
      text: "Definiamo insieme obiettivi realistici, rivedibili nel tempo e coerenti con ciò che stai attraversando.",
    },
    {
      step: "03",
      title: "Percorso su misura",
      text: "Lavoriamo su pensieri, emozioni e comportamenti per trasformare la comprensione in scelte praticabili.",
    },
  ],
  faq: [
    {
      question: "Posso fare colloqui online?",
      answer:
        "Sì. Il percorso può svolgersi online quando questa modalità è adatta alla situazione e sostenibile per te.",
    },
    {
      question: "Quanto dura un percorso?",
      answer:
        "La durata dipende dalla richiesta, dagli obiettivi e dal ritmo del lavoro. Viene rivalutata insieme durante il percorso.",
    },
    {
      question: "Il primo contatto è impegnativo?",
      answer:
        "No. Il primo messaggio serve a capire se e come iniziare, ricevere informazioni pratiche e scegliere con maggiore consapevolezza.",
    },
  ],
};

export type SiteContent = typeof siteContent;
