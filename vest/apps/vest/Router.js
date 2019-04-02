import Vue         from 'vue'; // from 'vest/libs/vue/vue.esm.browser.js'
import Router      from 'vest/libs/vue/vue-router.esm.js'
import AppLayout   from 'vest/comp/admin/AppLayout.vue'
import AuthLayout  from 'vest/comp/auth/AuthLayout.vue'

//let lazyLoading = (name) => {
 // return import(`../../../src/components/${name}.vue`); };

import Login from 'vest/comp/auth/login/Login.vue';
import Signup from 'vest/comp/auth/signup/Signup.vue';
import VuesticPageNotFoundSearch  from 'vest/comp/pages/404-pages/VuesticPageNotFoundSearch.vue';
import VuesticPageNotFoundSimple   from 'vest/comp/pages/404-pages/VuesticPageNotFoundSimple.vue';
import VuesticPageNotFoundCustom   from 'vest/comp/pages/404-pages/VuesticPageNotFoundCustom.vue';
import VuesticPageNotFoundLargeText  from 'vest/comp/pages/404-pages/VuesticPageNotFoundLargeText.vue';
import Dashboard  from 'vest/comp/dashboard/Dashboard.vue';
//port Charts  from 'vest/comp/statistics/charts/Charts.vue';
//port ProgressBars  from 'vest/comp/statistics/progress-bars/ProgressBars.vue';
import FormElements  from 'vest/comp/forms/form-elements/FormElements.vue';
import FormWizard   from 'vest/comp/forms/form-wizard/FormWizard.vue';
import MediumEditor  from 'vest/comp/forms/medium-editor/MediumEditor.vue';
import Tables         from 'vest/comp/tables/Table.vue';
import Typography     from 'vest/comp/ui/typography/Typography.vue';
import Buttons         from 'vest/comp/ui/buttons/Buttons.vue';
import ColorPickers   from 'vest/comp/ui/color-pickers/ColorPickers.vue';
import Timelines       from 'vest/comp/ui/timelines/Timelines.vue';
import Dropdowns        from 'vest/comp/ui/dropdowns/Dropdowns.vue';
import Notifications   from 'vest/comp/ui/notifications/Notifications.vue';
import SetsList        from 'vest/comp/ui/icons/SetsList.vue';
import Icons        from 'vest/comp/ui/icons/Icons.vue';
import IconSet         from 'vest/comp/ui/icons/IconSet.vue';
import Spinners         from 'vest/comp/ui/spinners/Spinners.vue';
import Grid              from 'vest/comp/ui/grid/Grid.vue';
import Modals              from 'vest/comp/ui/modals/Modals.vue';
import Cards             from 'vest/comp/ui/cards/Cards.vue';
import FileUpload       from 'vest/comp/ui/file-upload/FileUpload.vue';
import Tags              from 'vest/comp/ui/tags/Tags.vue';
import TreeView           from 'vest/comp/ui/tree-view/TreeView.vue';
import Collapse            from 'vest/comp/ui/collapse/Collapse.vue';
import Filters            from 'vest/comp/ui/filters/Filters.vue';
import Extra              from 'vest/comp/extra/Extra.vue';
import GoogleMapsPage     from 'vest/comp/maps/google-maps/GoogleMapsPage.vue';
//port YandexMapsPage      from 'vest/comp/maps/yandex-maps/YandexMapsPage.vue';
import LeafletMapsPage     from 'vest/comp/maps/leaflet-maps/LeafletMapsPage.vue';
import PagesPage404       from 'vest/comp/pages/404-pages/404PagesPage.vue';


Vue.use(Router);

const EmptyParentComponent = {
  template:'<router-view></router-view>',
};

