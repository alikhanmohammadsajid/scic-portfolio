import React from 'react';
import blog2 from '../blog2.jpg'
import blog4 from '../blog4.jpg'
import Title from '../Components/Title';


const blogs = [
    {
        id: '1',
        img: blog4,
        title: 'Blog',
        link: '',
        date: '09',
        month: 'jan',
        year: '2021',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.'
    },
    {
        id: '2',
        img: blog2,
        title: 'Blog',
        link: '',
        date: '09',
        month: 'jan',
        year: '2021',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.'
    },
    {
        id: '3',
        img: blog4,
        title: 'Blog',
        link: '',
        date: '09',
        month: 'jan',
        year: '2021',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.'
    },
    {
        id: '4',
        img: blog2,
        title: 'Blog',
        link: '',
        date: '09',
        month: 'jan',
        year: '2021',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, veniam.'
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
                            <div className="blog-content text-center">
                                <img className="mt-2" src={blog.img} alt="" />
                                <a href={blog.link} className="blog-link">{blog.title}</a>
                                <br/>
                                <a href="" className="blog-detail">{blog.details}</a>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default BlogPage;