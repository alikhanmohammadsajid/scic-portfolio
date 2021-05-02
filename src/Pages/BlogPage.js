import React from 'react';
import blog2 from '../blog2.jpg'
import blog4 from '../blog4.jpg'
import Title from '../Components/Title';


const blogs = [
    {
        id: '1',
        img: blog4,
        title: 'Blog',
        link: 'https://www.facebook.com/profile.php?id=100013329240176',
        date: '09',
        month: 'jan',
        year: '2021'
    },
    {
        id: '2',
        img: blog2,
        title: 'Blog',
        link: 'https://www.facebook.com/profile.php?id=100013329240176',
        date: '09',
        month: 'jan',
        year: '2021'
    },
    {
        id: '3',
        img: blog4,
        title: 'Blog',
        link: 'https://www.facebook.com/profile.php?id=100013329240176',
        date: '09',
        month: 'jan',
        year: '2021'
    },
    {
        id: '4',
        img: blog2,
        title: 'Blog',
        link: 'https://www.facebook.com/profile.php?id=100013329240176',
        date: '09',
        month: 'jan',
        year: '2021'
    },
    {
        id: '5',
        img: blog2,
        title: 'Blog',
        link: 'https://www.facebook.com/profile.php?id=100013329240176',
        date: '09',
        month: 'jan',
        year: '2021'
    }
]

const BlogPage = () => {
    return (
        <div>
            <div className="b-title">
                <Title title={"Blogs"} span={"Blogs"} />
            </div>
            <div className="BlogPage">
                {
                    blogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.img} alt="" />
                                <a href={blog.link} className="blog-link">{blog.title}</a>

                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default BlogPage;