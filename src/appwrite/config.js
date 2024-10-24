import conf from "./conf";
import { Client, Account, ID, Databases, Storage, Query} from "appwrite";


export class Config {
    client = new Client();
    account;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client)
        this.bucket = new Storage (this.client)
            
    }

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId, 
                ID.unique(), 
                file
            );
            return response;
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            throw error
        }
    };

    async storeFileMetadata(title, price, discountOption, discPrice, images, description, category, subCategory ) {
        try {
            const metadata = await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                ID.unique(),
                {
                    title: title,
                    price: price,
                    discountOption: discountOption,
                    discPrice: discPrice,
                    images: images,
                    description: description,
                    category: category,
                    subCategory: subCategory
                }
            );
            // console.log(metadata);
            return metadata;
        } catch (error) {
            console.log("Appwrite service :: storeFileMetadata :: error", error);
            throw error
        }
    };

    // async uploadFileWithCategory(file, productName, decription, discountOption, actPrice, discPrice, categoryOne, categoryTwo) {
    //     try {
    //         const fileResponse = await this.uploadFile(file); // Upload file
    //         if (fileResponse) {
    //             const metadata = await this.storeFileMetadata(fileResponse.$id, productName, decription, discountOption, actPrice, discPrice, categoryOne, categoryTwo); // Store category metadata
    //             console.log("File and metadata stored successfully:", metadata);
    //         }
    //     } catch (error) {
    //         console.log("Appwrite service :: uploadFileWithCategory :: error", error);
    //         throw error
    //     }
    // };

    async uploadFileWithCategory(title, price, discountOption, discPrice, images, description, category, subCategory) { 
        try {
            // Array to hold the file IDs
            const imageIds = [];
    
            // Upload each file and collect its ID
            for (const file of images) {
                const fileResponse = await this.uploadFile(file);
                if (fileResponse) {
                    imageIds.push(fileResponse.$id); // Store the file ID
                }
            }
    
            // Store metadata with the array of file IDs
            const metadata = await this.storeFileMetadata(
                title, // Pass the array of file IDs
                price,
                discountOption,
                discPrice,
                imageIds,
                description,
                category,
                subCategory
            );
    
            console.log("File and metadata stored successfully:", metadata);
            return metadata;
        } catch (error) {
            console.log("Appwrite service :: uploadFileWithCategory :: error", error);
            throw error;
        }
    }

    async getproductsforCategories(category) {
        try {
            const productforCategories = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal('category', category)] 
            );
            return productforCategories;
        } catch (error) {
            console.log("Appwrite service :: getproductsforCategories :: error", error);
            throw error;
        }
    }

    async getproductsforsubCategories(subCategory) {
        try {
            const productforsubCategories = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal('subCategory', subCategory)] 
            );
            return productforsubCategories;
        } catch (error) {
            console.log("Appwrite service :: getproductsforsubCategories :: error", error);
            throw error;
        }
    }

    async getAllCategories() {
        try {
            const allDocuments = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            );
            // Extract unique categories from the documents
            const categories = [...new Set(allDocuments.documents.map(doc => doc.category))];
            return categories;
        } catch (error) {
            console.log("Appwrite service :: getAllCategories :: error", error);
            throw error;
        }
    }
}

const config = new Config ();
export default config


