const PROJECT = '8f5dbea3-1d79-4804-8cc2-978b19ea613e';
const query = `{ project(id: "${PROJECT}") { services { id name domains { domain } } } }`;

fetch('https://backboard.railway.app/graphql/v2', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
})
  .then(r => r.json())
  .then(d => {
    if (d.data?.project?.services) {
      d.data.project.services.forEach(s => {
        const domain = s.domains?.[0]?.domain || 'no domain yet';
        console.log(`${s.name}: ${domain}`);
      });
    } else {
      console.log('No services found or auth required');
      console.log(JSON.stringify(d, null, 2));
    }
  })
  .catch(e => console.log('Error:', e.message));
