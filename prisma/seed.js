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
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
