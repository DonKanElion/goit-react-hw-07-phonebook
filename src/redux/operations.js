import axios from "axios";

const PROJECT_TOKEN = '6488c7350e2469c038fe5961';
const BASE_URL = `https://${PROJECT_TOKEN}.mockapi.io/contacts`;

axios.defaults.baseURL = BASE_URL;

export async function fetchContacts () {
    const { data } = await axios.get('contacts');
    // console.log(data);
    return data;
}

export async function addContact(newContact) {
    // const { data } = await axios.post('contacts');
    console.log('API: AddContact: ', addContact);
    // const newTask = {
    //     content: 'Check out mockapi.io',
    //     completed: false,
    //   };
      
    //   fetch('https://PROJECT_TOKEN.mockapi.io/tasks', {
    //     method: 'POST',
    //     headers: {'content-type':'application/json'},
    //     // Send your data in the request body as JSON
    //     body: JSON.stringify(newTask)
    //   }).then(res => {
    //     if (res.ok) {
    //         return res.json();
    //     }
    //     // handle error
    //   }).then(task => {
    //     // do something with the new task
    //   }).catch(error => {
    //     // handle error
    //   })
}

export async function deleteContact(id) {
    // axios.delete(url[, config])

    await axios.delete('contacts',`${id}`);

    console.log('Delete contact: ', id);

    
}

export async function findContact(query) {
    console.log('findContact: ', query);
}