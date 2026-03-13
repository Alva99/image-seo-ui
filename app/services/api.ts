import axios, { AxiosProgressEvent } from "axios"
import { SeoData } from "@/types/seo"

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp"
])

const ALLOWED_IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp"])

const getFileExtension = (filename: string) => {
  const chunks = filename.toLowerCase().split(".")
  return chunks.length > 1 ? chunks.pop() : ""
}

const validateUploadFile = (file: File) => {
  const extension = getFileExtension(file.name)
  const typeAllowed = !!file.type && ALLOWED_IMAGE_TYPES.has(file.type)
  const extensionAllowed = !!extension && ALLOWED_IMAGE_EXTENSIONS.has(extension)

  if (!typeAllowed && !extensionAllowed) {
    throw new Error("Formato no soportado. Usa JPG, JPEG, PNG o WEBP.")
  }
}

export const uploadImage = async (
  file: File,
  describe?: string,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
): Promise<SeoData> => {

  validateUploadFile(file)

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