const router = require('express').Router();
const { User,Project } = require('./../models');

router.get('/',async (req,res) => {
    try{
      const projectData = await Project.findAll();
  
      const projects = projectData.map(([project]) =>
        project.get({ plain: true })
       
      );
    
      res.render('homepage', {
        projects,
     
    }); 
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
  });

  router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    console.log('hi')
    res.render('login');
  });
  
  router.get('/:id', async (req,res) => {
    
    try {
      const projectData = await Project.findByPk(req.params.id)
      const project = projectData.get({plain: true});
      console.log(project);

      res.render('project', {project});
        
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  })



  module.exports = router;