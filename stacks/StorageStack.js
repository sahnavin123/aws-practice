import {Table, Bucket} from "@serverless-stack/resources"

export function StorageStack({stack, app}){
    //creating the dynamoDb table

    const bucket = new Bucket(stack, "Uploads");

    const table = new Table(stack, "Notes", {
        fields:{
            userId : "string",
            noteId: "string",
        },
        primaryIndex:{partitionKey:"userId", sortKey:"noteId"},
    });

    return {
        table,bucket,
    };
}