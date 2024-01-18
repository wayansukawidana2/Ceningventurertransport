function fileValidation() {
    var fileInput = document.getElementById('foto');
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        document.getElementById('preview').src = 'no image.jpg';
        return false;
    }
}