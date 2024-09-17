import Project from "../models/Project";

export const Portfolio: Array<Project> = [
    {
        title: 'Linux System Monitor',
        stack: ['Linux', 'Make'],
        languages: ['C'],
        tags: [],
        shortDescription: 'The Linux System Monitor tracks CPU and memory utilization, displaying results graphically and outputting to log files.',
        repoLink: 'https://github.com/clwillhuang/system-monitor',
        projectLink: 'https://github.com/clwillhuang/system-monitor',
        previewImage: 'https://clwillhuang.github.io/personal-website/system-monitor.JPG',
        projectPrompt: null,
        summary: 
        <p>
            This C program written for Linux allows the user to track the current CPU and memory utilization from the terminal. The results are displayed graphically, similar to the output of "htop" command.
        </p>,
        lessons:
        <ul>
            <li>Implemented concurrent process to track memory and CPU usage, using signals and pipes for interprocess communication.</li>
            <li>Read CPU and memory utilization data obtained from libraries (e.g. sysinfo) and files (/proc/cpuinfo and /proc/stat).</li>
            <li>Used a Makefile to semi-automate the compilation and linking of files into the executable.</li>
        </ul>
    },
    {
        title: 'OS Table Viewer',
        stack: ['Linux', 'Make'],
        languages: ['C'],
        tags: [],
        shortDescription: 'A C program for Linux which summarizes active files, inodes, file descriptors and processes.',
        projectLink: 'https://github.com/clwillhuang/table-viewer',
        previewImage: 'https://clwillhuang.github.io/personal-website/table-viewer.jpg',
        projectPrompt: 'View on GitHub',
        summary: 
        <p>
            A Linux-based tool developed with C which displays to the user information about active files, file descriptors and processes on the machine.
        </p>,
        lessons: 
        <ul>
            <li>Gained an understanding of role of processes, inodes and file descriptors within the Linux operating system.</li>
            <li>Used a Makefile to control the compilation and linking of source files into an executable. </li>
            <li>Output from the tool can be output to terminal, to text file or a binary file.</li>
            <li>Compared the runtime of the program when outputting to binary and plaintext output formats.</li>
        </ul>
    },
    {
        title: 'Barrel',
        stack: ['Django', 'PostgreSQL', 'Docker', 'React', 'Bootstrap', 'NGINX', 'AWS'],
        languages: ['Python', 'JS'],
        tags: [],
        shortDescription: 'My undergraduate research project aiming to streamline DNA sequence analysis and collation for species identification.',
        previewImage: 'https://clwillhuang.github.io/personal-website/barrel.png',
        projectPrompt: 'Visit',
        projectLink: 'http://barrel.utsc.utoronto.ca/app',
        summary:
        <>
            <p>
                My undergraduate research aims to apply software engineering practices in the development of streamlined workflows in the field of genetic sequencing analysis. This project, named "Barrel", is a web server allows researchers to collate databases of DNA sequences and run analysis.
            </p>
            <p>
                Users can submit DNA sequences for analysis, and "Barrel" will attempt to identify the species from which that sequence was obtained, based on the database that was consulted, returning a report of the likely species identities. Barrel features a user authentication system allowing users to collaborate on databases in private before making their data public. 
            </p>
        </>,
        lessons:
        <ul>
            <li>Developed REST API using Django and Django Rest Framework (DRF) to support the processing of user-submitted asynchronous jobs.</li>
            <li>Implemented a queue system and asynchronous job processing by including Python Celery and RabbitMQ.</li>
            <li>Configured NGINX as a reverse proxy to serve both the backend API and the React frontend.</li>
            <li>Deployed website to servers at the University of Toronto, and with AWS EC2.</li>
            <li>Utilized Docker and Docker Compose to create containers used for the Django app, the relational database, the message broker and the reverse proxy.</li>
            <li>Used react-query and react-table to create responsive and efficient query caching and fetching, as well as chartist for data graphs</li>
        </ul>
    },
    {
        title: 'Blankets for TO',
        stack: ['React', 'Gatsby', 'Contentful'],
        languages: ['JS', 'GraphQL'],
        tags: [],
        shortDescription: 'A website independently developed for Blankets for T.O., a student-led organization which has helped connect the public with local shelters and has helped our organization to distribute over 8000 items to shelters and individuals.',
        previewImage: 'https://clwillhuang.github.io/personal-website/bto.png',
        projectPrompt: 'Visit',
        repoLink: 'https://github.com/clwillhuang/blankets-for-to-site',
        projectLink: 'https://blanketsforto.ca/',
        summary:
        <>
            <p>
                Blankets for TO is an organization which aims to raise awareness for homeless issues in Toronto and connect donations to shelters and individuals on the street.
            </p>
        </>,
        lessons:
        <>
            <ul>
                <li>Used Google Analytics and Google Search Console to monitor site traffic and check for indexing issues, achieving a 5000 monthly impressions with a 5% clickthrough rate.</li>
                <li>Coordinated within a team to promote fundraisers on the website, raising $4000 used towards donating essential items such as clothing, blankets, food, and hygiene products.</li>
                <li>Used Leaflet.js to create an interactive map featuring our donations.</li>
                <li>Used cookies to implement a shopping cart feature on our merchandise store.</li>
                <li>Integrated Contentful CMS to simplify the addition of blog articles.</li>
            </ul>
        </>
    },
    {
        title: 'Rails and Rails',
        stack: ['Unity 3D', 'Blender'],
        languages: ['C#'],
        tags: [],
        shortDescription: 'A Unity 3D game where players construct and direct railways with, complete with 9 track types, 5 train types, and 15 levels.',
        previewImage: "https://github.com/clwillhuang/Rails-and-Rails/raw/main/Screenshots/Simulation.PNG",
        projectPrompt: 'View on GitHub',
        projectLink: 'https://github.com/clwillhuang/Rails-and-Rails',
        summary: 
        <p>
            Rails and Rails is a Unity 3D game which tasks players with building optimal railroads and directing the train signalling to move trains efficiently from point A to point B.
        </p>,
        lessons: 
        <ul>
            <li>Added train signalling, collision and construction mechanics.</li>
            <li>Implemented a scoring system factoring in construction costs, train derailments, and level completion times.</li>
            <li>Used Blender to 3D model 5 types of train cars, 6 terrain objects and 9 track pieces.</li>
        </ul>
    },
    {
        title: 'First Year Impact Project',
        stack: ['React', 'Gatsby'],
        languages: ['JS'],
        tags: [],
        previewImage: 'https://clwillhuang.github.io/personal-website/impact-project.png',
        projectPrompt: 'View on Netlify',
        projectLink: 'https://immigrant-success-canada.netlify.app/',
        shortDescription: 'A website developed during as a university freshman for a team competition to showcase the stories of new Canadians.',
        summary: 
        <p>
            My first introduction to web development was my participation in a group competition with 4 students to design, develop and pitch a website aiming to share the success stories of immigrants in Canada. "Success Stories of New Canadians" is a website developed with React and deployed on Netlify.
        </p>,
        lessons:
        <ul>
            <li>Used Git to collaborate efficiently within a group of 4 students.</li>
            <li>Delivered a presentation  </li>
            <li>Implemented search and tag filter features using Material UI components.</li>
        </ul>
    }, 
    {
        title: 'Management Tech Association Website',
        stack: ['React', 'NextJS', 'MongoDB', 'Google OAuth'],
        languages: ['TypeScript'],
        tags: [],
        shortDescription: "A website independently developed from scratch for the MTA, a student association at U of T Scarborough, which still uses the site today.",
        repoLink: 'https://github.com/clwillhuang/mta-site-2023',
        projectLink: 'https://mta-site-2023.vercel.app/',
        previewImage: '/personal-website/mta_frontpage.png',
        projectPrompt: 'View Website Preview',
        summary:
        <>
            <p>
                The Management Technology Association (MTA) is a student group at the University of Toronto Scarborough which primarily appeals to Management students with interests in learning data analytics, IT systems, programming, and data automation. As the Director of Web Development for the 2023-24 year, I independently developed the current website for the organization from scratch with feedback from our technology and marketing teams. 
            </p>
            <p>
                This project was the first time that I used NextJS and Vercel, but I quickly got the hang of it with my previous TypeScript knowledge.
            </p>
            <p>
                I have since transferred ownership to the incoming technology team who, as of the 2024-2025 year, are still using my website design and updating it for their purposes. 
            </p>
            <p> 
                You can find my archived copy of the website at <a href="https://mta-site-2023.vercel.app/">https://mta-site-2023.vercel.app/</a>, and the source code repository at <a href="https://github.com/clwillhuang/mta-site-2023">https://github.com/clwillhuang/mta-site-2023/</a>
            </p>
        </>,
        lessons: 
        <ul>
            <li>Used Google API, OAuth and Next Auth to allow sign-in and different roles for the general public and association executives.</li>
            <li>Added executive dashboard for users to update events and articles using Markdown.</li>
            <li>Used MongoDB and MongoDB GridFS to enable image uploads, allowing editors to add images in events and resources.</li>
            <li>Used NextJS and Vercel for the first time, along with its new app router features.</li>
        </ul>
    },
    {
        title: 'Papers',
        stack: ['Unity 3D', 'Blender'],
        languages: ['C#'],
        tags: [],
        shortDescription: "Developed a adaptation of Lucas Pope's 'Papers, Please' featuring 10 levels and 16 gameplay mechanics.",
        projectLink: 'https://github.com/clwillhuang/papers-adaptation',
        previewImage: 'https://clwillhuang.github.io/personal-website/papers-gameplay.jpg',
        projectPrompt: 'View Project',
        summary: 
        <>
            <p>
                Set in George Orwell's "1984", players assume the role of a worker at the Ministry of Truth, Records Department (Recdep), tasked with censoring critical material and correcting Newspeak in articles. Each day, the player is be given a stream of documents to read and the player must identify any potential violations of Newspeak by cross-referencing their handbook against words in the context.
            </p>
        </>,
        lessons: 
        <ul>
            <li>Used 2D shaders and UI elements to render news articles with visual highlighting.</li>
            <li>Created 2D animations in Unity to animate people and papers entering and leaving the frame.</li>
            <li>Used object-oriented programming to represent the game mechanics, such as the dictionary of rules.</li>
            <li>Used Unity's Scriptable Objects to efficiently create new levels and scenarios.</li>
        </ul>
    },
    {
        title: 'Stock Trading Indicators',
        stack: ['NinjaTrader', '.NET'],
        languages: ['C#', 'NinjaScript'],
        tags: [],
        shortDescription: 'Implemented of live trading indicators graphing trade volume and price action.',
        projectLink: 'https://github.com/clwillhuang/trading-toolbox',
        previewImage: 'https://clwillhuang.github.io/personal-website/indicator.png',
        projectPrompt: 'View on GitHub',
        summary:
        <>
            <p>
                Indicators in stock trading are used for technical analysis to perform data visualizations ultimately used to decide times to buy and sell stock. 
            </p>
            <p>
                I created indicators in NinjaTrader 7/8 which factor in live stock prices and trade volume in order to represent price action. By creating plots of the prices at which stocks are being bought and sold, traders gain a more complete understanding of the market pressures so they can estimate where prices are likely to increase or decrease.
            </p>
        </>,
        lessons: 
        <ul>
            <li>Used NinjaScript, built upon C#, to read data from price updates and other indicators and represent them in objects and graphics.</li>
            <li>Used event-based programming to structure functions and window refreshes around live updates in stock prices.</li>
            <li>Used C# .NET graphics APIs to draw shapes and text onto stock graphs.</li>
            <li>Learned about the main concepts and indicators used in technical analysis of trading, including support and resistance lines, candlestick patterns, moving averages, limit downs and stop losses.</li>
        </ul>
    },
    {
        title: 'Code Projectorium',
        stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Passport.js'],
        languages: ['JS'],
        tags: [],
        shortDescription: 'A website side-project allowing users to create code snippets and documentation, complete with comments.',
        summary: 
        <>
            <p>
                Code Projectorium is a SPA and REST API which allows users to create and share code documentation. Code snippets can be placed on pages organized into separate projects, and users can add comments to individual snippets.
            </p>
        </>,
        lessons:
        <ul>
            <li>Used Passport.js to integrate a basic account registration system using username and email.</li>
            <li>Added interactive and OpenAPI-compliant documentation using Swagger docs.</li>
            <li>Used MongoDB to store user content and accounts.</li>
        </ul>,
        projectLink: 'https://github.com/clwillhuang/code-projectorium',
        previewImage: null,
        projectPrompt: 'View on GitHub'
    },
    {
        title: 'Personal Website',
        stack: ['React'],
        languages: ['TypeScript'],
        tags: [],
        shortDescription: 'A website showcasing my portfolio.',
        projectLink: 'https://github.com/clwillhuang/personal-website',
        previewImage: 'https://clwillhuang.github.io/personal-website/personal-website.png',
        projectPrompt: 'View on GitHub',
        summary: 
        <p>
            Personal portfolio showcasing my projects and experience. Made with TypeScript.
        </p>,
        lessons:
        <ul>
            <li>Learned how to use TypeScript.</li>
        </ul>
    },
]