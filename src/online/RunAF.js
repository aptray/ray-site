/* eslint-disable no-import-assign */
import React, { Component } from 'react';
import * as dependencies from 'amos-framework';
import OnlineCoder, { withRuntimeCode, getBabelParams } from 'ray-online-coder';
import { fromSnippets } from './hints';

delete dependencies.default;

const generalChilds = [
  { key: 'button', name: 'Button 按钮' },
  { key: 'icon', name: 'icon 内置图标' }
];

const navChilds = [
  { key: 'affix', name: 'Affix 固钉' },
  { key: 'anchor', name: 'Anchor 锚点' },
  { key: 'breadcrumb', name: '面包屑 Breadcrumb' },
  { key: 'dropdown', name: 'dropdown 下拉菜单' },
  { key: 'dropnav', name: 'DropNav 导航菜单' },
  { key: 'nav', name: 'Nav 导航' },
  { key: 'nestedmenu', name: '嵌套菜单' },
  { key: 'pagination', name: 'Pagination 分页' },
  { key: 'grid', name: 'Grid 栅格' },
  { key: 'layout', name: 'Layout 布局' },
  { key: 'steps', name: '步骤 steps' }
];

const formChilds = [
  { key: 'autocomplete', name: '自动补全 AutoComplete' },
  { key: 'checkbox', name: '复选框 Checkbox' },
  { key: 'cascader', name: '级联选择 Cascader' },
  { key: 'colorPicker', name: 'ColorPicker 颜色选择' },
  { key: 'form', name: '表单 Form' },
  { key: 'formBuilder', name: 'FormBuilder' },
  { key: 'input', name: '输入框 Input' },
  { key: 'inputnumber', name: '数字输入框 InputNumber' },
  { key: 'radio', name: '单选框 Radio' },
  { key: 'rate', name: '评分 Rate' },
  { key: 'switch', name: '开关 Switch' },
  { key: 'slider', name: '滑块 Slider' },
  { key: 'select', name: '下拉选择 Select' },
  { key: 'multiSelect', name: '下拉多选 MultiSelect' },
  { key: 'upload', name: 'Upload 上传文件' }
];

const dataChilds = [
  { key: 'avatar', name: '图像 Avatar' },
  { key: 'badge', name: '徽标 Badge' },
  { key: 'collapse', name: '折叠面板 Collapse' },
  { key: 'carousel', name: '轮播图 Carousel' },
  { key: 'cardpane', name: '卡片 CardPane' },
  { key: 'list', name: 'List 列表' },
  { key: 'tab', name: '选项卡 Tabs' },
  { key: 'tags', name: '标签 Tags' },
  { key: 'tree', name: '树 Tree' },
  { key: 'transfer', name: '穿梭 Transfer' },
  { key: 'timeline', name: '时间轴 timeline' },
  { key: 'name', name: '文本 name' }
];

const feedbackChilds = [
  { key: 'amosalert', name: '简单弹出框 AmosAlert' },
  { key: 'animate', name: '动画 Animate' },
  { key: 'drawer', name: 'Drawer 抽屉' },
  { key: 'message', name: '全局消息 message' },
  { key: 'modal', name: '模态框 Modal' },
  { key: 'overlay', name: '浮层 overlay' },
  { key: 'progress', name: 'Progress 进度条' },
  { key: 'popover', name: '提示 Popover' },
  { key: 'spinner', name: '过渡 Spinner' },
  { key: 'toast', name: '消息提醒 Toast' },
  { key: 'tips', name: '内嵌消息 Tips' },
  { key: 'tooltip', name: '提示 Tooltip' }
];

const otherChilds = [
  { key: 'divider', name: '分隔符 Divider' },
  { key: 'search', name: '查询 Search' },
  { key: 'totop', name: '返回顶部 Totop' },
  { key: 'vcode', name: '验证码' },
  { key: 'ctxmenu', name: '右键菜单' }
];

const extCilds = [
  { key: 'extcommon', name: '通用扩展组件' },
  { key: 'clearableinput', name: '可清除 ClearableInput' },
  { key: 'copy', name: 'Copy 拷贝' },
  { key: 'editable', name: '编辑 Editable' },
  { key: 'group', name: 'Group 组' },
  { key: 'iframe', name: 'IFrame' },
  { key: 'panel', name: 'Panel 面板' },
  { key: 'peoperty', name: 'Property 配置' }
];

const tools = [
  { key: 'commontools', name: '通用工具合集' },
  { key: 'connect', name: 'Connect HOC增强' },
  { key: 'scrollbar', name: 'Scrollbar 滚动' },
  { key: 'scrollload', name: '滚动加载' },
  { key: 'sidepane', name: 'SidePane 侧栏面板' },
  { key: 'movablepane', name: 'MovablePane 移动面板' },
  { key: 'splitpane', name: 'splitpane 分割面板' },
  { key: 'shuttle', name: 'Shuttle 梭子' }
];

const comList = [
  { key: 'style', name: '通用样式' },
  { key: 'general', name: '通用组件', children: generalChilds },
  { key: 'nav-layout', name: '布局与导航', children: navChilds },
  { key: 'forms', name: 'Form 系列', children: formChilds },
  { key: 'datas', name: '数据显示', children: dataChilds },
  { key: 'feedback', name: '操作反馈', children: feedbackChilds },
  { key: 'other', name: '其它组件', children: otherChilds },
  { key: 'ext', name: '扩展组件', children: extCilds },
  { key: 'tools', name: '工具与增强', children: tools }
];

const codes = {
  button: `
import { Button } from 'amos-framework';

const Demo = () => (
  <div>
    <Button>默认</Button>
    <Button type="minor">次要</Button>
    <Button size="lg">大尺寸</Button>
    <Button size="sm">小尺寸</Button>
    <Button circle>踩</Button>
    <Button disabled>不可用</Button>
    <Button icon={<Icon icon="collection" />}>使用 Icon 组件</Button>
  </div>
);
  `,
  icon: `
import { Icon } from 'amos-framework';

const Demo = () => (
  <div>
    <Icon icon="align-horizontal" />
    <Icon icon="align-vertical" />
    <Icon icon="alignleft" />
    <Icon icon="aligncenter" />
    <Icon icon="alignright" />
    <Icon icon="aligntop" />
    <Icon icon="alignmiddle" />
    <Icon icon="alignbottom" />
  </div>
);
`
};

function registerHints(monaco){
  monaco.languages.registerCompletionItemProvider('javascript', fromSnippets());
}

@withRuntimeCode({
  useDefaultDemo: true,
  dependencies,
  // 设置 babel 转码配置, babelPlugin 默认移除所有 amos-framework 中的 import
  babelParam: getBabelParams(['amos-framework']),
  // previewId: '__previewpage__' // 直接渲染到 html 中
  previewId: 'online-preview'
})
class RunAF extends Component {
  render() {
    return (
      <OnlineCoder {...this.props} codes={codes} fileList={comList} registerHints={registerHints} />
    );
  }
}

export default RunAF;
