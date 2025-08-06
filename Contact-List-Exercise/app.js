window.addEventListener("load", solve);

function solve() {
    let inputName = document.getElementById("name");
    let inputPhone = document.getElementById("phone");
    let inputCategory = document.getElementById("category");
    const checkListUl = document.getElementById("check-list");
    const contactListUl = document.getElementById("contact-list");
    const addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", handleAddContact);

    function handleAddContact() {
        const name = inputName.value.trim();
        const phone = inputPhone.value.trim();
        const category = inputCategory.value.trim();
        let userNamePEl = document.createElement('p');
        let userPhonePEl = document.createElement('p');
        let userCategoryPEl = document.createElement('p')
        const li = document.createElement('li');
        const article = document.createElement('article');
        const divElBtns = document.createElement('div');
        const editBtn = document.createElement('button');
        const saveBtn = document.createElement('button');
        const delBtn = document.createElement('button');

        divElBtns.classList.add("buttons");
    
        checkListUl.appendChild(li);
        li.appendChild(article);
        li.appendChild(divElBtns);

        article.appendChild(userNamePEl);
        article.appendChild(userPhonePEl);
        article.appendChild(userCategoryPEl);

        userNamePEl.textContent = "name: " + name;
        userPhonePEl.textContent = "phone: " + phone;
        userCategoryPEl.textContent = "category: " + category;

        editBtn.classList.add("edit-btn")
        saveBtn.classList.add("save-btn")
        divElBtns.appendChild(editBtn);
        divElBtns.appendChild(saveBtn);

        editBtn.addEventListener('click', handleEditContacts);
        saveBtn.addEventListener('click', handleSaveContacts);

        inputName.value = '';
        inputPhone.value = '';
        inputCategory.value = '';

        function handleEditContacts() {
            inputName.value = name;
            inputPhone.value = phone;
            inputCategory.value = category;
            li.remove();
        }

        function handleSaveContacts() {
            contactListUl.appendChild(li);
            editBtn.remove();
            saveBtn.remove();
            delBtn.classList.add('del-btn');
            li.appendChild(delBtn); 

            delBtn.addEventListener('click', () => {
              contactListUl.remove();
            })
        }
    }



  }
  