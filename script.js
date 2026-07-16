function readButtonsClicked(element) {
  if (element.innerText == "Yes") {
    element.innerText = "No";
    element.style.backgroundColor = "red";
  } else if ((element.innerText = "No")) {
    element.innerText = "Yes";
    element.style.backgroundColor = "green";
  }
}
function readButtons() {
  let readBtns = document.getElementsByClassName("bookReadBtn");
  for (let i = 0; i < readBtns.length; i++) {
    if (readBtns[i].innerText == "Yes") {
      readBtns[i].style.backgroundColor = "green";
    } else {
      readBtns[i].style.backgroundColor = "red";
    }

    readBtns[i].addEventListener("click", () => {
      readButtonsClicked(readBtns[i]);
    });
  }
}

const booksDiv = document.getElementById("booksDiv");
let bookID = 4;

function addBook(title, author, pages, read) {
  const newBook = document.createElement("div");
  newBook.className = "book";
  newBook.id = bookID;
  bookID = bookID + 1;

  const newTitle = document.createElement("h2");
  newTitle.className = "bookTitle";
  newTitle.innerText = title;
  newBook.append(newTitle);

  const newAuthor = document.createElement("h2");
  newAuthor.className = "bookAuthor";
  newAuthor.innerText = "Author: " + author;
  newBook.append(newAuthor);

  const newPages = document.createElement("h2");
  newPages.className = "bookPages";
  newPages.innerText = "Pages: " + pages;
  newBook.append(newPages);

  const newRead = document.createElement("div");
  newRead.className = "bookRead";
  const readText = document.createElement("h2");
  readText.innerText = "Read: ";
  newRead.append(readText);
  const readButton = document.createElement("button");
  readButton.className = "bookReadBtn";
  readButton.innerText = read;
  newRead.append(readButton);
  const removeBtn = document.createElement("button");
  removeBtn.className = "bookRemove";
  removeBtn.innerText = "Remove";
  newRead.append(removeBtn);
  newBook.append(newRead);

  booksDiv.append(newBook);
}

const addBtn = document.getElementById("addBtn");
const form = document.getElementById("inputWindow");
const submit = document.getElementById("addBookBtn");

addBtn.addEventListener("click", () => {
  form.style.display = "flex";
});

submit.addEventListener("click", () => {
  const inputTitle = document.getElementById("addTitle");
  const inputAuthor = document.getElementById("addAuthor");
  const inputPages = document.getElementById("addPages");

  addBook(inputTitle.value, inputAuthor.value, inputPages.value, "No");
  form.style.display = "none";
  readButtons();
  removeButtonsWork();
});

readButtons();

function removeBook(id) {
  const foundBook = document.getElementById(id);
  foundBook.remove();
}

const removeButtons = document.getElementsByClassName("bookRemove");

function removeButtonsWork() {
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => {
      console.log(removeButtons[i]);
      console.log(removeButtons[i].parentElement.parentElement.id);
      removeBook(removeButtons[i].parentElement.parentElement.id);
    });
  }
}
removeButtonsWork();
