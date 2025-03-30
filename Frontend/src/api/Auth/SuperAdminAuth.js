import axios from 'axios'

export default async function SuperAdminAuth(){
    const token = localStorage.getItem('aot-student-login-authorization-token')

    const Response = await axios.post('https://educore-institue-manager.onrender.com/auth/superadmin',{},{
        headers:{
            'aot-student-login-authorization-token':token
        }
    })

    return Response

}