import { uploaderAPI } from "../config/apiService"

export const api = {
    // Upload image
    uploader: (body) => {
        return uploaderAPI.post("dbqsoenus/image/upload", body)
    }
}