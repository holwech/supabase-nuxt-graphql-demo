export default defineNuxtRouteMiddleware((to) => {
    useState('routeParamId', () => to.params.id)
    useState('routeParamUser', () => to.params.user)
})