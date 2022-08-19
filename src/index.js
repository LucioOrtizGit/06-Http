// import { init } from "./js/chistes-page";
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";
import * as CRUD from './js/crud-provider';

// obtenerUsuarios().then(console.log);
// init();

CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'Lucio',
    job: 'Serrador',
}).then(console.log);

CRUD.actualizarUsuario(1,{
    name:'Lara',
    job:'Carpintera'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);