export default new Router( {
  routes:[
    { path:'*', redirect:{ name:'dashboard' } },
    { path:'/auth', component:AuthLayout, children:[
      { path:'login',  name:'login',  component:Login  }, // lazyLoading('auth/login/Login'),
      { path:'signup', name:'signup', component:Signup }, // lazyLoading('auth/signup/Signup'),
      { path:'', redirect:{ name:'login' } } ] },
    { path:'/404', component:EmptyParentComponent, children:[ // lazyLoading('pages/404-pages/VuesticPageNotFoundSearch'),
      { path:'not-found-advanced', name:'not-found-advanced',   component:VuesticPageNotFoundSearch },
      { path:'not-found-simple',   name:'not-found-simple',     component:VuesticPageNotFoundSimple },
      { path:'not-found-custom',   name:'not-found-custom',     component:VuesticPageNotFoundCustom },
      { path:'/pages/not-found-large-text', name:'not-found-large-text', component:VuesticPageNotFoundLargeText } ] },
    { path:'/admin', name:'Admin', component:AppLayout, children:[
      { path:'dashboard', name:'dashboard',  component:Dashboard, default:true }, // lazyLoading('dashboard/Dashboard'),
    /*{ path:'statistics', name:'statistics', component:EmptyParentComponent, children:[
        { path:'charts', name:'charts', component:Charts, // lazyLoading('statistics/charts/Charts'),
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Charts' } },
        { path:'progress-bars', name:'progress-bars', component:ProgressBars, // lazyLoading('statistics/progress-bars/ProgressBars'),
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars' } } ] },*/
        { path:'forms', name:'forms', component:EmptyParentComponent, children:[
            { path:'form-elements', name:'form-elements', component:FormElements, // lazyLoading('forms/form-elements/FormElements'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/inputs'  } },
            { path:'form-wizards', name:'form-wizards', component:FormWizard, // lazyLoading('forms/form-wizard/FormWizard'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Wizards' } },
            { path:'medium-editor', name:'medium-editor', component:MediumEditor, // lazyLoading('forms/medium-editor/MediumEditor'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor' } } ] },
        { path:'tables', name:'tables', component:Tables, // lazyLoading('tables/Table'),
          meta: {wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tables' } },
        { path:'ui', name:'ui', component:EmptyParentComponent, children:[
            { path:'typography', name:'typography', component:Typography }, // lazyLoading('vest/typography/Typography'),
            { path:'buttons', name:'buttons', component:Buttons, // lazyLoading('vest/buttons/Buttons'),
              meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons' } },
            { name:'color-pickers', path:'color-pickers', component:ColorPickers }, // lazyLoading('vest/color-pickers/ColorPickers'),
            { name:'timelines', path:'timelines', component:Timelines, // lazyLoading('vest/timelines/Timelines'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines' } },
            { name:'dropdowns', path:'dropdowns', component:Dropdowns, // lazyLoading('vest/dropdowns/Dropdowns'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Dropdowns' } },
            { name:'notifications', path:'notifications', component:Notifications }, // lazyLoading('vest/notifications/Notifications'),
            { path:'icons', component:Icons,children:[ // lazyLoading('vest/icons/Icons')
                { name:'icon-sets', path:'', component:SetsList }, // lazyLoading('vest/icons/SetsList'), // Default route
                { name:'icon-set',  path:':name', component:IconSet, props:true } ] }, //lazyLoading('vest/icons/IconSet'),
            { name:'spinners', path:'spinners', component:Spinners },//lazyLoading('vest/spinners/Spinners'),
            { name:'grid', path:'grid', component:Grid }, // lazyLoading('vest/grid/Grid'),
            { name:'modals', path:'modals', component:Modals, // lazyLoading('vest/modals/Modals'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Modals' } },
            { name:'cards', path:'cards', component:Cards, // lazyLoading('vest/cards/Cards'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Cards' } },
            { name:'file-upload', path:'file-upload', component:FileUpload, // lazyLoading('vest/file-upload/FileUpload'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload' } },
            { name:'tags', path:'tags', component:Tags, //lazyLoading('vest/tags/Tags'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tags' } },
            { name:'tree-view', path:'tree-view', component:TreeView, // lazyLoading('vest/tree-view/TreeView'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view' } },
            { name:'collapse', path:'collapse', component:Collapse }, // lazyLoading('vest/collapse/Collapse')
            { name:'filters', path:'filters',   component:Filters     } ] },  // lazyLoading('vest/filters/Filters')

        { name:'extra', path:'extra', component:Extra, // lazyLoading('extra/Extra'),
          meta:{ wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs' } },
        { name:'maps', path:'maps', component:EmptyParentComponent, children:[
            { name:'google-maps', path:'google-maps', component:GoogleMapsPage, // lazyLoading('maps/google-maps/GoogleMapsPage'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Maps' } },
            { name:'leaflet-maps', path:'leaflet-maps', component:LeafletMapsPage, // lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
              meta:{   wikiLink:'https://github.com/epicmaxco/vuestic-admin/wiki/Maps' } } ] },
        { name:'pages', path:'pages', component:EmptyParentComponent, children:[
            { name:'404-pages', path:'404-pages', component:PagesPage404 } ] } ], // lazyLoading('pages/404-pages/404PagesPage'),
   } ] } )
