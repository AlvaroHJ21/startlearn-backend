import { AppRoutes } from '@/presentation/routes';
import { Server } from '@/presentation/server';
import { envs } from './config';

(async function () {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}
