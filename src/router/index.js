import { UserList } from './UserList.vue'
import { UserForm } from './UserForm.vue'

const routes = [{
    path: './UserList.vue',
    name: 'UserList',
    components: UserList
},
{
    path: './UserForm.vue',
    name: 'UserForm',
    components: UserForm
}]

export {
    routes
}