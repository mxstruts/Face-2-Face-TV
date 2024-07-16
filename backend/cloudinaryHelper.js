// cloudinaryHelper.js
import cloudinary from './cloudinaryConfig.js'

export const uploadToCloudinary = fileBuffer => {
	return new Promise((resolve, reject) => {
		const uploadStream = cloudinary.uploader.upload_stream(
			{ resource_type: 'image' },
			(error, result) => {
				if (error) {
					reject(error)
				} else {
					resolve(result.secure_url)
				}
			}
		)
		uploadStream.end(fileBuffer)
	})
}
