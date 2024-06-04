import React, { useState } from 'react'

function FileInput({ onFileSelect }) {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = event => {
		const file = event.target.files[0]
		if (file) {
			setSelectedFile(file)
			onFileSelect(file)
		}
	}

	return (
		<div className='file-input'>
			<label className='block text-sm font-medium text-gray-700'>Choose picture:</label>
			<div className='mt-1 flex items-center'>
				<input
					type='file'
					onChange={handleFileChange}
					className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
				/>
			</div>
			{selectedFile && (
				<div className='mt-2'>
					<p className='text-sm text-gray-700'>Selected file: {selectedFile.name}</p>
				</div>
			)}
		</div>
	)
}

export default FileInput
