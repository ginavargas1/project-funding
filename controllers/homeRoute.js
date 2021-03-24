const router = require('express').Router();
const { User } = require('../../models');

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

  router.get('/:id', async (req,res) => {
    try {
      const projectData = await Project.findByPk(req.params.id)
      const projects = projectData.map((project) => project.get({plain: true}));
      res.render({projects});
  
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  })

  module.exports = router;