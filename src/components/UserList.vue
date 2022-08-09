// <template>
//     <div>
//         <a href="/UserForm" role="button">新規作成</a>
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>名前</th>
//                     <th>性別</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr v-for="user in users" v-bind:key="user.id">
//                     <td>{{ user.name }}</td>
//                     <td>{{ user.gender }}</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
// </template>

// <script>
// import USERS from './components/USERS.js'
// export default {
//     data () {
//         return {
//             users: USERS
//         }
//     },
//     methods: {

//     }
// }
// </script>

// <style scoped>

// </style>