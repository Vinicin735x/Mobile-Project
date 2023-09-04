import {api} from"../../api"

// ? significa que os dados abaixo são opcionais

export interface IRegister {
    name?: string
    email?: string
    password?: string
}
export interface IAutenticate {
    email?: string
    password?: string
}
export interface IUser {
    id: number
    name: string
    email: string
}
export interface IUserLogin {
    user: string
   token: {
    token: any
    expires_at:string
   }
}
class UserData {
    register(data: IRegister) {
        return api.post('/register', data)
    }
    login(data:IAutenticate) {
        return api.post<IUserLogin>('/login', data)
    }
}
export default new UserData()