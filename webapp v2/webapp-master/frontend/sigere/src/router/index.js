import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login/login'
import Registro from '../components/registro/register'
import Perfil from '../components/perfil/perfil'
import CrearProyecto from '../components/proyecto/crear/CrearProyecto'

Vue.use(Router);

export default new Router({
	routes: [
		{ 
			path: '/',
			name: 'home',
			component: Login,
			/*beforeEnter: (to, from, next) => { 
                delete localStorage.token;
                next();
            }*/
		},
		{
			path: '/home/registro',
			name: 'registro',
			component: Registro
		},
		{
			path: '/menu/perfil',
			name: 'perfil',
			component: Perfil
		},
		{
			path: '/menu/crear-proyecto',
			name: 'crearProyecto',
			component: CrearProyecto
		},
	]
});