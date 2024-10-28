import { Router } from "express"
const router= Router()

router.get('/about', (req, res) => res.render('about',{title:'Acerca de mí'}))
router.get('/habilidades', (req, res) => res.render('habilidades',{title: 'Mis habilidades'}))
router.get('/proyectos',(req,res)=>res.render('proyectos',{title: 'Mis proyectos'}))
router.get('/formacion',(req,res)=>res.render('formacion',{title: 'Formación academica'}))

export default router