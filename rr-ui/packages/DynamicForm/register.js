import StringWidget from './widgets/StringWidget.vue'
import DateRangeWidget from './widgets/DateRangeWidget.vue'
import TimeRangeWidget from './widgets/TimeRangeWidget.vue'
import DateTimeWidget from './widgets/DateTimeWidget.vue'
import NumberWidget from './widgets/NumberWidget.vue'
import SwitchWidget from './widgets/SwitchWidget.vue'
import SliderWidget from './widgets/SliderWidget.vue'
import RateWidget from './widgets/RateWidget.vue'
import SelectWidget from './widgets/SelectWidget.vue'
import RadioWidget from './widgets/RadioWidget.vue'
import CheckboxWidget from './widgets/CheckboxWidget.vue'
import CascaderWidget from './widgets/CascaderWidget.vue'
import BooleanWidget from './widgets/BooleanWidget.vue'

import registry from './WidgetRegistry'

export default {
  install() {
    // 文本框
    registry.register('df-string', StringWidget)

    // 数字输入框
    registry.register('df-number', NumberWidget)

    // 日期范围
    registry.register('df-daterange', DateRangeWidget)
    registry.register('df-timerang', TimeRangeWidget)

    // 日期
    registry.register('df-datetime', DateTimeWidget)

    // 开关
    registry.register('df-switch', SwitchWidget)

    // 拖动条
    registry.register('df-slider', SliderWidget)

    // 星打分
    registry.register('df-rate', RateWidget)

    // 下拉框
    registry.register('df-select', SelectWidget)

    // 单选框
    registry.register('df-radio', RadioWidget)

    // 多选框
    registry.register('df-checkbox', CheckboxWidget)

    //多级联动
    registry.register('df-cascader', CascaderWidget)

    //boolean
    registry.register('df-boolean', BooleanWidget)
  }
}
