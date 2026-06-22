const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const all = await prisma.client.findMany({ where: { status: 'lead' }, orderBy: { createdAt: 'asc' } });
  const seen = new Set();
  let deleted = 0;
  for (const lead of all) {
    if (seen.has(lead.name)) {
      await prisma.client.delete({ where: { id: lead.id } });
      deleted++;
      console.log(`Deleted duplicate: ${lead.name} (${lead.id})`);
    } else {
      seen.add(lead.name);
    }
  }
  console.log(`Done. ${deleted} duplicates removed. ${seen.size} unique leads remain.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
