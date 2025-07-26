import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../config/config.js"

export class DataService{
    client = new Client
    database;
    storage;


    constructor(){
        this.client
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.project_id)
    this.database = new Databases(this.client)
    this.storage = new Storage(this.client)
    }

    async createPost({title, content, featuredImage, userID, id, status}){
        try {
            return await this.database.createDocument(
                conf.database_id,
                conf.collection_id,
                id,
                {
                    title,
                    content, 
                    userID,
                    status,
                    featuredImage
                }
            )
        } catch (error) {
            console.log("error in creating post",error)
            return false
        }
    }

    async updatePost({id, title, content, featuredImage, userID, status}){
        try {
            await this.database.updateDocument(
                conf.database_id,
                conf.collection_id,
                id,
                {
                    title,
                    content, 
                    userID,
                    status,
                    featuredImage
                }
            )
        } catch (error) {
            console.log("error in updating post", error);
            return false
            
        }
    }

    async deletePost({id}){
        try {
            await this.database.deleteDocument(
                conf.database_id,
                conf.collection_id,
                id
            )
        } catch (error) {
            console.log("error in deleting post",error);
            return false
            
        }
    }

    async upsertPost({title, content, featuredImage, userID, id, status}){
        try {
            return await this.database.upsertDocument(
                conf.database_id,
                conf.collection_id,
                id,
                {
                    title,
                    content, 
                    userID,
                    status,
                    featuredImage
                }
            )
        } catch (error) {
            console.log("error in creating post",error)
            return false
        }
    }

    async getPost(id){
        try {
            return await this.database.getDocument(
                conf.database_id,
                conf.collection_id,
                id
            )
        } catch (error) {
            console.log("error in getting post",error);
            
        }
    }
    
    async listPosts(query = [Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                conf.database_id,
                conf.collection_id,
                query
            )
        } catch (error) {
            console.log("error in getting post",error);
            
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.bucket_id,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error in uploading file", error);
            
        }
    }

    async deleteFile(fileID){
        try {
            return await this.storage.deleteFile(
                conf.bucket_id,
                fileID
            )
        } catch (error) {
            console.log("error in deleting file",error);
            
        }
    }

    async getFilePreview(fileID){
        try {
            return this.storage.getFilePreview(
                conf.bucket_id,
                fileID
            )
        } catch (error) {
            console.log("error in prviewing file",error);
            
        }
    }


}

const databaseService = new DataService()   
export default databaseService