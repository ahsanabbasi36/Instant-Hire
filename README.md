# Instant-Hire

Instant Hire is a job portal which solves facilitates job seekeers and companies. Job seeker can search and apply for the jobs posted by employers. While Companies can post job and job seeker can easily apply.On that specific job posting,employers will be able to see the relvant candidates ranked with the relvancy score.Companies can also conduct interviews on the same platform.

# Candidate-Ranking

Algorithm based approach is followed where the incoming resume in the PDF format will be read and afterwards the Text-Extraction using PYPDF2 and then the Pre-processing using spacy is done.Then there is Matcher defination where we defined patterns and matchers for identifying sections like skills,Education and Experience in both resume and job description. Then the system will extract sections from resume and job description based on the defined patterns.Then finally it converts the text into dense vector representations using BERT embeddings.At last it uses cosine similarity to between each coresponding section to of resume and job description considering weight for skills, education and experience section.Finally it  combines the score and return the final score to the employers. 

## Technology
This app is build using MERN stack

## How to run
Install dependencies by running `npm i` in root folder and client folder
Run command `npm run dev` to start both frontend and backend
