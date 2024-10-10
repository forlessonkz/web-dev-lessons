import Footer from '@/components/Footer/Footer';
import Posts from '../../components/posts/posts';
import './profile.css';
import Link from 'next/link';

export default function profile() {
    return(
        <div className="profile-page">
            <div className="nav-bar">
                <div className="nav-container">
                     <div className="nav-logo">
                        <img src="/images/logo.png" alt=""/>
                    </div>
                    <div className="nav-list">
                        <Link href = "">
                            <div className="link-icon">
                                <img src="/images/icons/home.png" alt="" />
                            </div>
                            Home
                        </Link>
                        <Link href = "">
                            <div className="link-icon">
                            <img src="/images/icons/search.png" alt="" />
                            </div>
                            Search query
                        </Link>
                        <Link href = "">
                            <div className="link-icon">
                                <img src="/images/icons/interesting.png" alt="" />
                            </div>
                            Interesting
                        </Link>
                        <Link href = "">
                            <div className="link-icon">
                                <img src="/images/icons/reels.png" alt="" />
                            </div>
                            Reels
                        </Link>
                        <Link href = "">
                            <div className="link-icon">
                                <img src="/images/icons/message.png" alt="" />
                            </div>
                            Messagess
                        </Link>
                        <Link href = "">
                            <div className="link-icon">
                                <img src="/images/icons/notifications.png" alt="" />
                            </div>
                            Notifications
                        </Link>
                        <Link href = "">
                            <div className="link-icon">
                                <img src="/images/icons/add.png" alt="" />
                            </div>
                            Create
                        </Link>
                        <Link className = "profile-icon" href = ""> 
                            <div className="link-icon">
                                <img src="/images/icons/profile-icon.png" alt="" />
                            </div>
                            Profile
                        </Link>
                    </div>
                    <div className="nav-bottom">
                        <Link href = "">Threads</Link>
                        <Link href = "">More</Link>
                    </div>
                </div>
               
            </div>
            <div className="profile-container">
                <div>
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
                    <div className="posts-container">
                        <Posts />
                    </div>
                </div>
                    <Footer />
            </div>
        </div>
    )
}