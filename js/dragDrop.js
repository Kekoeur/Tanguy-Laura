let dropArea = document.getElementById('drop-area');
let Allfiles;
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
	e.preventDefault()
	e.stopPropagation()
  }
;['dragenter', 'dragover'].forEach(eventName => {
	dropArea.addEventListener(eventName, highlight, false)
  })
  
;['dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, unhighlight, false)
  })
  
  function highlight(e) {
	dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
	dropArea.classList.remove('highlight')
  }

  dropArea.addEventListener('drop', handleDrop, false)

  function handleDrop(e) {
	let dt = e.dataTransfer
	let files = dt.files
  
	handleFiles(files)
  }

  function previewFile(file) {
	let reader = new FileReader()
	reader.readAsDataURL(file)
	reader.onloadend = function() {
	  let img = document.createElement('img')
	  img.src = reader.result
	  document.getElementById('preview').appendChild(img)
	}
  }

  let filesDone = 0
  let filesToDo = 0;
  let progressBar = document.getElementById('progress-bar')

  function initializeProgress(numfiles) {
	progressBar.value = 0
	filesDone = 0
	filesToDo = numfiles
  }
  
  function progressDone() {
	filesDone++
	progressBar.value = filesDone / filesToDo * 100
  }

  function handleFiles(files) {
	files = [...files]
	initializeProgress(files.length) // <- Add this line
	
	files.forEach(previewFile)
	Allfiles = files;
  }

  let uploadProgress = []

  function initializeProgress(numFiles) {
	progressBar.value = 0
	uploadProgress = []
  
	for(let i = numFiles; i > 0; i--) {
	  uploadProgress.push(0)
	}
  }
  
  function updateProgress(fileNumber, percent) {
	uploadProgress[fileNumber] = percent
	let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
	progressBar.value = total
  }

  function uploadFile(file, i) { // <- Add `i` parameter
	var url = './php/add_files.php'
	var xhr = new XMLHttpRequest()
	var formData = new FormData()
	formData.set('submit', submit)
	xhr.open('get', url, true)
  
	// Add following event listener
	xhr.upload.addEventListener("progress", function(e) {
	  updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
	})
  
	xhr.addEventListener('readystatechange', function(e) {
	  if (xhr.readyState == 4 && xhr.status == 200) {
		// Done. Inform the user
	  }
	  else if (xhr.readyState == 4 && xhr.status != 200) {
		// Error. Inform the user
	  }
	})
	formData.append('file', file)
	xhr.send(formData)
  }


  let submitElt = document.getElementById('submit');
  submitElt.addEventListener('click', ()=>{
	console.log(Allfiles);  
	Allfiles.forEach(uploadFile)
	Allfiles = "";
	removeAllChildNodes(document.getElementById('preview'));
	document.getElementById('close-modal').click();
	
})
  
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}