import { post } from "./authService";

// For just 1 img
export const fileChange = (e) => {
    
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    return post('/photos', uploadData)

}

// For multiple imgs
export const multiFileChange = async (e) => {
   
    try {
        let photoPromises = [...e.target.files].map((file) => {
            const uploadData = new FormData();
    
            uploadData.append("image", file);
        
            return post('/photos', uploadData)
        })

        let results = await Promise.allSettled(photoPromises)

        let array = results.map((response) => response.value.data.image)

        return array

    } catch(err) {
        console.log("Error uploading photos", err)
    }

}