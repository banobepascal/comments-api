const { Mongoose } = require('mongoose');
const Project = require('../models/Projects');

exports.newProject = async (req, res) => {
    if(!req.body.title || req.body.title.length < 1) {
        return res.status(400).json({errorMessage: 'title cannot be empty'});
    }

    try {
        const newProject = new Project({
            title: req.body.title
        });

        await newProject.save();
        return res.status(201).json({
            message: 'successfully created project',
            project: newProject
        });
    } catch(err){
        return res.status(500).json({error: err.message});
    }
}

exports.getAllProjects = async (res) => {
    try {
        const projects = await Project.find();
        const data = [];
        projects.forEach((project) => {
            data.push({
                title: project.title,
                comments: project.comments.length
            });
        });

        return res.status(200).json({
            message: 'successfully retrieved all projects',
            data
        });

    } catch(err){
        return res.status(500).json({error: err.message});
    }
}

exports.getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        return res.status(200).json({
            message: 'successfully retrieved project',
            project: {
                title: project.title,
                comments: project.comments.length
            }
        });

    } catch(err){
        return res.status(500).json({error: err.message});
    }
}

exports.postComment = async (req, res) => {
    if(!req.body.comment || req.body.comment.length < 1){
        return res.status(400).json({errorMessage: 'comment cannot be empty'});
    }

    try {
        await new Project.findByIdAndUpdate(req.params.id, {
            comments: {
                comment:{
                    comment_id: Mongoose.Types.ObjectId,
                    content: req.body.comment, 
                } 
            },
        }, { new: true }
        );
        return res.status(201).json({
            message: 'successfully posted comment'
        });
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
}