import UserList from '../components/UserList.vue'
import Router from 'router'
import { VueElement } from 'vue'

VueElement.use(Router)

export const routes = [{
    path: '/UserList',
    name: 'UserList',
    components: UserList
}]