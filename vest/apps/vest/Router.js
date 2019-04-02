
import Vue         from 'vue'; // from 'vest/libs/vue/vue.esm.browser.js'
import Router      from 'vest/libs/vue/vue-router.esm.js'; Vue.use(Router);
import AppLayout   from 'vest/comp/admin/AppLayout.vue'
import AuthLayout  from 'vest/comp/auth/AuthLayout.vue'

/*
let lazyLoading1 = (name) => {
  let url = `vest/comp/${name}.vue`;
  return import(url).then( console.log('Router url not found', url ); ) };
*/

let lazyLoading = (name) => {
  let url = `comp/${name}.vue`;
  return import(url)
    .then(module => {
      module.default(); })
    .catch(error => {
      if( error===false){}
      console.log('Router url not found', url ); });
}

const EmptyParentComponent = {
  template:'<router-view></router-view>' };

export default new Router( {
  routes:[
    { path:'*', redirect:{ name:'dashboard' } },
    { path:'/auth', component:AuthLayout, children:[
      { path:'login',  name:'login',  component:lazyLoading('auth/login/Login') },
      { path:'signup', name:'signup', component:lazyLoading('auth/signup/Signup') },
      { path:'', redirect:{ name:'login' } } ] },
    { path:'/404', component:EmptyParentComponent, children:[ // lazyLoading('pages/404-pages/VuesticPageNotFoundSearch') },
      { path:'not-found-advanced', name:'not-found-advanced',   component:lazyLoading('pages/404-pages/VuesticPageNotFoundSearch') },
      { path:'not-found-simple',   name:'not-found-simple',     component:lazyLoading('pages/404-pages/VuesticPageNotFoundSimple') },
      { path:'not-found-custom',   name:'not-found-custom',     component:lazyLoading('pages/404-pages/VuesticPageNotFoundCustom') },
      { path:'/pages/not-found-large-text', name:'not-found-large-text', component:lazyLoading('pages/404-pages/VuesticPageNotFoundLargeText') } ] },
    { path:'/admin', name:'Admin', component:AppLayout, children:[
      { path:'dashboard', name:'dashboard', default:true,  component:lazyLoading('dashboard/Dashboard') },
    /*{ path:'statistics', name:'statistics', component:EmptyParentComponent, children:[
        { path:'charts', name:'charts', component:Charts, // lazyLoading('statistics/charts/Charts') },
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Charts' } },
        { path:'progress-bars', name:'progress-bars', component:ProgressBars, // lazyLoading('statistics/progress-bars/ProgressBars') },
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars' } } ] },*/
        { path:'forms', name:'forms', component:EmptyParentComponent, children:[
            { path:'form-elements', name:'form-elements', component:lazyLoading('forms/form-elements/FormElements'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/inputs'  } },
            { path:'form-wizards', name:'form-wizards', component:lazyLoading('forms/form-wizard/FormWizard'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Wizards' } },
            { path:'medium-editor', name:'medium-editor', component:lazyLoading('forms/medium-editor/MediumEditor'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor' } } ] },
        { path:'tables', name:'tables', component:lazyLoading('tables/Table'),
          meta: {wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tables' } },
        { path:'ui', name:'ui', component:EmptyParentComponent, children:[
            { path:'typography', name:'typography', component:lazyLoading('typography/Typography') },
            { path:'buttons', name:'buttons', component:lazyLoading('buttons/Buttons'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons' } },
            { name:'color-pickers', path:'color-pickers', component:lazyLoading('color-pickers/ColorPickers') },
            { name:'timelines', path:'timelines', component:lazyLoading('timelines/Timelines'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines' } },
            { name:'dropdowns', path:'dropdowns', component:lazyLoading('dropdowns/Dropdowns'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Dropdowns' } },
            { name:'notifications', path:'notifications', component:lazyLoading('notifications/Notifications') },
            { path:'icons', component:lazyLoading('vest/icons/Icons'),children:[ // 
                { name:'icon-sets', path:'', component:lazyLoading('icons/SetsList') }, // Default route
                { name:'icon-set',  path:':name', component:lazyLoading('icons/IconSet'), props:true } ] },
            { name:'spinners', path:'spinners', component:lazyLoading('spinners/Spinners') },
            { name:'grid', path:'grid', component:lazyLoading('grid/Grid') },
            { name:'modals', path:'modals', component:lazyLoading('modals/Modals'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Modals' } },
            { name:'cards', path:'cards', component:lazyLoading('cards/Cards'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Cards' } },
            { name:'file-upload', path:'file-upload', component:lazyLoading('file-upload/FileUpload'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload' } },
            { name:'tags', path:'tags', component:lazyLoading('tags/Tags'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tags' } },
            { name:'tree-view', path:'tree-view', component:lazyLoading('tree-view/TreeView'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view' } },
            { name:'collapse', path:'collapse', component:lazyLoading('collapse/Collapse') },
            { name:'filters', path:'filters',   component:lazyLoading('filters/Filters')     } ] },

        { name:'extra', path:'extra', component:lazyLoading('extra/Extra'),
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs' } },
        { name:'maps', path:'maps', component:EmptyParentComponent, children:[
            { name:'google-maps', path:'google-maps', component:lazyLoading('maps/google-maps/GoogleMapsPage'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Maps' } },
            { name:'leaflet-maps', path:'leaflet-maps', component:lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Maps' } } ] },
        { name:'pages', path:'pages', component:EmptyParentComponent, children:[
            { name:'404-pages', path:'404-pages', component:lazyLoading('pages/404-pages/404PagesPage') } ] } ],
   } ] } )
