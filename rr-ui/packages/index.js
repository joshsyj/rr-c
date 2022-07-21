import Element from 'element-ui'
import '../styles/element-variables.scss'

import DynamicForm from './DynamicForm'
import DyFormitemWraper from './DynamicForm/DyFormitemWraper'
import register from './DynamicForm/register'
import DynamicTable from './DynamicTable'
import DynamicPage from './DynamicPage'
import RrCheckBox from './RrCheckBox'
import UploadFile from './UploadFile'
import RrSelect from './RrSelect'
import TemplateDialogWraper from './Dialog/TemplateDialogWraper'
import RrCard from './RrCard'
import RrCheckRadio from './RrCheckRadio'
import IdToName from './IdToName'
import RrDropdown from './RrDropdown'
import RrCountTo from './RrCountTo'
import RrEcharts from './RrEcharts'
import Sparrow from './Sparrow'

const components = [
  DynamicForm,
  DyFormitemWraper,
  DynamicTable,
  DynamicPage,
  RrCheckBox,
  UploadFile,
  RrSelect,
  TemplateDialogWraper,
  RrCard,
  RrCheckRadio,
  IdToName,
  RrDropdown,
  RrCountTo,
  RrEcharts,
  Sparrow,
]

export default {
  install(Vue) {
    Vue.use(Element, {
      size: 'small', // set element-ui default size
      // i18n: (key, value) => i18n.t(key, value)
    })
    Vue.use(register)

    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}


