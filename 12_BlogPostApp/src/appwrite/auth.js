import { Client, Account, ID } from "appwrite";
import conf from "../config/config";

export class AuthenticationService {
    Client = new Client();
    account;

    constructor(){
        this.Client
            .setEndpoint(conf.appwrite_url) // Your Appwrite Endpoint
            .setProject(conf.project_id); // Your project ID
        this.account = new Account(this.Client);
    }

    async createUser({name,email,password}){
        try {
            const user = await this.account.create(ID.unique(), email, password, name)
            if(user){
                return this.loginUser(email, password);
            }
            else{
                return user;
            }
        } catch (error) {
            console.log("Can't create user");
            throw error;
        }
    }

    async loginUser({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            console.log("Can't Login");
            throw(error)
        }
    }

    async getUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw(error)
        }
    }

    async logoutUser(){
        try {
            return await this.account.deleteSession(user)
        } catch (error) {
            throw(error)
        }
    }


}

const authService = new AuthenticationService();
export default authService
