import React,{useState, useEffect} from 'react'

const user_id = 1;
const url = `http://127.0.0.1:8000/api/profile/${user_id}`

function Profile() {

    const initialState = {
        user: {},
        user_avatar:{},
        posts:[]
    }

    const [state, setData] = useState(initialState);

    useEffect(() => {
        const fetchData = () =>{
            fetch(url).then(res => res.json()).then(data => setData(data))
        }
        
        fetchData();

    }, [url])
    console.log(state);
    return (
        <>
        <div className="profile__user container">
            <div className="profile__img">
                <img className="user-avatar"src={state.user_avatar.url} alt=""/>
            </div>
            <div className="profile__data">
                <div className="user-actions">
                    <p className="profile__username">
                        {state.user.name}
                    </p>

                </div>
                <div className="user-metrics">
                    {state.posts.length} Publicaciones

                </div>
            </div>
        </div>
        <div className="feed container">
            {
                state.posts.map(post => (
                    <div className="feed__item"> <img className="feed-img" src={post.image.url} alt=""/> </div>
                ))
            }
        </div>
        </>
    )
}

export default Profile
