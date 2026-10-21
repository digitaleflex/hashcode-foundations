import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'HashCode Foundations',
      description: 'Le socle informatique pour entrer dans la cybersécurité.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/digitaleflex/hashcode-foundations',
        },
      ],
      sidebar: [
        {
          label: 'Commencer ici',
          items: [
            { label: 'Bienvenue', slug: 'index' },
            { label: 'Parcours pédagogique', slug: 'parcours-pedagogique' },
            { label: 'Quiz de positionnement', slug: 'evaluation/quiz-positionnement' },
          ],
        },
        {
          label: 'Les fondamentaux',
          items: [
            { label: '01 · Bases de l’informatique', slug: 'fondamentaux/bases-informatique' },
            { label: '02 · Systèmes d’exploitation', slug: 'fondamentaux/systemes-exploitation' },
            { label: '03 · Réseaux informatiques', slug: 'fondamentaux/reseaux' },
            { label: '04 · Internet et Web', slug: 'fondamentaux/internet-web' },
            { label: '05 · Ligne de commande', slug: 'fondamentaux/ligne-commande' },
            { label: '06 · Sécurité numérique', slug: 'fondamentaux/securite-numerique' },
          ],
        },
        {
          label: 'Ateliers pratiques',
          items: [
            { label: 'Atelier 01 · Explorer son ordinateur', slug: 'ateliers/atelier-01-informatique' },
            { label: 'Atelier 02 · Observer son système', slug: 'ateliers/atelier-02-systeme' },
            { label: 'Atelier 03 · Cartographier un réseau', slug: 'ateliers/atelier-03-reseaux' },
            { label: 'Atelier 04 · Lire une URL', slug: 'ateliers/atelier-04-web' },
            { label: 'Atelier 05 · Premiers pas dans le terminal', slug: 'ateliers/atelier-05-terminal' },
            { label: 'Atelier 06 · Analyser des risques', slug: 'ateliers/atelier-06-securite' },
          ],
        },
        {
          label: 'Références',
          items: [
            { label: 'Glossaire essentiel', slug: 'references/glossaire' },
            { label: 'Règles du laboratoire', slug: 'references/regles-laboratoire' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/digitaleflex/hashcode-foundations/edit/main/src/content/docs/',
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
  ],
});