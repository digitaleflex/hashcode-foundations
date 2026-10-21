import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hashcode-foundations.vercel.app',
  integrations: [
    starlight({
      title: 'HashCode Foundations',
      description: 'Le socle informatique pour entrer dans la cybersécurité.',
      defaultLocale: 'fr',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },
      social: {
        github: 'https://github.com/digitaleflex/hashcode-foundations',
      },
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