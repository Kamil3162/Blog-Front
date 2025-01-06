import Cookies from "universal-cookie";
import axiosClientAPI from "./base";

const cookies = new Cookies();

export const postCreate = (title, category, content, photo) => {
    try{
        const formData = new FormData();

        formData.set('title', title);
        formData.set('category', category);
        formData.set('content', content);
        formData.set('photo', photo);

        console.log(formData);

        const response = axiosClientAPI.post('/posts/post-create/',formData,{
            withCredentials: true, // This enables cross-origin requests to include cookies
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const postUpdate = (post_id, title, content) =>{
    const formData = new FormData();

    formData.append('content', content);
    formData.append('title', title);

    axiosClientAPI.put(`/posts/post-update/{post_id}`, formData,{
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
}

export const postDelete = (post_id) =>{

    axiosClientAPI.delete(`/posts/post-delete/{post_id}`,{
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })

}

export const postDetail = (post_id) =>{
    axiosClientAPI.put(`/posts/post/{post_id}`,{
        withCredentials: true, // This enables cross-origin requests to include cookies
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
    })
}

export const postGenDetail = async (post_id) => {
   console.log(post_id);
    try {
        const response = await axiosClientAPI.get(`/posts/post/${post_id}`
//             withCredentials: true,
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //        },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error for handling in the component
    }
}

export const fetchPosts = async (page = 1) => {
    console.log(page)
    try {
        const response = await axiosClientAPI.get(`/posts/post-list/?page=${page}`, {
            // params: { page },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        // useNotification().showNotification(
        //     error.message,
        //     NotificationType.ERROR
        // );
        console.log("handle fetch post error");
        throw error;
    }
};
