import React from "react";
import auth from "@react-native-firebase/auth";
import fireStore from "@react-native-firebase/firestore";
import imageStorage from "@react-native-firebase/storage";


export async function textData(obj) {
  var id = "asad"//auth().currentUser.getIdToken();
  console.log(id);
  console.log(obj);
  try{
  await fireStore().collection('UserDetail').doc(id).set(obj);
  }
  catch(error)
  {
      console.log(error);
  }
}
export async function uploadImage(source){
    var id="asad"//auth().currentUser.getIdToken();
    console.log(source.uri);
    const {uri} = source;
    var reference=imageStorage().ref(id);
    try{
    await reference.putFile(uri);
    }
    catch(error)
    {
        console.log(error);
    }
}


