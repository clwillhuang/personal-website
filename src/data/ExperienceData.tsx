import Experience from "../models/Experience";

export const Experiences: Array<Experience> = [
    {
        role: 'Web Portal Developer Intern',
        company: 'Nokia',
        dates: 'Jan 2024 to Apr 2024',
        description: [
            'Designed and implemented a forum moderation system using Django and HTMX, complete with content reporting, ticket creation, and user suspensions.',
            'Redesigned the support portal to add in subroles for support technicians and an adminstrator dashboard, allowing for other teams to independently manage and customer organizations roles.',
            'Audited the security of backend endpoints in Django, patching edge cases and missing authorization checks for endpoints.',
            'Implemented a Flask API to automatically generate documentation pages based on requests made from Jenkin\'s pipeline.',
        ]
    },
    {
        role: 'Undergraduate Researcher',
        company: 'University of Toronto',
        dates: 'May 2023 to Aug 2023',
        description: [
            'Designed and developed a RESTful API using Django and PostgreSQL to perform remote data analysis of bioinformatics sequence analysis, capable of handling thousands of sequences per job submission and integrating with API from the National Institutes of Health',
            "Deployed prototype to Amazon Web Services or university's web servers using Docker and NGINX.",
            'Utilized RabbitMQ, Celery and AWS SQS for an asynchronous task queue to process jobs by any number of worker containers.',
            'Research project outline won NSERC USRA funding, a $7500 scholarship from the Natural Sciences and Engineering Research Council of Canada.',
            'Performed testing of the system with existing datasets, achieving more than 95% accuracy with species classification using short genetic sequences.'
        ]
    },
    {
        role: 'Bioinformatics Research Assistant',
        company: 'University of Toronto',
        dates: 'Sep 2022 to Apr 2023 (Part-time)',
        description: [
            'Researched computational methods in DNA barcoding to formulate a project for a novel bioinformatics analysis resource.']
    },
    {
        role: 'Undergraduate Researcher',
        company: 'University of Toronto',
        dates: 'May 2022 to Aug 2023',
        description: [
            'Developed a statistical analysis and visualization package for R to study bacterial evolution from genomic sequencing data, using a dataset of over 500 strains.',
            'Worked with phylogenetic tree structures to visualize evolutionary relationships and investigate their topology for indications of major evolution events.',
            'Research project outline won NSERC USRA funding, a $7500 scholarship from the Natural Sciences and Engineering Research Council of Canada.'
        ]
    },
    {
        role: 'Biobank Technician',
        company: 'University Health Network, Biospecimen Services',
        dates: 'Sep 2021 to Apr 2022',
        description: [
            'Proficiently utilized the Biobanking Information Management System software to annotate samples and prepare monthly sample reports for presentation in lab meetings.',
            'Efficiently automated data entry workflows using Python and Visual Basic, resulting in bulk operations taking 30% faster across the project size of more than 1200 patient samples.'
        ]
    }
]

export const Extracurriculars : Array<Experience> = [
    {
        role: 'Vice President of Technology',
        company: 'Blankets for T.O.',
        dates: 'Dec 2020 to May 2024',
        description: [
            "Developed and maintained the organization's website (https://blanketsforto.ca/) using the React framework, achieving over 200 monthly site visitors.",
            "Collaborated within a team of 20 executive members to promote fundraisers collectively raising over $4000 for the donation of clothing, blankets, food and hygiene products to the homeless community.",
            "Developed a Discord chat bot with Python for the organization's member rewards program, enabling our registered members to check their points and ask questions."
        ]
    },
    {
        role: 'Director of IT',
        company: 'Management Consulting Group',
        dates: 'May 2023 to May 2024',
        description: [
            "Contributed to the organization\'s website written in React to align with upcoming industry and student networking events for aspiring business consultants at the University of Toronto.",
            "Migrated four club research reports from PDF files to full website pages promoted on the homepage."
        ]
    },
    {
        role: 'Director of Web Development',
        company: 'Management Technology Association',
        dates: 'May 2023 to May 2024',
        description: [
            'Designed and developed a new full-stack web app from scratch for the organization, using MongoDB, Express.js, React and Node.js to facilitate a year-long data analysis competition.'
        ]
    },
    {
        role: 'Director of Academics',
        company: 'Molecular Biology and Immunology Students Association',
        dates: 'Sep 2022 to May 2023',
        description: [
            'Collaborated within a team to prepare and present two seminars about undergraduate research, with an attendance of over 50 undergraduate students at each event.',
            'Delivered two student events for students and faculty professors to critically discuss published research articles, with 15 students in attendance at each'
        ]
    }
]