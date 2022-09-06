export const resolveRoutes = (route:string) => {
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`;
};