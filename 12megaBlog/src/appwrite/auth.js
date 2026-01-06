import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js"

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setProject(conf.appwriteProjectId)// Your project ID
            .setEndpoint(conf.appwriteUrl);

        this.account=new Account(this.client);
    }
    // create account
    createAccount=async({email,password,name})=>{
        try {
            const userAccount= await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                userName:name
            });
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    // login
    login=async({email,password})=>{
        try {
            return await this.account.createEmailPasswordSession({
                email:email,
                password:password
            })
        } catch (error) {
            throw error;
        }
    }
    // to get current user
    getCurrentUser=async()=>{
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        
    }
    // logout
    logout=async()=>{
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}


const authService=new AuthService();

export default authService;