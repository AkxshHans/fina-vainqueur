const projects = [
    {
        name: 'MONOLITH STUDIO',
        type: 'TATTOO ARTIST',
        pos: 'start',
        image: 'https://i.pinimg.com/564x/55/d5/5b/55d55bef6ac2b69a9b0a5395d25353dc.jpg',
        link: 'https://monolithstudio.com/'
    },
    {
        name: 'ACCORDION PRODUCTIONS',
        type: 'STUDIO WEBSITE',
        pos: 'mid',
        image: 'https://plus.unsplash.com/premium_photo-1682146749338-f380c93c8dec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        link: 'https://www.accordion.net.au/work'
    },
    {
        name: 'BLUX STUDIO',
        type: 'BRANDING AGENCY',
        pos: 'end',
        image: 'https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_1280.jpg',
        link: 'https://www.bluxstudio.com/'
    },
    {
        name: 'PAPER PORTFOLIO',
        type: 'PORTFOLIO',
        pos: 'mid',
        image: 'https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-1600.jpeg',
        link: 'https://www.niccolomiranda.com/'
    },
    {
        name: 'SIDCUP FAMILY GOLF',
        type: 'GOLF',
        pos: 'end',
        image: 'https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447929470_988634446296987_6093112883687622864_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1',
        link: 'https://sidcupfamilygolf.com/'
    },
    {
        name: 'ABHISHEK JHA',
        type: 'Portfolio',
        pos: 'mid',
        image: 'https://abhishekjha.me/headshot.d60093a0.JPG',
        link: 'https://abhishekjha.me/index.html'
    },
    {
        name: 'LOUISE MERTINS',
        type: 'Catalouge',
        pos: 'start',
        image: 'https://i.pinimg.com/736x/31/09/e5/3109e5002efc8a5ba01a1922a60a9d1f.jpg',
        link: 'https://louisemertens.com/'
    },
    {
        name: 'TANYA TIMBAL',
        type: 'Model',
        pos: 'end',
        image: 'https://api.tanyatimal.studio/uploads/kat_1_ae9c3e465e.jpg',
        link: 'https://tanyatimal.studio/'
    },
    
];

const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);

        let link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank'; // Open in a new tab

        let imageContainer = document.createElement('div');
        imageContainer.className = `image__container`;

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;

        projectDetails.append(projectTitle, projectType);

        imageContainer.appendChild(image);
        link.appendChild(imageContainer);
        panel.append(link, projectDetails);

        document.querySelector('.projects__slider').appendChild(panel);
    });
}

createProjects();




// Blog posts

const blogPosts = [
    {
        title: '@vainqueuragency ',
        time: 'INSTAGRAM',
        image: 'https://images.unsplash.com/photo-1633113247735-45a969eb9266?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: '@vainqueuragency1',
        time: 'TWITTER',
        image: 'https://images.unsplash.com/photo-1705904506582-6552c35a2dc4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        title: 'info@vainqueuragency.com',
        time: 'EMAIL',
        image: 'https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    }
]

const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog__post');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.href = 'https://www.google.com';

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post__image__container');

        let image = document.createElement('img');
        image.classList.add('blog__post__img');
        image.src = post.image;


        let postDetails = document.createElement('div');
        postDetails.classList.add('post__details');

        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;

        let postTime = document.createElement('p');
        postTime.innerText = post.time;

        imageContainer.appendChild(image);
        postDetails.append(postTitle, postTime);
        postDiv.append(imageContainer, postDetails)
        blogPostSection.appendChild(postDiv);

        document.getElementById('blog').appendChild(blogPostSection)

    })
}



export {
    createProjects,
    createBlogposts
}


