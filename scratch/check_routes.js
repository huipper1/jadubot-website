const http = require('http');

const routes = [
  '/',
  '/service',
  '/pricing',
  '/cpa-marketing-automation',
  '/blog',
  '/faq',
  '/about',
  '/contact',
  '/affiliate',
  '/book-a-free-demo',
  '/ticket',
  '/refund'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${route}`, (res) => {
      resolve({ route, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ route, error: err.message });
    });
  });
}

async function run() {
  for (const route of routes) {
    const res = await checkRoute(route);
    console.log(`${res.route.padEnd(30)} => ${res.status || res.error}`);
  }
}

run();
