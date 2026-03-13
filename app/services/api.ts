import axios, { AxiosProgressEvent } from "axios"
import { SeoData } from "@/types/seo"

export const uploadImage = async (
  file: File,
  describe?: string,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
): Promise<SeoData> => {

  const formData = new FormData()
  formData.append("image", file)
  if (describe?.trim()) {
    formData.append("describe", describe.trim())
  }

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