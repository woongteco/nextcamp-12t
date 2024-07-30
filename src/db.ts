import {Profile} from "@/lib/schema";

const Model = {
    "profile":Profile,
    "study":Study,
    "mypage":Mypage
}

export const saveDocument = async (collection:string, data:object)=>{
    const model = new Model[collection](data)
    await model.save()
}

export const updateDocument = async(collection:string,id:string,data:object)=>{
    const model = Model[collection].findOne(id)
    Object.keys(data).map(k=>{
        model[k]=data[k]
    })
    await model.save()
}

const profileAction = async (data)=>{
    await saveDocument("profile",data)
}
const studyAction = async(data)=>{
    await saveDocument("study",data)
}
