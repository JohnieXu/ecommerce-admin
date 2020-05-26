import Vue from 'vue'
import { Button, Menu, Submenu, MenuItem, Layout, Sider, Header, Content, Table, Row, Cell, Icon } from 'view-design'

import 'view-design/dist/styles/iview.css'

[Button, Menu, Submenu, MenuItem, Layout, Sider, Header, Content, Table, Row, Cell, Icon].forEach(component => {
  Vue.component(component.name, component)
})
