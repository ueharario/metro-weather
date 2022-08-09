import UserList from '../views/UserList.vue'

const routes = [{
    path: '/',
    name: 'UserList',
    components: UserList
},
{
    path: '/UserForm',
    name: 'UserForm',
    components: () => import('../views/UserForm.vue')
}]