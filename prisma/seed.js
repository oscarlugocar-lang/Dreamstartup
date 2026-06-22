const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const LEADS = [
  { name: 'Creator LA, US', email: null, platform: 'Upwork', source: 'Upwork', budget: '20', status: 'lead', notes: 'Viral YouTube Shorts & Ad Video Editor' },
  { name: 'Creator PAK', email: null, platform: 'Upwork', source: 'Upwork', budget: '100', status: 'lead', notes: 'Professional YouTube Video Editor' },
  { name: 'SaaS startup', email: null, platform: 'Upwork', source: 'Upwork', budget: null, status: 'lead', notes: 'SaaS Demo Video Editor (hourly)' },
  { name: 'Brand (sin nombre)', email: null, platform: 'Upwork', source: 'Upwork', budget: '400', status: 'lead', notes: 'Vertical / Reel Video Editor (12 reels)' },
  { name: 'Brand ropa', email: null, platform: 'PeoplePerHour', source: 'PPH', budget: '696', status: 'lead', notes: 'Marketing clothing brand (foto+video)' },
  { name: 'Creator PPH', email: null, platform: 'PeoplePerHour', source: 'PPH', budget: null, status: 'lead', notes: 'Looking for video editor ($100/semana)' },
  { name: 'NLP Coach Portugal', email: null, platform: 'Freelancer', source: 'Freelancer', budget: '75', status: 'lead', notes: 'Transform Retreat Footage Into Reels' },
  { name: 'Boxing Championship Suiza', email: null, platform: 'Freelancer', source: 'Freelancer', budget: '75', status: 'lead', notes: 'Promo video evento' },
];

async function main() {
  console.log('Seeding leads...');
  for (const lead of LEADS) {
    const existing = await prisma.client.findFirst({ where: { name: lead.name } });
    if (existing) {
      await prisma.client.update({ where: { id: existing.id }, data: lead });
    } else {
      await prisma.client.create({ data: lead });
    }
  }
  console.log(`Seeded ${LEADS.length} leads`);

  const existing = await prisma.followUp.count();
  if (existing === 0) {
    console.log('Seeding follow-ups...');
    const now = new Date();
    await prisma.followUp.createMany({
      data: [
        { clientName: 'Brand ropa', platform: 'PeoplePerHour', proposalFile: '2026-06-17-pph-brand-ropa-propuesta.md', sentAt: now, followUpAt: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000), status: 'pending' },
        { clientName: 'SaaS Demo', platform: 'Upwork', proposalFile: '2026-06-17-upwork-saas-demo-propuesta.md', sentAt: now, followUpAt: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000), status: 'pending' },
        { clientName: 'Reel Editor', platform: 'Upwork', proposalFile: '2026-06-09-upwork-reel-editor-propuesta.md', sentAt: now, followUpAt: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000), status: 'pending' },
      ],
    });
    console.log('Seeded 3 follow-ups');
  } else {
    console.log(`Follow-ups already seeded: ${existing}`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
