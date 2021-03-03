import React,{useState, useEffect} from 'react'

const user_id = 6;
const url = `http://127.0.0.1:8000/api/profile/${user_id}`

function Profile() {

    const initialState = {
        user: {},
        user_avatar:{},
        posts:[],
        followers:[],
        followings:[]
    }

    const [profile, setProfile] = useState(initialState);

    useEffect(() => {
        const fetchData = () =>{
            fetch(url)
            .then(res => res.json())
            .then(data => setProfile(data))
        }
        
        fetchData();

    }, [url])
    console.log(profile);
    
    return (
        <>
        <div className="profile__user container">
            <div className="profile__data">
                <img className="profile__dataAvatar"src={profile.user_avatar.url} alt=""/>
                <div className="profile__dataMetrics">
                    <div className="user">
                        <p className="profile__userName">
                            {profile.user.name}
                        </p>
                        <button className="btn-sm btn-follow" type="button">Seguir</button>
                    </div>
                    <ul className="metricsList">
                        <li className="metrics__item"><a className="metrics__action" href="#"><span className="metrics__number">{profile.posts.length}</span> publicaciones</a></li>
                        <li className="metrics__item"><a className="metrics__action" href="#"><span className="metrics__number">{profile.followers.length}</span> seguidores</a></li>
                        <li className="metrics__item"><a className="metrics__action" href="#"><span className="metrics__number">{profile.followings.length }</span> seguidos</a></li>
                    </ul>
                    <div className="profile__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iure! Iusto sunt voluptate fuga consectetur, quod laudantium, molestiae cupiditate accusamus, officia error vel unde? Necessitatibus pariatur dolorum quis laborum. Dolorem!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iure! Iusto sunt voluptate fuga consectetur, quod laudantium, molestiae cupiditate accusamus, officia error vel unde? Necessitatibus pariatur dolorum quis laborum. Dolorem!
                    </div>
                </div>
            </div>
            <div className="profile__stories">
                <div className="storiesCarousel">
                    <div className="stories__item">
                        <img src="https://i.picsum.photos/id/364/100/100.jpg?hmac=2Vg00yNYKJFe6-M4S_YrWjmb3fYbMgBk0490sez1HGo" alt=""/>
                        <h6 className="stories_description">Viajes</h6>
                    </div>
                    <div className="stories__item">
                        <img src="https://i.picsum.photos/id/1048/100/100.jpg?hmac=Pc7wIv8BvgfLAMA1AuW7nPh2sfP6wor0nUqeQTaQw7Y" alt=""/>
                        <h6 className="stories_description">Ciudades</h6>
                    </div>
                    <div className="stories__item">
                        <img src="https://i.picsum.photos/id/15/100/100.jpg?hmac=uB29_yiDBv5tE-OiU820jOBG8zZfh3J-IFg78RSf_Ds" alt=""/>
                        <h6 className="stories_description">Paraísos</h6>
                    </div>
                    <div className="stories__item">
                        <img src="https://picsum.photos/100" alt=""/>
                    </div>
                </div>

            </div>
        </div>
        <div className="container">
            <hr/>
        </div>
        <div className="feed container">
            {
                profile.posts.map(post => (
                    <div className="feed__item"> <img className="feed-img" src={post.image.url} alt=""/> </div>
                ))
            }
        </div>
        </>
    )
}

export default Profile
