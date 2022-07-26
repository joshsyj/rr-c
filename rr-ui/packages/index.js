// import '../styles/element-variables.scss'

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
import RrSelectCheckbox from './RrSelectCheckbox'

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
  RrEcharts,
  IdToName,
  RrDropdown,
  RrCountTo,
  Sparrow,
  RrSelectCheckbox
]

export default {
  install(Vue) {
   
    Vue.use(register)

    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}


