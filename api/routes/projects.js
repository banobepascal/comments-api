const express = require('express');
const { newProject, getAllProjects, getProject, postComment } = require('../controllers/projects');

const projectsRoute = express();

projectsRoute.post('/api/projects/new', newProject);
projectsRoute.get('/api/projects', getAllProjects);
projectsRoute.get('/api/projects/:id', getProject);
projectsRoute.post('/api/projects/:id', postComment);

module.exports = projectsRoute;