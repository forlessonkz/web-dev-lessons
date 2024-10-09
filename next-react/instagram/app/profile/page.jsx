import Posts from '../../components/posts/posts';
import './profile.css';

export default function profile() {
    return(
        <div className="profile-page">
            <div className="nav-bar">
                nav-bar container
            </div>
            <div className="profile-container">
                <div className="profile-header">
                    <div className="user-img"></div>
                    <div className="user-info">
                        <div className="stats">
                            <div className="post-items"></div>
                            <div className="followers"></div>
                            <div className="following"></div>
                        </div>
                        <ol className="about-user">
                            <li className="name">Daurim</li>
                            <li className="profile-tagline">Личный блог</li>
                            <li className="link">wa.me/7058070114</li>
                        </ol>
                        <div className="some-followers">
                            Подписаны 
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}