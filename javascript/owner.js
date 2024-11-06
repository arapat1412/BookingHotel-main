// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function resetForm(tenForm) {
  document.getElementById(tenForm).reset();
}

// Lấy ngày hôm nay
const today = new Date();
// Định dạng ngày dưới dạng yyyy-mm-dd cho input date
const formattedDate = today.toISOString().split('T')[0];
// Gán giá trị cho input date
const inputNgay = document.getElementsByClassName('form-control');
inputNgay[0].value = formattedDate;
inputNgay[1].value = formattedDate;


function displayAnh(event, elementId, insertBeforeTage) {
  const displayRoomImage = document.getElementById(elementId);
  const fileInput = event.target;
  const insertBeforeT = document.getElementById(insertBeforeTage);

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const newDivImage = document.createElement("div");
      newDivImage.className = "image-container";

      const newButtonClose = document.createElement("button");
      newButtonClose.setAttribute("type", "button");
      newButtonClose.className = "btn-close";
      newButtonClose.setAttribute("aria-label", "Close");
      newButtonClose.setAttribute("onclick", "removeImage(this)");

      const newImage = document.createElement("img");
      newImage.src = e.target.result;
      newImage.alt = "ảnh không tồn tại";
      newImage.className = "add-image-room m-1";


      newDivImage.appendChild(newButtonClose);
      newDivImage.appendChild(newImage);

      displayRoomImage.insertBefore(newDivImage, insertBeforeT);
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
}

function removeImage(button) {
  // Tìm phần tử cha chứa hình ảnh và nút
  var imageContainer = button.parentElement;
  // Xóa phần tử cha khỏi DOM
  imageContainer.remove();
}

function displaySelectedImage(event, elementId) {
  const selectedImage = document.getElementById(elementId);
  const fileInput = event.target;

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      selectedImage.src = e.target.result;
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
}

// Lấy tất cả các mục trong dropdown
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Gắn sự kiện click vào từng mục dropdown
dropdownItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn không cho chuyển hướng nếu có href="#"

    // Lấy nút dropdown chứa mục đã chọn
    const dropdown = this.closest('.dropdown');
    const dropdownButton = dropdown.querySelector('.dropdown-toggle');

    // Lấy nội dung của mục được chọn
    const selectedText = this.textContent.trim();

    // Đổi nội dung của nút thành nội dung mục được chọn
    dropdownButton.textContent = selectedText;

    // Đổi màu nút dựa trên mục được chọn
    switch (selectedText) {
      case 'Chờ Duyệt':
        dropdownButton.className = 'btn btn-danger dropdown-toggle btn-sm';
        break;
      case 'Confirmed':
        dropdownButton.className = 'btn btn-info dropdown-toggle btn-sm';
        break;
      case 'Đã Nhận':
        dropdownButton.className = 'btn btn-primary dropdown-toggle btn-sm';
        break;
      case 'Hoàn Thành':
        dropdownButton.className = 'btn btn-success dropdown-toggle btn-sm';
        break;
      default:
        break;
    }
  });
});

