import Vue from 'vue'
import Router from 'vue-router'
import { Row,Col,Container,Header,Main,Table,TableColumn,Badge,
  Radio,RadioButton,RadioGroup,Button,Input,Aside,Dropdown,DropdownMenu,
  DropdownItem,Menu,MenuItem,Select,Option,Pagination,Footer,
  Tag,Upload,MenuItemGroup,Dialog,Calendar,InputNumber,
  Switch,Checkbox,CheckboxGroup,Tabs,TabPane,Autocomplete

} from 'element-ui'

Vue.use(Router)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Badge)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Button)
Vue.use(Input)
Vue.use(Aside)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Footer)
Vue.use(Tag)
Vue.use(Upload)
Vue.use(MenuItemGroup)
Vue.use(Dialog)
Vue.use(Calendar)
Vue.use(InputNumber)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Autocomplete)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve=>(require(['@/components/HelloWorld'],resolve)),
    },
    {
      path: '/detail-mission',
      name: 'detail-mission',
      component: resolve=>(require(['@/components/Detail-Mission'],resolve)),
    },
    {
      path: '/mission-detail',
      name: 'mission-detail',
      component: resolve=>(require(['@/components/Mission-Detail'],resolve)),
    },
    {
      path: '/detail-document',
      name: 'detail-document',
      component: resolve=>(require(['@/components/Detail-Document'],resolve)),
    },{
      path: '/detail-overview',
      name: 'detail-overview',
      component: resolve=>(require(['@/components/Detail-Overview'],resolve)),
    },{
      path: '/detail-statistics',
      name: 'detail-statistics',
      component: resolve=>(require(['@/components/Detail-Statistics'],resolve)),
    },{
      path: '/index-roomadmin',
      name: 'index-roomadmin',
      component: resolve=>(require(['@/components/Index-RoomAdmin'],resolve)),
    },
    {
      path: '/detail-mission-roomadmin',
      name: 'detail-mission-roomadmin',
      component: resolve=>(require(['@/components/Detail-Mission-RoomAdmin'],resolve)),
    },
    {
      path: '/detail-document-roomadmin',
      name: 'detail-document-roomadmin',
      component: resolve=>(require(['@/components/Detail-Mission-RoomAdmin'],resolve)),
    },
    {
      path: '/detail-overview-roomadmin',
      name: 'detail-overview-roomadmin',
      component: resolve=>(require(['@/components/Detail-Mission-RoomAdmin'],resolve)),
    },
    {
      path: '/report-roomadmin',
      name: 'report-roomadmin',
      component: resolve=>(require(['@/components/Report-RoomAdmin'],resolve)),
    },
    {
      path: '/index-officeadmin',
      name: 'index-officeadmin',
      component: resolve=>(require(['@/components/Index-Officeadmin'],resolve)),
    },
    {
      path: '/report-officeadmin',
      name: 'report-officeadmin',
      component: resolve=>(require(['@/components/Report-OfficeAdmin'],resolve)),
    },
    {
      path: '/setting-member',
      name: 'setting-member',
      component: resolve=>(require(['@/components/Setting-Member'],resolve)),
    },
    {
      path: '/setting-character',
      name: 'setting-characterr',
      component: resolve=>(require(['@/components/Setting-Character'],resolve)),
    },
    {
      path: '/work-option-organization',//工作设置-组织架构
      name: 'Work-Option-Organization',
      component: resolve=>(require(['@/components/Work-Option-Organization'],resolve)),
    },
    {
      path: '/work-statistics',//工作设置-组织架构
      name: 'work-statistics',
      component: resolve=>(require(['@/components/Work-Statistics'],resolve)),
    }
  ],
})
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
