import axios from "axios"
import { SeoData } from "@/types/seo"

export const uploadImage = async (
  file: File,
  onUploadProgress?: (progressEvent: any) => void
): Promise<SeoData> => {

  const formData = new FormData()
  formData.append("image", file)

  const response = await axios.post<SeoData>(
    "https://n61sm9kwu9.execute-api.us-east-1.amazonaws.com/dev/optimize",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    }
  )

  return response.data
}